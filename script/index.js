import * as elements from './elementsPage.js';
import {initialCards} from './initialCard.js';
import {Card}  from './Card.js';
import {FormValidator} from './FormValidator.js';
import Popup from './Popup.js';
import Section from './Section.js';

const formValidators = {};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formElement));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute('name');  // получаем данные из атрибута `name` у формы
    formValidators[formName] = validator;               // вот тут в объект записываем под именем формы
    validator.enableValidation();
  });
};

enableValidation({
  formElement: '.popup-information',
  inputElement: '.popup__form',
  buttonElement: '.popup__form-save',
  inactiveButtonClass: 'popup__form-save_disable',
  errorClass: 'popup__form-error_action'
});

/* function closePopupByEscape(event) {                      // онределение клавишы Esc  и закрытие попапа
  if (event.code == 'Escape') {
  closePopup();
  }
} */
function hidePopup(event) {                               // нажатие на оверлей и крестик
  if (event.target.classList.contains('popup_opened') 
    || event.target.classList.contains('popup__container-btn')) {
      closePopup();
    }
}

function openPopupProfil(item) {
	elements.nameInput.value = elements.userName.textContent;			    //	занесение данных пользователя
	elements.jobInput.value = elements.userJob.textContent;				    //	с полей профиля в поля формы попапа
  openPopup(item);	                              // открытие попапа профиля
}																							

function openPopupCard (item) {                                     // очищение полей попапа при очередном вызове
  item.querySelectorAll('.popup__form').forEach(e => e.value = '');
  formValidators['imageData'].resetValidation();
  openPopup(item);
}

export function openPopup(item) {                        // открытие попапа карточки
  item.classList.add('popup_opened');
 // document.addEventListener('keydown', closePopupByEscape); //слушатель нажатия на клавишу
  item.addEventListener('mousedown', hidePopup);  // слушатель нажатия на оверлей и крестик
}

function closePopup() {
	elements.popups.forEach(popup => {                 //закрытие любого попапа крестиком
    popup.classList.remove('popup_opened');
  //  document.removeEventListener('keydown', closePopupByEscape); // снятие слушателя нажатия на клавишу
    popup.removeEventListener('mousedown', hidePopup);
  }) 
}

function handleProfileFormSubmit (evt) {
	evt.preventDefault();
	elements.userName.textContent = elements.nameInput.value;         // перенос значений из полей в страницу 
	elements.userJob.textContent = elements.jobInput.value;           // попап профиля
	closePopup();                                   // закрытие попапа
}

function createCard(data, templateSelector) {                    //создание новой карточки
  const card = new Card(data, templateSelector);    
  const cardElement = card.generateCard(); 
  return cardElement
}

function addingCard(data, templateSelector) {             //создание и добавление новой карточки
  const cardElement = createCard(data, templateSelector);    
  document.querySelector('.cards').prepend(cardElement);  //добавление карточки в DOM
}

/* initialCards.forEach((data) => {                 //перебор базы данных
  addingCard(data, '.card-template');
}) */

function addNewCard(event) {                    // создание карточки пользователем
  event.preventDefault();
  const element = {};
  element.name = elements.popupCardTitile.value;
  element.link = elements.popupCardUrl.value;

  closePopup();
  addingCard(element, '.card-template');
}

elements.openPopapProfilButton.addEventListener('click', () => {    //обработчик событий на кнопке показа попапа)
  //openPopupProfil(elements.popupProfil);
  const popup = new Popup('.popup-profil');
  popup.generatePopup();
  popup.open();
}); 

elements.openPopupCardButton.addEventListener('click', () => {      //обработчик событий на кнопке попапа картинок 
  openPopupCard(elements.popupCard);
});

elements.formProfil.addEventListener('submit', handleProfileFormSubmit);      // слушатель событий (отправки) формы профиля
elements.formCard.addEventListener('submit', addNewCard);              // слушатель событий (отправка) новой карточки

const cardList = new Section ({
  item : initialCards,
  renderer : (item) => {
    const card = new Card(item, '.card-template');
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
}, '.cards'
);

cardList.showAllElement();