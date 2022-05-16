import './index.css';
import * as elements from '../script/elementsPage.js';
import { initialCards } from '../script/initialCard.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithDelete from '../components/PopupWithDelete.js';
import UserInfo from '../components/UserInfo.js';
import { Api } from '../components/Api.js'


const formValidators = {};

const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formElement));
    formList.forEach((formElement) => {
        const validator = new FormValidator(config, formElement);
        const formName = formElement.getAttribute('name'); // получаем данные из атрибута `name` у формы
        formValidators[formName] = validator; // вот тут в объект записываем под именем формы
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

const userInfo = new UserInfo('.profil-content__name', '.profil-content__profethional');
const popupImage = new PopupWithImage('.popup-image'); //создание попапа картинки
const popupDelete = new PopupWithDelete('.popup-delete');

/* function creatCard(item) { // создание новой карточки
    const card = new Card({
        data: item,
        handleCardClick: (link, name) => {
            popupImage.generatePopup();
            popupImage.open(link, name);
        }
    }, '.card-template', );
    const cardElement = card.generateCard();
    return cardElement;
} */

function addUserInfo() { // добавление информации пользователя с попапа на страницу
    const [userName, userJob] = userInfo.getUserInfo()
    elements.nameInput.value = userName;
    elements.jobInput.value = userJob;
}

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-41/cards',
    headers: {
        authorization: 'd2b53e42-b171-4a97-abd9-e550272a84f9',
        'Content-Type': 'application/json'
    }
});

const cards = api.getInitialCards()
    .then((res) => {
        const сardList = new Section({ // создание карточек из массива с сервера
            item: res,
            renderer: (item) => {
                const card = creatCard(item);
                сardList.addItem(card);
            }
        }, '.cards');
        сardList.showAllElement();
    })
    .catch(err => console.log(err));

const user = api.getInitialProfil() //получение данных пользователя с сервера
    .then(res => userInfo.setUserInfo(res.name, res.about))
    .catch(err => console.log('Ошибочка вышла...' + err));

function creatCard(item) { // создание новой карточки
    const card = new Card({
        data: item,
        handleCardClick: (link, name) => {
            popupImage.generatePopup();
            popupImage.open(link, name);
        }
    }, '.card-template', );
    const cardElement = card.generateCard();
    return cardElement;
}
/* const cardList = new Section({ // создание карточек из массива
    item: initialCards,
    renderer: (item) => {
        const card = creatCard(item);
        cardList.addItem(card);
    }
}, '.cards'); */

//cardList.showAllElement(); // активация создания исхлдных карточек страницы

function renderInputCard(item) { // получение информации с попапа карточки
    const data = { name: item.imageName, link: item.urlName }; // и добавление ее на страницу
    const card = creatCard(data);
    cardList.addItem(card);
};

const popupCard = new PopupWithForm({
    popupSelector: '.popup-card',
    renderInput: (item) => { renderInputCard(item) }
});

popupCard.generatePopup(); // создание попапа карточки

function renderInputProfil(data, api) { // добавление информации пользователя со страницы в попап
    console.log(api);
    api.correctUserInfo(data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    const param = Object.values(data);

    const [userName, userJob] = param;
    userInfo.setUserInfo(userName, userJob);
}

const popupProfil = new PopupWithForm({
    popupSelector: '.popup-profil',
    renderInput: (item, api) => {
        renderInputProfil(item, api)
    },
    api: api
});

popupProfil.generatePopup(); // создание попапа профиля 

function renderInputAvatar(item) {

}

const popupAvatar = new PopupWithForm({
    popupSelector: '.popup-avatar',
    renderInput: (item) => { renderInputAvatar(item) }
})

popupAvatar.generatePopup();

elements.openPopapProfilButton.addEventListener('click', () => { //обработчик событий на кнопке показа попапа)
    addUserInfo();
    popupProfil.open();
});

elements.openPopupCardButton.addEventListener('click', () => { //обработчик событий на кнопке попапа картинок 
    popupCard.open();
    formValidators['imageData'].resetValidation();
});

elements.avatar.addEventListener('click', () => {
    console.log('Упс!!!');
    popupAvatar.open();
    formValidators['avatarData'].resetValidation();
});