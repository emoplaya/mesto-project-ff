// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const createCard = (card, deleteCard) => {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__title").textContent = card.name;
  cardElement.querySelector(".card__image").src = card.link;
  cardElement.querySelector(".card__image").alt = card.name;
  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => deleteCard(cardElement));
  return cardElement;
};

const deleteCard = (cardElement) => {
  cardElement.remove();
};

const renderCards = (cards) => {
  const placesContainer = document.querySelector(".places__list");
  cards.forEach((card) => {
    placesContainer.append(createCard(card, deleteCard));
  });
};

renderCards(initialCards);
