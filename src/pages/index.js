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

// --------------------------- блок валидации ---------------------------

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

// ---------------- создание экземпляров классов (глобально) ------------------------ 

const userInfo = new UserInfo('.profil-content__name', '.profil-content__profethional', '.profil__avatar'); //создание экземпляра класса
const popupImage = new PopupWithImage('.popup-image'); //создание попапа картинки
const popupDelete = new PopupWithDelete('.popup-delete', confirmDelete); //созание попапа подтверждения удаления

const popupCard = new PopupWithForm({ //экземпляр попапа создания карточки
    popupSelector: '.popup-card',
    renderInput: (item) => { renderInputCard(item) }
});
popupCard.generatePopup(); // создание попапа карточки

const popupProfil = new PopupWithForm({ //экземпляр попапа профиля
    popupSelector: '.popup-profil',
    renderInput: (item) => { renderInputProfil(item) }
});
popupProfil.generatePopup(); // создание попапа профиля 

const popupAvatar = new PopupWithForm({ //экземпляр попапа аватарки
    popupSelector: '.popup-avatar',
    renderInput: (item) => { renderInputAvatar(item) }
})
popupAvatar.generatePopup(); // создание попапа аватарки

const api = new Api({
    urlBase: 'https://mesto.nomoreparties.co/v1/cohort-41',
    headers: {
        authorization: 'd2b53e42-b171-4a97-abd9-e550272a84f9',
        'Content-Type': 'application/json'
    }
});

let cardList; // создание переменных в глобальной области видимости
let userId;

Promise.all([api.getInitialCards(), api.getInitialProfil()]) // ожидание ответов с сервера
    .then(res => {
        const [initialCards, initialProfil] = res;
        userId = initialProfil._id //вынесение id пользователя в глобальную зону видимости

        userInfo.setUserInfo(initialProfil.name, initialProfil.about, initialProfil.avatar); //вывод информации пользователя на страницу

        cardList = new Section({ // создание карточек из массива с сервера и вынесение экземпляра в глобальную область видимости
            item: initialCards,
            renderer: (item) => {
                const card = creatCard(item, userId);
                cardList.addItem(card);
            }
        }, '.cards');
        cardList.showAllElement();
    })
    .catch(err => console.log(err));

//------------------------- функции ------------------------

function handleLikeClick(idCard, card) {
    if (!card.querySelector('.card__like-img').classList.contains('card__like-img_active')) {
        api.deleteLikeCard(idCard)
            .then(res => {
                card.querySelector('.card__like-number').textContent = res.likes.length;
            })
            .catch(err => console.log(err));
    } else {
        api.addLikeCard(idCard)
            .then(res => {
                card.querySelector('.card__like-number').textContent = res.likes.length;
            })
            .catch(err => console.log(err));
    }
}

function confirmDelete(cardId, card) {
    api.deleteCard(cardId)
        .catch(err => console.log(err));
    card.remove();
    card = null;
}

function handleDeleteIconClick(cardId, card) {
    popupDelete.generatePopup(cardId, card);
    popupDelete.open();
}

function creatCard(item, myId) { // создание новой карточки
    const card = new Card({
        myId: myId,
        data: item,
        handleCardClick: (link, name) => {
            popupImage.generatePopup();
            popupImage.open(link, name);
        },
        handleLikeClick: (idCard, card) => { handleLikeClick(idCard, card) },
        handleDeleteIconClick: (cardId, card) => { handleDeleteIconClick(cardId, card) }
    }, '.card-template', );
    const cardElement = card.generateCard();
    return cardElement;
}

function renderInputCard(item) { // получение информации с попапа карточки, отправка на сервер
    const data = { name: item.imageName, link: item.urlName }; // и добавление отвкта сервера на страницу
    api.addNewCards(data)
        .then(res => {
            const card = creatCard(res, userId);
            cardList.addItem(card);
        });
};

function renderInputProfil(data) { // добавление информации пользователя со страницы в попап и на сервер
    api.correctUserInfo(data) // и добавление ее на страницу
        .then(res => {
            userInfo.setUserInfo(res.name, res.about, res.avatar)
        })
        .catch(err => console.log(err));
}

function renderInputAvatar(item) {
    api.correctUserAvatar(item)
        .then(res => {
            elements.avatar.src = res.avatar;
        })
        .catch(err => console.log(err));
}

function addUserInfo() { // добавление информации пользователя с попапа на страницу
    const [userName, userJob] = userInfo.getUserInfo()
    elements.nameInput.value = userName;
    elements.jobInput.value = userJob;
}

//------------------------ блок слушателей --------------------------------

elements.openPopapProfilButton.addEventListener('click', () => { //обработчик событий на кнопке показа попапа)
    addUserInfo();
    popupProfil.open();
});

elements.openPopupCardButton.addEventListener('click', () => { //обработчик событий на кнопке попапа картинок 
    popupCard.open();
    formValidators['imageData'].resetValidation();
});

elements.avatar.addEventListener('click', () => { // обработчик событий на аватарке
    popupAvatar.open();
    formValidators['avatarData'].resetValidation();
});