import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor ({popupSelector, renderInput}) {
    super(popupSelector);
    this._renderInput = renderInput;
  }

  _getInputValues() {
    const newCard = [];
    this._inputList = this._element.querySelectorAll('.popup__form');
    this._inputList.forEach((input, index) => {
      newCard[index]= input.value;
    })
    return newCard;
  }

  _resetInputForm() {
    this._inputList = this._element.querySelectorAll('.popup__form');
    this._inputList.forEach((input) => {
      input.value = '';
    })
  }

  close() {
    this._resetInputForm();
    this._element.removeEventListener('submit', (e) => {
      e.preventDefault();
      this._renderInput(this._getInputValues());
      this.close();
    });
    super.close();
  }

  _setEventListeners() {
    super._setEventListeners();
    this._element.addEventListener('submit', (e) => {
      e.preventDefault();
      this._renderInput(this._getInputValues());
      this.close();
    });
  }
}