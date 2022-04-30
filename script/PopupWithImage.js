import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, link, name) {
    super(popupSelector);
    this._link = link;
    this._name = name;
  }

  _creatPopupImg() {
    this.generatePopup()
    this._element.querySelector('.popup-image__title').textContent = this._name;
    this._element.querySelector('.popup-image__img').src = this._link;
    this._element.querySelector('.popup-image__img').alt = this._name;
    return this._element;
  }

  open() {
    this._creatPopupImg();
    super.open();
  }
}