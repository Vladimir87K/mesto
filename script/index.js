const popups = document.querySelectorAll('.popup'); // Фон всех попап-окон
const popupProfil = document.querySelector('.popup-profil')           // Попап профиля (ФИО, профессия)
const popupCard = document.querySelector('.popup-card');         //фон попапа окна для добавления катринок
const popupImg = document.querySelector('.popup-image');             // форма попапа картинки

const formProfil = document.querySelector('.popup-information');   // форма информации профиля
const formCard = document.querySelector('.popap-card');             // форма информации карточек

const	openPopapProfilButton = document.querySelector('.profil-content__btn'); // Кнопк для показа профиля

const nameInput = document.querySelector('.popup__form-name');						//	введение ФИО пользователя
const jobInput = document.querySelector('.popup__form-profetional');			//	введение профессии пользователя
const userName = document.querySelector('.profil-content__name'); 				//	строка в профиле - ФИО
const userJob = document.querySelector('.profil-content__profethional');	//	строка в профиле - профессия

const popupCardTitile  = document.querySelector('.popup__form-name-image');    // введение названия места в попапе карточки
const popupCardUrl = document.querySelector('.popup__form-url-image');         // введение адреса картинки
const cards = document.querySelector('.cards');                                // область карточек
const cardTemplate = document.querySelector('.card-template')                  // темплате-карта          

const popupImage = document.querySelector('.popup-image__img');               // увеличение картинки
const popupImageTitle = document.querySelector('.popup-image__title');        // подпись картинки

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
  openPopup(item);	                              // открытие попапа профиля
}																							

function openPopup(item) {                        // открытие попапа карточки
  item.classList.add('popup_opened');
}

function closePopup() {
	popups.forEach(popup => {                 //закрытие любого попапа крестиком
    popup.classList.remove('popup_opened');
  }) 
}

function handleProfileFormSubmit (evt) {
	evt.preventDefault();
	userName.textContent = nameInput.value;         // перенос значений из полей в страницу 
	userJob.textContent = jobInput.value;           // попап профиля
	closePopup();                                   // закрытие попапа
}

function creatCard(el) {
  const newCard = cardTemplate.content.firstElementChild.cloneNode(true); //создание копии темплате
  const newCardImg = newCard.querySelector('.card__img')
  newCardImg.src = el.link;                                               // перенос ссылки в созданную карточку
  newCardImg.alt = el.name;                                               // сознаие alt картинки
  newCard.querySelector('.card__title').textContent = el.name;            // заголовок карточки
  
  return newCard;
}

function renderInitialCards(element) {
  const newCard = creatCard(element);
  cards.prepend(newCard);                                     // добавление элемента на страницу
}

function addNewCard(event) {                                                // добавление данных новой карточки
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
  const card = event.closest('.card');
  card.remove();
}

function toggleLikeCard(event) {                                  // активация лайка
  event.classList.toggle('card__like_active');
}

function openPopapImgAction(evt) {          
  console.log(evt.src);                      // открытие попапа-картинки с присваиванием изображения и подписи
  popupImageTitle.textContent = evt.alt;
  popupImage.src = evt.src;
  popupImage.alt = evt.alt;
  openPopup(popupImg);
}

formProfil.addEventListener('submit', handleProfileFormSubmit);      // слушатель событий (отправки) формы профиля
formCard.addEventListener('submit', addNewCard);              // слушатель событий (отправка) новой карточки

initialCards.map(renderInitialCards);

document.body.addEventListener('click', (event) => {
  if (event.target.classList.contains('popup') || event.target.classList.contains('popup__container-btn')) {
    closePopup();
  } else if (event.target.classList.contains('card__like')) {
    toggleLikeCard(event.target);
  } else if (event.target.classList.contains('card__delete')){
    removeCard(event.target);
  } else if (event.target.classList.contains('card__img')) {
    openPopapImgAction(event.target);
  } else if (event.target.classList.contains('profil__btn')) {
    openPopup(popupCard);
  } else if (event.target.classList.contains('profil-content__btn')) {
    openPopupProfil(popupProfil);
  }
})

document.body.addEventListener('keydown', (event) =>{
    if (event.code == 'Escape') {
    closePopup();
    }
})