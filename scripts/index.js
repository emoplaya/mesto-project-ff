// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const placesContainer = document.querySelector(".places__list");

const createCard = (card, deleteCard) => {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  cardElement.querySelector(".card__title").textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;
  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => deleteCard(cardElement));
  return cardElement;
};

const deleteCard = (cardElement) => {
  cardElement.remove();
};

const renderCards = (cards) => {
  cards.forEach((card) => {
    placesContainer.append(createCard(card, deleteCard));
  });
};

renderCards(initialCards);
