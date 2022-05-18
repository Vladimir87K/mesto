export class Card {
    constructor({ myId, data, handleCardClick, handleLikeClick, handleDeleteIconClick }, templateSelector) { //введение в в класс внешних переменных
        this._myId = myId;
        this._cardId = data._id;
        this._name = data.name;
        this._link = data.link;
        this._userId = data.owner._id;
        this._like = data.likes;
        this._handleLikeClick = handleLikeClick;
        this._handleDeleteIconClick = handleDeleteIconClick;
        this._handleCardClick = handleCardClick; //функция, открывает попап с картинкой при нажатии
        this._selector = templateSelector;
    }

    _getTemplate() { //поиск и возврат клона темплайт-элемента
        const cardElement = document.querySelector(`${this._selector}`).content.firstElementChild.cloneNode(true);
        return cardElement
    }

    _checkMyLike() {
        return this._like.some((like) => like._id === this._myId);
    }

    _handleDeleteIcon(card) {
        if (this._myId !== this._userId) {
            card.querySelector('.card__delete').style.display = 'none';
        }
    }

    generateCard() { //заполнение элемента содержимым
        this._element = this._getTemplate();

        const image = this._element.querySelector('.card__img');
        image.src = this._link;
        image.alt = this._name;
        this._element.querySelector('.card__title').textContent = this._name;
        this._element.querySelector('.card__like-number').textContent = this._like.length;

        if (this._checkMyLike()) {
            this._element.querySelector('.card__like-img').classList.add('card__like-img_active');
        }

        this._setEventListeners(this._id);
        this._handleDeleteIcon(this._element);
        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.card__like-img').addEventListener('click', () => { //определить наличие или отсутствие своего лайка
            this._toggleLike(); //или в этой функции...
        });
        this._element.querySelector('.card__delete').addEventListener('click', () => {
            this._deleteCard();
        });
        this._element.querySelector('.card__img').addEventListener('click', () => {
            this._handleCardClick(this._link, this._name);
        });
    }

    _toggleLike() { //лайки
        this._element.querySelector('.card__like-img').classList.toggle('card__like-img_active');
        this._handleLikeClick(this._cardId, this._element);
    }

    _deleteCard() { //удаление карточки
        this._handleDeleteIconClick(this._cardId, this._element);
    }
}