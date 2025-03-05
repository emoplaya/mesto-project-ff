// создание карточки
const createCard = (
  card,
  userId,
  deleteCard,
  likeCard,
  showImagePopup,
  deleteCardFromServer,
  likeCardOnServer,
  unlikeCardOnServer
) => {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardTitle.textContent = card.name;

  cardImage.addEventListener("click", () => showImagePopup(card));

  const deleteButton = cardElement.querySelector(".card__delete-button");
  if (userId === card.owner._id) {
    deleteButton.addEventListener("click", () =>
      deleteCard(cardElement, card._id, deleteCardFromServer)
    );
  } else {
    deleteButton.remove();
  }

  const likeButton = cardElement.querySelector(".card__like-button");
  const cardLikes = cardElement.querySelector(".card__like-count");
  cardLikes.textContent = card.likes.length;

  if (card.likes.some((like) => like._id === userId)) {
    likeButton.classList.add("card__like-button_is-active");
  }

  likeButton.addEventListener("click", () =>
    likeCard(
      likeButton,
      card._id,
      cardLikes,
      likeCardOnServer,
      unlikeCardOnServer
    )
  );

  return cardElement;
};

// удаление карточки
const deleteCard = (cardElement, cardId, deleteCardFromServer) => {
  cardElement.remove();
  deleteCardFromServer(cardId)
    .then(() => cardElement.remove())
    .catch((err) => console.log(err));
};

// лайк карточки
const likeCard = (
  likeButton,
  cardId,
  cardLikes,
  likeCardOnServer,
  unlikeCardOnServer
) => {
  const isLiked = likeButton.classList.contains("card__like-button_is-active");

  const likeRequest = isLiked
    ? unlikeCardOnServer(cardId)
    : likeCardOnServer(cardId);

  likeRequest
    .then((updatedCard) => {
      likeButton.classList.toggle("card__like-button_is-active");
      cardLikes.textContent = updatedCard.likes.length;
    })
    .catch((err) => console.log(err));
};

export { createCard, deleteCard, likeCard };
