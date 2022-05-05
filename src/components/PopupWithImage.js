import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imagePopup = this._element.querySelector('.popup-image__img');
    this._imagePopupTitle = this._element.querySelector('.popup-image__title')
  }

  _creatPopupImg(link, name) {
    this.generatePopup();

    this._imagePopupTitle.textContent = name;
    this._imagePopup.src = link;
    this._imagePopup.alt = name;
    return this._element;
  }

  open(link, name) {
    this._creatPopupImg(link, name);
    super.open();
  }
}