import * as elements from './elementsPage.js';
import {initialCards} from './initialCard.js';
import {Card}  from './card.js';
import {FormValidator} from './formValidate.js';

const argumentsValidation = {
  formElement: '.popup__form-content',
  inputElement: '.popup__form',
  buttonElement: '.popup__form-save',
  inactiveButtonClass: 'popup__form-save_disable',
  errorClass: 'popup__form-error_action'
};

function searchFormElement(event) {
  const inputList = Array.from(event.querySelectorAll(argumentsValidation.inputElement));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      const formControl = new FormValidator(argumentsValidation, inputElement);
      formControl.isValid();
    })
  });
}

function closePopupByEscape(event) {                      // онределение клавишы Esc  и закрытие попапа
  if (event.code == 'Escape') {
  closePopup();
  }
}
function hidePopup(event) {                               // нажатие на оверлей и крестик
  if (event.target.classList.contains('popup_opened') 
    || event.target.classList.contains('popup__container-btn')) {
      closePopup();
    }
}

function hideError(item) {                                 // удаление значения предыдущей ошибки при новом открытии попапа
  item. querySelectorAll('.popup__form-error').forEach(e => e.textContent = '');
  item.querySelectorAll('.popup__form').forEach(e => e.classList.remove('popup__form_type_error')); 
}

function turnOffButton(item) {                             //инактивация кнопки при открытии попапа картинки
    const buttonElement = item.querySelector('.popup__form-save')
    buttonElement.setAttribute('disabled', 'disabled'); 
    buttonElement.classList.add('popup__form-save_disable')
}

function openPopupProfil(item) {
	elements.nameInput.value = elements.userName.textContent;			    //	занесение данных пользователя
	elements.jobInput.value = elements.userJob.textContent;				    //	с полей профиля в поля формы попапа
  openPopup(item);	                              // открытие попапа профиля
}																							

function openPopupCard (item) {                                     // очищение полей попапа при очередном вызове
  item.querySelectorAll('.popup__form').forEach(e => e.value = '');
  openPopup(item);
}

export function openPopup(item) {                        // открытие попапа карточки
  item.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEscape); //слушатель нажатия на клавишу
  item.addEventListener('mousedown', hidePopup);  // слушатель нажатия на оверлей и крестик
  hideError(item);
}

function closePopup() {
	elements.popups.forEach(popup => {                 //закрытие любого попапа крестиком
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEscape); // снятие слушателя нажатия на клавишу
    popup.removeEventListener('mousedown', hidePopup);
  }) 
}

function handleProfileFormSubmit (evt) {
	evt.preventDefault();
	elements.userName.textContent = elements.nameInput.value;         // перенос значений из полей в страницу 
	elements.userJob.textContent = elements.jobInput.value;           // попап профиля
	closePopup();                                   // закрытие попапа
}

function addingCreateCard(data) {             //создание и добавление новой карточки
  const card = new Card(data);                //создание новой Card
  const cardElement = card.generateCard();    //инициализация создания и выедения новой карточки
  document.querySelector('.cards').prepend(cardElement);  //добавление карточки в DOM
}

initialCards.forEach((data) => {                 //перебор базы данных
  addingCreateCard(data)                      
})

function addNewCard(event) {                    // создание карточки пользователем
  event.preventDefault();
  const element = {};
  element.name = elements.popupCardTitile.value;
  element.link = elements.popupCardUrl.value;

  closePopup();
  addingCreateCard(element);
}

elements.openPopapProfilButton.addEventListener('click', () => {    //обработчик событий на кнопке показа попапа)
  openPopupProfil(elements.popupProfil);
  hideError(elements.popupProfil);
  searchFormElement(elements.popupProfil);
}); 

elements.openPopupCardButton.addEventListener('click', () => {      //обработчик событий на кнопке попапа картинок 
  openPopupCard(elements.popupCard);
  turnOffButton(elements.popupCard);
  hideError(elements.popupCard);
  searchFormElement(elements.popupCard);
});

elements.formProfil.addEventListener('submit', handleProfileFormSubmit);      // слушатель событий (отправки) формы профиля
elements.formCard.addEventListener('submit', addNewCard);              // слушатель событий (отправка) новой карточки