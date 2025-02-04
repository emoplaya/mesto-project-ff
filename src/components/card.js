// создание карточки
const createCard = (card, deleteCard, likeCard, openModal, cardImagePopup) => {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardTitle.textContent = card.name;

  cardImage.addEventListener("click", () => {
    const popupImage = cardImagePopup.querySelector(".popup__image");
    const popupCaption = cardImagePopup.querySelector(".popup__caption");
    popupImage.src = card.link;
    popupImage.alt = card.name;
    popupCaption.textContent = card.name;
    openModal(cardImagePopup);
  });

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => deleteCard(cardElement));
  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", () => likeCard(likeButton));
  return cardElement;
};

// удаление карточки
const deleteCard = (cardElement) => {
  cardElement.remove();
};

// лайк карточки
const likeCard = (likeButton) => {
  likeButton.classList.toggle("card__like-button_is-active");
};

export { createCard, deleteCard, likeCard };
