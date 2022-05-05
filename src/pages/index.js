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

const userInfo = new UserInfo('.profil-content__name' ,'.profil-content__profethional');
const popupImage = new PopupWithImage('.popup-image');              //создание попапа картинки

function creatCard(item) {                                          // создание новой карточки
  const card = new Card({
    data : item,
    handleCardClick : (link, name) => {
      popupImage.generatePopup();
      popupImage.open(link, name);
      }
    }, '.card-template',);
    return card;
  }

function renderInputCard(item) {                                    // получение информации с попапа карточки
  const param = Object.values(item)                                 // и добавление ее на страницу
  const data = {name : param[0], link: param[1]};
  const card = creatCard(data);
  const cardElement = card.generateCard();
  const newCard = new Section ({}, '.cards');
  newCard.addItem(cardElement);
};

const popupCard = new PopupWithForm({
  popupSelector :'.popup-card',
  renderInput : (item) => {renderInputCard(item)} 
});

popupCard.generatePopup();                                          // создание попапа карточки

function renderInputProfil(item) {                                  // добавление информации пользователя со страницы в попап
  const param = Object.values(item)
  const [userName, userJob] = param;
  userInfo.setUserInfo(userName, userJob);
}

const popupProfil = new PopupWithForm({
  popupSelector :'.popup-profil',
  renderInput : (item) => {renderInputProfil(item)}
});

popupProfil.generatePopup();                                        // создание попапа профиля 

function addUserInfo() {                                            // добавление информации пользователя с попапа на страницу
  const [userName, userJob] = userInfo.getUserInfo()
  elements.nameInput.value = userName;
  elements.jobInput.value = userJob;
}

const cardList = new Section ({                                     // создание карточек из массива
  item : initialCards,
  renderer : (item) => {
    const card = creatCard(item);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
}, '.cards'
);

cardList.showAllElement();                                          // активация создания исхлдных карточек страницы

elements.openPopapProfilButton.addEventListener('click', () => {    //обработчик событий на кнопке показа попапа)
  addUserInfo();
  popupProfil.open();
}); 

elements.openPopupCardButton.addEventListener('click', () => {      //обработчик событий на кнопке попапа картинок 
  popupCard.open();
  formValidators['imageData'].resetValidation();
});