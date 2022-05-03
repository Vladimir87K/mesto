import * as elements from './elementsPage.js';
import {initialCards} from './initialCard.js';
import {Card}  from './Card.js';
import {FormValidator} from './FormValidator.js';
import Popup from './Popup.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js'

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

const userInfo = new UserInfo('.profil-content__name' ,'.profil-content__profethional');

elements.openPopapProfilButton.addEventListener('click', () => {    //обработчик событий на кнопке показа попапа)
  const userInfo = new UserInfo('.profil-content__name' ,'.profil-content__profethional');
  const popup = new PopupWithForm({
    popupSelector :'.popup-profil',
    renderInput : (item) => {
      const [userName, userJob] = item;
      console.log(item);
      userInfo.setUserInfo(userName, userJob);
    }
  });
  popup.generatePopup();
  userInfo.getUserInfo();
  popup.open();
}); 

elements.openPopupCardButton.addEventListener('click', () => {      //обработчик событий на кнопке попапа картинок 
  //openPopupCard(elements.popupCard);
  const popup = new PopupWithForm({
    popupSelector :'.popup-card',
    renderInput : (item) => {
      const data = {name : item[0], link: item[1]};
      const card = new Card({
        data : data,
        handleCardClick : (link, name) => {
          const popup = new PopupWithImage('.popup-image', link, name)
          popup.generatePopup();
          popup.open();
          }
        }, '.card-template',);
      const cardElement = card.generateCard();
      document.querySelector('.cards').prepend(cardElement);
    }
  });
  popup.generatePopup();
  popup.open();
});

const cardList = new Section ({
  item : initialCards,
  renderer : (item) => {
    const card = new Card({
      data : item,
      handleCardClick : (link, name) => {
        const popup = new PopupWithImage('.popup-image', link, name)
        popup.generatePopup();
        popup.open();
        }
      }, '.card-template',);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
}, '.cards'
);

cardList.showAllElement();