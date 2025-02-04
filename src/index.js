import initialCards from "./components/cards";
import { createCard, deleteCard, likeCard } from "./components/card";
import { openModal, closeModal } from "./components/modal";

import "./pages/index.css";
import "./components/modal";

const placesContainer = document.querySelector(".places__list");

// элементы для работы с профилем
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const editProfilePopup = document.querySelector(".popup_type_edit");
const editProfileButton = document.querySelector(".profile__edit-button");
editProfileButton.addEventListener("click", () => openModal(editProfilePopup));

// элементы для работы с новыми карточками
const addCardPopup = document.querySelector(".popup_type_new-card");
const addCardButton = document.querySelector(".profile__add-button");
addCardButton.addEventListener("click", () => openModal(addCardPopup));

const cardImagePopup = document.querySelector(".popup_type_image");

// закрытие попапа с помощью крестика
const closePopupButtons = document.querySelectorAll(".popup__close");
closePopupButtons.forEach((closePopupButton) =>
  closePopupButton.addEventListener("click", () => {
    const popup = closePopupButton.closest(".popup");
    closeModal(popup);
  })
);

// закрытие попапа при нажатии на оверлэй
const popups = document.querySelectorAll(".popup");
popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target === popup) {
      closeModal(popup);
    }
  });
});

// изменение данных профиля через форму edit-profile
const formElement = document.forms["edit-profile"];
formElement.name.value = profileTitle.textContent;
formElement.description.value = profileDescription.textContent;

const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");

function handleFormSubmit(evt) {
  evt.preventDefault();
  const jobInputValue = jobInput.value;
  const nameInputValue = nameInput.value;
  document.querySelector(".profile__title").textContent = nameInputValue;
  document.querySelector(".profile__description").textContent = jobInputValue;
  closeModal(editProfilePopup);
}

formElement.addEventListener("submit", handleFormSubmit);

// добавление карточки через форму new-place
const addCardForm = document.forms["new-place"];
const placeName = document.querySelector(".popup__input_type_card-name");
const placeImageLink = document.querySelector(".popup__input_type_url");

function handleAddCard(evt) {
  evt.preventDefault();
  const newCard = createCard(
    { name: placeName.value, link: placeImageLink.value },
    deleteCard,
    likeCard,
    openModal,
    cardImagePopup
  );
  placesContainer.prepend(newCard);
  closeModal(addCardPopup);
  addCardForm.reset();
}

addCardForm.addEventListener("submit", handleAddCard);

// рендер карточек
const renderCards = (cards) => {
  cards.forEach((card) => {
    placesContainer.prepend(
      createCard(card, deleteCard, likeCard, openModal, cardImagePopup)
    );
  });
};

renderCards(initialCards);
