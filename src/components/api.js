const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-33",
  headers: {
    "Content-Type": "application/json",
    authorization: "0480f82d-e10f-4586-8f02-7352795566a5",
  },
};

const checkRequest = async (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

// получение карточек
const getInitialCards = async () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then((res) => checkRequest(res));
};

// получение данных профиля
const getUserData = async () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then((res) => checkRequest(res));
};

const getInfo = async () => {
  return Promise.all([getUserData(), getInitialCards()]);
};

// обновление данных профиля
const updateUserData = async (name, about) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  }).then((res) => checkRequest(res));
};

// обновления аватара
const updateUserAvatar = async (avatarUrl) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarUrl,
    }),
  }).then((res) => checkRequest(res));
};

// добавление новой карточки
const addNewCardToServer = async (name, link) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  }).then((res) => checkRequest(res));
};

// удаление карточки
const deleteCardFromServer = async (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((res) => checkRequest(res));
};

// лайк карточки
const likeCardOnServer = async (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  }).then((res) => checkRequest(res));
};

// снятие лайка карточки
const unlikeCardOnServer = async (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((res) => checkRequest(res));
};

export {
  getInfo,
  updateUserData,
  addNewCardToServer,
  deleteCardFromServer,
  likeCardOnServer,
  unlikeCardOnServer,
  updateUserAvatar,
};
