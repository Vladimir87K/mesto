export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  _getElement() {
    console.log('так держать!');
    this._popupElement = document.querySelector(this._popupSelector);
    
    return this._popupElement;
  }

  generatePopup() {
    this._element = this._getElement();
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

  _setEventListeners() {
    this._element.querySelector('.popup__form-save').addEventListener('click', (event) => {
      event.preventDefault;
      console.log('click!!! :)-');
    });
    this._element.querySelector('.popup__container-btn').addEventListener('click', () => {
      this.close();
      console.log('double click!!!')
    });
    document.addEventListener('keydown', (event) => {
      this._handleEscClose(event);
    })
  }
}