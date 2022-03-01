//---------------открытие\закрытие попапа-----------------------
const popupBg = document.querySelector('.popup'); // Фон попап окна
const	openPopupButton = document.querySelector('.profil-content__btn'); // Кнопки для показа окна
const	closePopupButton = document.querySelector('.popup__container-btn'); // Кнопка для скрытия окна

const formElement = document.querySelector('.popup-information');

let nameInput = document.querySelector('.popup__form-name');						//	введение ФИО пользователя
let jobInput = document.querySelector('.popup__form-profetional');			//	введение профессии пользователя
let userName = document.querySelector('.profil-content__name'); 				//	строка в профиле - ФИО
let userJob = document.querySelector('.profil-content__profethional');	//	строка в профиле - профессия

function openPopap() {											// выведение открытия попапа
	popupBg.classList.toggle('popup_opened');		//	в отдельную функцию через	действие toggle
	nameInput.value = userName.textContent;			//	занесение данных пользователя
	jobInput.value = userJob.textContent;				//	с полей профиля в поля формы попапа
}																							//	действие toggle

function closePopap() {
	popupBg.classList.remove('popup_opened');
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

closePopupButton.addEventListener('click', closePopap); // обработчик на крестик попапа


// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

//------------------------- реакция на лайки------------------
let cardLike = document.querySelectorAll('.card__like'); // вызов кнопок like
cardLike.forEach( (like) => {														//перебор всех кнопок
  like.addEventListener('click', function() {						//определение клика
		console.log('likes');																//что делаем кликом
		cardLike.innerHTML = '<img src=".//image/Union.png>"'
	});
});
//-------------конец реакции на лайки