export class Card {
    constructor({ myId, data, handleCardClick, handleDeleteIconClick, api }, templateSelector) { //введение в в класс внешних переменных
        this._myId = myId;
        this._cardId = data._id;
        this._name = data.name;
        this._link = data.link;
        this._userId = data.owner._id;
        this._like = data.likes;
        this._handleDeleteIconClick = handleDeleteIconClick;
        this._handleCardClick = handleCardClick; //функция, открывает попап с картинкой при нажатии
        this._selector = templateSelector;
        this._api = api;
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
            this._iconDelete.style.display = 'none';
        }
    }

    generateCard() { //заполнение элемента содержимым
        this._element = this._getTemplate();
        this._cardLike = this._element.querySelector('.card__like-img');
        this._numberLikes = this._element.querySelector('.card__like-number');
        this._iconDelete = this._element.querySelector('.card__delete');
        this._image = this._element.querySelector('.card__img');

        this._image.src = this._link;
        this._image.alt = this._name;
        this._element.querySelector('.card__title').textContent = this._name;
        this._numberLikes.textContent = this._like.length;

        if (this._checkMyLike()) {
            this._cardLike.classList.add('card__like-img_active');
        }

        this._setEventListeners(this._id);
        this._handleDeleteIcon(this._element);
        return this._element;
    }

    _setEventListeners() {
        this._cardLike.addEventListener('click', () => { //определить наличие или отсутствие своего лайка
            this._handleLikeClick(this); //или в этой функции...
        });
        this._iconDelete.addEventListener('click', () => {
            this._deleteCard();
        });
        this._image.addEventListener('click', () => {
            this._handleCardClick(this._link, this._name);
        });
    }

    _toggleLike() { //лайки
        this._cardLike.classList.toggle('card__like-img_active');
    }

    _deleteCard() { //удаление карточки
        this._handleDeleteIconClick(this._cardId, this._element);
    }

    _handleLikeClick() {
        if (!this._cardLike.classList.contains('card__like-img_active')) {
            this._api.addLikeCard(this._cardId)
                .then(res => {
                    this._numberLikes.textContent = res.likes.length;
                    this._toggleLike();
                })
                .catch(err => console.log(err));
        } else {
            this._api.deleteLikeCard(this._cardId)
                .then(res => {
                    this._numberLikes.textContent = res.likes.length;
                    this._toggleLike()
                })
                .catch(err => console.log(err));
        }
    }
}