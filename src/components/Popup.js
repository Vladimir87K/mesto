export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._element = document.querySelector(this._popupSelector);
        this._buttonClose = this._element.querySelector('.popup__container-btn');
        this._handleEscClose = this._handleEscClose.bind(this)
    }

    findButtonSubmit() {
        return this._element.querySelector('.popup__form-save');
    }

    open() {
        this._element.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._element.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose)
    }

    _handleEscClose(event) {
        if (event.code == 'Escape') {
            this.close();
        }
    }

    _handleOverleyClose(event) {
        if (event.target.classList.contains('popup_opened')) {
            this.close();
        }
    }

    setEventListeners() {
        this._buttonClose.addEventListener('click', () => {
            this.close();
        });
        this._element.closest('.popup').addEventListener('mousedown', (event) => {
            this._handleOverleyClose(event);
        });
    }
}