import initialCards from "./components/cards";
import { createCard, deleteCard, likeCard } from "./components/card";
import { openModal, closeModal } from "./components/modal";

import "./pages/index.css";
import "./components/modal";

const placesContainer = document.querySelector(".places__list");

// элементы для работы с профилем
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

// элементы попапа изменения профиля
const editProfileForm = document.forms["edit-profile"];
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const editProfilePopup = document.querySelector(".popup_type_edit");

const editProfileButton = document.querySelector(".profile__edit-button");
editProfileButton.addEventListener("click", () => {
  openModal(editProfilePopup);
  fillProfileInputs();
});

// элементы попапа добавления карточки
const addCardForm = document.forms["new-place"];
const addCardPopup = document.querySelector(".popup_type_new-card");
const placeName = document.querySelector(".popup__input_type_card-name");
const placeImageLink = document.querySelector(".popup__input_type_url");

const addCardButton = document.querySelector(".profile__add-button");
addCardButton.addEventListener("click", () => openModal(addCardPopup));

// элементы попапа с картинкой карточки
const cardImagePopup = document.querySelector(".popup_type_image");
const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");

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
  closeModal(editProfilePopup);
}

editProfileForm.addEventListener("submit", handleEditProfile);

// функция для открытия попапа с картинкой карточки
function showImagePopup(card) {
  popupImage.src = card.link;
  popupImage.alt = card.name;
  popupCaption.textContent = card.name;
  openModal(cardImagePopup);
}

// добавление карточки через форму new-place
function handleAddCard(evt) {
  evt.preventDefault();
  const newCard = createCard(
    { name: placeName.value, link: placeImageLink.value },
    deleteCard,
    likeCard,
    showImagePopup
  );
  placesContainer.prepend(newCard);
  closeModal(addCardPopup);
  addCardForm.reset();
}

addCardForm.addEventListener("submit", handleAddCard);

// закрытие попапа с помощью крестика
const closePopupButtons = document.querySelectorAll(".popup__close");
closePopupButtons.forEach((closePopupButton) =>
  closePopupButton.addEventListener("click", () => {
    const popup = closePopupButton.closest(".popup");
    closeModal(popup);
  })
);

// рендер карточек
const renderCards = (cards) => {
  cards.forEach((card) => {
    placesContainer.prepend(
      createCard(card, deleteCard, likeCard, showImagePopup)
    );
  });
};

renderCards(initialCards);
