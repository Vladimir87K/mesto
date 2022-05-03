export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    console.log(this._popupSelector);
  }

  generatePopup() {
    this._element = document.querySelector(this._popupSelector);
    this._setEventListeners();

    return this._element;
  }

  open() {
    this._element.classList.add('popup_opened');
  }

  close() {
    this._element.classList.remove('popup_opened');
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
      console.log('double click!!!')
    });
    this._element.addEventListener('keydown', (event) => {
      this._handleEscClose(event);
    });
    this._element.closest('.popup').addEventListener('mousedown', (event) => {
      this._handleOverleyClose(event);
    });
  }
}