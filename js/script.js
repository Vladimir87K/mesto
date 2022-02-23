//---------------открытие\закрытие попапа-----------------------
let popupBg = document.querySelector('.popup'); // Фон попап окна
let openPopupButton = document.querySelector('.profil-content__btn'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.popup__container-btn'); // Кнопка для скрытия окна

openPopupButton.addEventListener('click', function() { //отслеживание действия с кнопкой попапа
			popupBg.classList.add('popup_opened'); // Добавляем класс 'active' для фона
});

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
	popupBg.classList.remove('popup_opened'); // Убираем активный класс с фона
});

//------------------------- реакция на лайки------------------
let cardLike = document.querySelectorAll('.card__like'); // вызов кнопок like
cardLike.forEach( (like) => {														//перебор всех кнопок
  like.addEventListener('click', function() {						//определение клика
		console.log('likes');																//что делаем кликом
		cardLike.innerHTML = '<img src=".//image/Union.png>"'
	});
});
//-------------конец реакции на лайки

//--------работа с попапом - введение информации в поля----------

// Находим форму в DOM
let formElement = document.querySelector('.popup__form-save');


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
	evt.preventDefault();
	// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__form-name');
let jobInput = document.querySelector('.popup__form-profetional');

let userName = document.querySelector('.profil-content__name');  // Выберите элементы, куда должны быть вставлены значения полей
let userJob = document.querySelector('.profil-content__profethional');

userName.textContent = nameInput.value;  // Вставьте новые значения с помощью textContent
userJob.textContent = jobInput.value;

popupBg.classList.remove('popup_opened');//закрытие попапа после нажатия сохранить
}


// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('click', formSubmitHandler);