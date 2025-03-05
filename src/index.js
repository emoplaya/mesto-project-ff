import { createCard, deleteCard, likeCard } from "./components/card";
import { openModal, closeModal } from "./components/modal";
import { enableValidation, clearValidation } from "./components/validation";
import {
  getInfo,
  updateUserData,
  addNewCardToServer,
  deleteCardFromServer,
  likeCardOnServer,
  unlikeCardOnServer,
  updateUserAvatar,
} from "./components/api";

import "./pages/index.css";
import "./components/modal";

const placesContainer = document.querySelector(".places__list");
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

// ПРОФИЛЬ

// элементы для работы с профилем
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileImage = document.querySelector(".profile__image");

// установка данных профиля
function setUser(userData) {
  const { name, about, avatar } = userData;
  profileTitle.textContent = name;
  profileDescription.textContent = about;
  profileImage.src = avatar;
}

// элементы попапа изменения профиля
const editProfileForm = document.forms["edit-profile"];
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const editProfilePopup = document.querySelector(".popup_type_edit");
const editProfileButton = document.querySelector(".profile__edit-button");

// обработчик клика открытия попапа изменения профиля
editProfileButton.addEventListener("click", () => {
  openModal(editProfilePopup);
  fillProfileInputs();
  clearValidation(editProfileForm, validationConfig);
});

// функция для заполнения полей формы изменения профиля
function fillProfileInputs() {
  editProfileForm.name.value = profileTitle.textContent;
  editProfileForm.description.value = profileDescription.textContent;
}

// изменение данных профиля через форму edit-profile
function handleEditProfile(evt) {
  evt.preventDefault();
  const jobInputValue = jobInput.value;
  const nameInputValue = nameInput.value;
  profileTitle.textContent = nameInputValue;
  profileDescription.textContent = jobInputValue;
  const submitButton = editProfileForm.querySelector(".popup__button");
  submitButton.textContent = "Сохранение...";
  updateUserData(nameInputValue, jobInputValue)
    .then(() => {
      closeModal(editProfilePopup);
      clearValidation(editProfileForm, validationConfig);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      submitButton.textContent = "Сохранить";
    });
}

// обработчик отправки формы
editProfileForm.addEventListener("submit", handleEditProfile);

// элементы попапа изменения аватара
const editAvatarForm = document.forms["edit-avatar"];
const updateAvatarPopup = document.querySelector(".popup_type_new-avatar");
const avatarImageLink = document.querySelector(".popup__input_type_avatar");
const avatarProfileButton = document.querySelector(".profile__image-wrapper");

// обработчик клика открытия попапа изменения аватара
avatarProfileButton.addEventListener("click", () => {
  openModal(updateAvatarPopup);
  clearValidation(editAvatarForm, validationConfig);
});

// изменение аватара через форму edit-avatar
function handleUpdateAvatar(evt) {
  evt.preventDefault();
  const avatarUrl = avatarImageLink.value;
  const submitButton = editAvatarForm.querySelector(".popup__button");
  submitButton.textContent = "Сохранение...";
  updateUserAvatar(avatarUrl)
    .then((userData) => {
      profileImage.src = userData.avatar;
      closeModal(updateAvatarPopup);
      editAvatarForm.reset();
      clearValidation(editAvatarForm, validationConfig);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      submitButton.textContent = "Сохранить";
    });
}

// обработчик отправки формы
editAvatarForm.addEventListener("submit", handleUpdateAvatar);

// КАРТОЧКИ

// элементы попапа добавления карточки
const addCardForm = document.forms["new-place"];
const addCardPopup = document.querySelector(".popup_type_new-card");
const placeName = document.querySelector(".popup__input_type_card-name");
const placeImageLink = document.querySelector(".popup__input_type_url");
const addCardButton = document.querySelector(".profile__add-button");

// обработчик клика открытия попапа добавления карточки
addCardButton.addEventListener("click", () => {
  clearValidation(addCardForm, validationConfig);
  openModal(addCardPopup);
});

// добавление карточки через форму new-place
function handleAddCard(evt) {
  evt.preventDefault();
  const name = placeName.value;
  const link = placeImageLink.value;
  const submitButton = addCardForm.querySelector(".popup__button");
  submitButton.textContent = "Сохранение...";
  addNewCardToServer(name, link)
    .then((newCard) => {
      const cardElement = createCard(
        newCard,
        userId,
        deleteCard,
        likeCard,
        showImagePopup,
        deleteCardFromServer,
        likeCardOnServer,
        unlikeCardOnServer
      );
      placesContainer.prepend(cardElement);
      closeModal(addCardPopup);
      addCardForm.reset();
      clearValidation(addCardForm, validationConfig);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      submitButton.textContent = "Сохранить";
    });
}

addCardForm.addEventListener("submit", handleAddCard);

// КАРТИНКА

// элементы попапа с картинкой карточки
const cardImagePopup = document.querySelector(".popup_type_image");
const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");

// функция для открытия попапа с картинкой карточки
function showImagePopup(card) {
  popupImage.src = card.link;
  popupImage.alt = card.name;
  popupCaption.textContent = card.name;
  openModal(cardImagePopup);
}

// закрытие попапа с помощью крестика
const closePopupButtons = document.querySelectorAll(".popup__close");
closePopupButtons.forEach((closePopupButton) =>
  closePopupButton.addEventListener("click", () => {
    const popup = closePopupButton.closest(".popup");
    closeModal(popup);
  })
);

let userId;

// запрос данных с сервера
getInfo()
  .then(([userData, initialCards]) => {
    userId = userData._id;
    setUser(userData);
    renderCards(initialCards, userId);
  })
  .catch((err) => console.log(err));

// рендер карточек
const renderCards = (cards, userId) => {
  cards.forEach((card) => {
    const cardElement = createCard(
      card,
      userId,
      deleteCard,
      likeCard,
      showImagePopup,
      deleteCardFromServer,
      likeCardOnServer,
      unlikeCardOnServer
    );
    placesContainer.prepend(cardElement);
  });
};

enableValidation(validationConfig);
