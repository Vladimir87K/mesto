import './index.css';
import * as elements from '../script/elementsPage.js';
import {initialCards} from '../script/initialCard.js';
import {Card}  from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js'

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

function addCard(link, name) {
  popupImage.generatePopup();
  popupImage.open(link, name);
}

function renderInputCard(item) {
    const param = Object.values(item)
    const data = {name : param[0], link: param[1]};
    const card = new Card({
      data : data,
      handleCardClick : (link, name) => {
        addCard(link, name)
        }
      }, '.card-template',);
    const cardElement = card.generateCard();
    document.querySelector('.cards').prepend(cardElement);
};

function renderInputProfil(item) {
  const param = Object.values(item)
  const [userName, userJob] = param;
  userInfo.setUserInfo(userName, userJob);
}

const userInfo = new UserInfo('.profil-content__name' ,'.profil-content__profethional');
const popupImage = new PopupWithImage('.popup-image');

const popupCard = new PopupWithForm({
  popupSelector :'.popup-card',
  renderInput : (item) => {renderInputCard(item)} 
});

const popupProfil = new PopupWithForm({
  popupSelector :'.popup-profil',
  renderInput : (item) => {renderInputProfil(item)}
});

elements.openPopapProfilButton.addEventListener('click', () => {    //обработчик событий на кнопке показа попапа)
  popupProfil.generatePopup();
  userInfo.getUserInfo();
  popupProfil.open();
}); 

elements.openPopupCardButton.addEventListener('click', () => {
  popupCard.generatePopup();
  popupCard.open();
});      //обработчик событий на кнопке попапа картинок 


const cardList = new Section ({
  item : initialCards,
  renderer : (item) => {
    const card = new Card({
      data : item,
      handleCardClick : (link, name) => {
        addCard(link, name)
        }
      }, '.card-template',);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
}, '.cards'
);

cardList.showAllElement();