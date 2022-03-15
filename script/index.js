const popaps = document.querySelectorAll('.popup'); // Фон всех попап-окон
const popupProfil = document.querySelector('.popup-profil')           // Попап профиля (ФИО, профессия)
const popupCard = document.querySelector('.popup-card');         //фон попапа окна для добавления катринок
const popapImg = document.querySelector('.popup-image');             // форма попапа картинки

const formProfil = document.querySelector('.popup-information');   // форма информации профиля
const formCard = document.querySelector('.popap-card');             // форма информации карточек


const openPopupCardButton = document.querySelector('.profil__btn');           //кнопка окна добавления карточки
const	openPopapProfilButton = document.querySelector('.profil-content__btn'); // Кнопк для показа профиля
const	closePopupButtons = document.querySelectorAll('.popup__container-btn'); // Кнопки для зарытия всех окон попапов

const nameInput = document.querySelector('.popup__form-name');						//	введение ФИО пользователя
const jobInput = document.querySelector('.popup__form-profetional');			//	введение профессии пользователя
const userName = document.querySelector('.profil-content__name'); 				//	строка в профиле - ФИО
const userJob = document.querySelector('.profil-content__profethional');	//	строка в профиле - профессия

const popapCardTitile  = document.querySelector('.popup__form-name-image');    // введение названия места в попапе карточки
const popapCardUrl = document.querySelector('.popup__form-url-image');         // введение адреса картинки
const cards = document.querySelector('.cards');                                // область карточек
const cardTemplate = document.querySelector('.card-template')                  // темплате-карта          

const popapImage = document.querySelector('.popup-image__img');               // увеличение картинки
const popapImageTitle = document.querySelector('.popup-image__title');        // подпись картинки

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
  },
  {
    name: 'Дагестан',
    link: 'https://images.unsplash.com/photo-1626517545905-dd9a490e013b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8JUQxJTgwJUQwJUJFJUQxJTgxJUQxJTgxJUQwJUI4JUQxJThGfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Мещерский парк',
    link: 'https://images.unsplash.com/photo-1594714936914-2713fadc5f02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fCVEMSU4MCVEMCVCRSVEMSU4MSVEMSU4MSVEMCVCOCVEMSU4RnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Роза Хутор',
    link: 'https://images.unsplash.com/photo-1617117833203-c91b04e0431f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fCVEMSU4MCVEMCVCRSVEMSU4MSVEMSU4MSVEMCVCOCVEMSU4RnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
];

function openPopupProfil(item) {
	nameInput.value = userName.textContent;			    //	занесение данных пользователя
	jobInput.value = userJob.textContent;				    //	с полей профиля в поля формы попапа
  openPopap(item);	                              // открытие попапа профиля
}																							

function openPopap(item) {                        // открытие попапа карточки
  item.classList.add('popup_opened');
}

function closePopap() {
	popaps.forEach(popup => {                 //закрытие любого попапа крестиком
    popup.classList.remove('popup_opened');
  }) 
}

function handleProfileFormSubmit (evt) {
	evt.preventDefault();
	userName.textContent = nameInput.value;         // перенос значений из полей в страницу 
	userJob.textContent = jobInput.value;           // попап профиля
	closePopap();                                   // закрытие попапа
}

function creatCard(el) {
  const newCard = cardTemplate.content.firstElementChild.cloneNode(true); //создание копии темплате
  const newCardImg = newCard.querySelector('.card__img')
  newCardImg.src = el.link;                                               // перенос ссылки в созданную карточку
  newCardImg.alt = el.name;                                               // сознаие alt картинки
  newCard.querySelector('.card__title').textContent = el.name;            // заголовок карточки

  clickLikeCard(newCard);                                         // реакция на лайк
  deleteCard(newCard);                                       // реакция на удаление
  revealCardImgPopap(newCard);                                     // реакция на нажатие картинки
  
  return newCard;
}

function renderInitialCards(element) {
  const newCard = creatCard(element);
  cards.prepend(newCard);                                     // добавление элемента на страницу
}

function addNewCard(event) {                                                // добавление данных новой карточки
  event.preventDefault();
  const element = {};
  element.name = popapCardTitile.value;
  element.link = popapCardUrl.value;

  closePopap();
  renderInitialCards(element)

  popapCardTitile.value= '';
  popapCardUrl.value = '';
}

function removeCard(event) {                                  // удаление карточки
  const card = event.currentTarget.closest('.card');
  card.remove();
}

function deleteCard(card) {                                   // реакция при нажатии на корзину
    card.querySelector('.card__delete').addEventListener('click', removeCard)
}

function toggleLikeCard(event) {                                  // активация лайка
  event.target.classList.toggle('card__like_active');
}

function clickLikeCard(card) {                                       // реакция на нажатие лайка
    card.querySelector('.card__like').addEventListener('click', toggleLikeCard);
}

function openPopapImgAction(evt) {          
  console.log(evt.target.src);                      // открытие попапа-картинки с присваиванием изображения и подписи
  popapImageTitle.textContent = evt.target.alt;
  popapImage.src = evt.target.src;
  popapImage.alt = evt.target.alt;
  openPopap(popapImg);
}

function revealCardImgPopap(card) {                                           // реакция на нажатие картинки
    card.querySelector('.card__img').addEventListener('click', openPopapImgAction);
}

openPopapProfilButton.addEventListener('click', () => {openPopupProfil(popupProfil)});     //обработчик событий на кнопке показа попапа
openPopupCardButton.addEventListener('click', () => {openPopap(popupCard)});   //обработчик событий на кнопке попапа картинок

closePopupButtons.forEach(closePopupButton => {                 // закрытие любого попапа
  closePopupButton.addEventListener('click', closePopap);       // обработчик на крестик попапа (любого)
})

formProfil.addEventListener('submit', handleProfileFormSubmit);      // слушатель событий (отправки) формы профиля
formCard.addEventListener('submit', addNewCard);              // слушатель событий (отправка) новой карточки

initialCards.map(renderInitialCards);