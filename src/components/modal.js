// функция для закрытия модального окна с помощью 'Escape'
function handleEscapeKey(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    if (openedPopup) {
      closeModal(openedPopup);
    }
  }
}

// функция для закрытия модального окна с помощью клика на оверлэй
const closePopupByOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.currentTarget);
  }
};

// открытие модального окна
function openModal(popup) {
  popup.classList.add("popup_is-animated");
  setTimeout(() => popup.classList.add("popup_is-opened"), 0);
  document.addEventListener("keydown", handleEscapeKey);
  popup.addEventListener("click", closePopupByOverlay);
}

// закрытие модального окна
function closeModal(popup) {
  popup.classList.remove("popup_is-opened");
  setTimeout(() => popup.classList.remove("popup_is-animated"), 600);
  document.removeEventListener("keydown", handleEscapeKey);
  popup.removeEventListener("click", closePopupByOverlay);
}

export { openModal, closeModal };
