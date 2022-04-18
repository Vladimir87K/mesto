import * as elements from './elementsPage.js';
import {initialCards} from './initialCard.js';
import {Card}  from './card.js';
import {FormValidator} from './formValidate.js';

const argumentsValidation = {
  formElement: '.popup__form-content',
  inputElement: '.popup__form',
  buttonElement: '.popup__form-save',
  inactiveButtonClass: 'popup__form-save_disable',
  inputErrorClass: 'popup__form_type_error',
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

/* function creatCard(el) {
  const newCard = cardTemplate.content.firstElementChild.cloneNode(true); //создание копии темплате
  const newCardImg = newCard.querySelector('.card__img')
  newCardImg.src = el.link;                                               // перенос ссылки в созданную карточку
  newCardImg.alt = el.name;                                               // сознаие alt картинки
  newCard.querySelector('.card__title').textContent = el.name;            // заголовок карточки
  
  likeCard(newCard);                                               // реакция на нажатие сердечка
  deleteCard(newCard);                                             // реакция на нажатие корзины
  revealCardImgPopap(newCard);                                     // реакция на нажатие картинки 

  return newCard;
}

function renderInitialCards(element) {
  const newCard = creatCard(element);
  cards.prepend(newCard);            */                          // добавление элемента на страницу
//}

/* function addNewCard(event) {                                                // добавление данных новой карточки
  event.preventDefault();
  const element = {};
  element.name = popupCardTitile.value;
  element.link = popupCardUrl.value;

  closePopup();
  renderInitialCards(element)

  popupCardTitile.value = '';
  popupCardUrl.value = '';
}

function removeCard(event) {                                  // удаление карточки
  const card = event.target.closest('.card');
  card.remove();
}
 */
/* function deleteCard(card) {
  card.querySelector('.card__delete').addEventListener('click', removeCard);
} */

/* function toggleLikeCard(event) {                                  // активация лайка
  event.target.classList.toggle('card__like_active');
}

function likeCard(card) {                                       // реакция на нажатие лайка
  card.querySelector('.card__like').addEventListener('click', toggleLikeCard);
 */ //}

/* function openPopapImgAction(evt) {                              // открытие попапа-картинки с присваиванием изображения и подписи
  popupImageTitle.textContent = evt.target.alt;
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
  openPopup(popupImg);
} */

/* function revealCardImgPopap(card) {                                           // реакция на нажатие картинки 
  card.querySelector('.card__img').addEventListener('click', openPopapImgAction); 
}  */




//initialCards.map(renderInitialCards);





function addingCreateCard(data) {             //создание и добавление новой карточки
  const card = new Card(data);                //создание новой Card
  const cardElement = card.generateCard();    //инициализация создания и выедения новой карточки
  document.querySelector('.cards').prepend(cardElement);  //добавление карточки в DOM
}

initialCards.forEach((data) => {                 //перебор базы данных
  addingCreateCard(data)                      
})

function addNewCard(event) {
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




/* function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
} */

/* function toggleButtonState(inputList, buttonElement, config) {  // включение\выключение кнопки
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }
} */

/* function setEventListener(formElement, config) {             // поиск полей ввода в филдсете
  const inputList = Array.from(formElement.querySelectorAll(config.inputElement));
  const buttonElement = formElement.querySelector(config.buttonElement);
 // toggleButtonState(inputList, buttonElement, config);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      const formControl = new FormValidator(config, inputElement);
      formControl.isValid();
 //     toggleButtonState(inputList, buttonElement, config);
    })
  });
}

function enableValidation(config) {                          // поиск всех филдсетов
  const formList = Array.from(document.querySelectorAll(config.formElement));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListener(formElement, config);
  });
}

enableValidation({
  formElement: '.popup__form-content',
  inputElement: '.popup__form',
  buttonElement: '.popup__form-save',
  inactiveButtonClass: 'popup__form-save_disable',
  inputErrorClass: 'popup__form_type_error',
  errorClass: 'popup__form-error_action'
}); */