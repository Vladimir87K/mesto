//---------------открытие\закрытие попапа-----------------------
const popupBgAll = document.querySelectorAll('.popup'); // Фон всех попап-окон
const popupProfil = document.querySelector('.popup-profil')           // Попап профиля (ФИО, профессия)
const	openPopupButton = document.querySelector('.profil-content__btn'); // Кнопк для показа профиля
const	closePopupButtons = document.querySelectorAll('.popup__container-btn'); // Кнопки для скрытия всех окон попапов

const popupCard = document.querySelector('.popup-image');         //фон попапа окна для добавления катринок
const openPopupCardButton = document.querySelector('.profil__btn'); //кнопка окна добавления карточки

const formElement = document.querySelector('.popup-information');

let nameInput = document.querySelector('.popup__form-name');						//	введение ФИО пользователя
let jobInput = document.querySelector('.popup__form-profetional');			//	введение профессии пользователя
let userName = document.querySelector('.profil-content__name'); 				//	строка в профиле - ФИО
let userJob = document.querySelector('.profil-content__profethional');	//	строка в профиле - профессия

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function openPopap() {											// выведение открытия попапа
	popupProfil.classList.add('popup_opened');		//	в отдельную функцию через	действие toggle
	nameInput.value = userName.textContent;			//	занесение данных пользователя
	jobInput.value = userJob.textContent;				//	с полей профиля в поля формы попапа
}																							//	действие toggle

function closePopap() {
	popupBgAll.forEach(popupBg => {
    popupBg.classList.remove('popup_opened');
  })
  
}

function openPopapCard() {
  popupCard.classList.add('popup_opened');
}

//--------работа с попапом - введение информации в поля----------

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
	evt.preventDefault()
	// Находим поля формы в DOM
	userName.textContent = nameInput.value;  // Вставьте новые значения с помощью textContent
	userJob.textContent = jobInput.value;
	closePopap();//закрытие попапа после нажатия сохранить
}

openPopupButton.addEventListener('click', openPopap); //обработчик событий на кнопке показа попапа

closePopupButtons.forEach(closePopupButton => {
  closePopupButton.addEventListener('click', closePopap); // обработчик на крестик попапа
})


openPopupCardButton.addEventListener('click', openPopapCard); //обработчик событий на кнопке попапа картинок

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

//------------------------- реакция на лайки------------------

let cardLike = document.querySelectorAll('.card__like'); // вызов кнопок like
cardLike.forEach( (like) => {														//перебор всех кнопок
  like.addEventListener('click', function() {
		like.classList.toggle('card__like_active');
	})						//определение клика
});