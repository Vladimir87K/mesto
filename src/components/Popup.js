export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._element = document.querySelector(this._popupSelector);
    }

    /*     findButtonSubmit() {
            return this._element.querySelector('.popup__form-save');
        } */

    generatePopup() {
        this._element;
        this._setEventListeners();

        return this._element;
    }

    _findButtonSubmit() {
        return this._element.querySelector('.popup__form-save');
    }

    open() {
        this._findButtonSubmit().textContent = 'Сохранить';
        this._element.classList.add('popup_opened');
        this._element.addEventListener('keydown', (event) => {
            this._handleEscClose(event);
        });
    }

    close() {
        this._element.classList.remove('popup_opened');
        this._element.removeEventListener('keydown', (event) => {
            this._handleEscClose(event);
        });
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

    _setEventListeners() {
        this._element.querySelector('.popup__container-btn').addEventListener('click', () => {
            this.close();
        });
        this._element.closest('.popup').addEventListener('mousedown', (event) => {
            this._handleOverleyClose(event);
        });
    }
}