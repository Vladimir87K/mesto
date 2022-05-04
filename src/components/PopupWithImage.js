import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  _creatPopupImg(link, name) {
    this.generatePopup();

    const imagePopup = this._element.querySelector('.popup-image__img');
    this._element.querySelector('.popup-image__title').textContent = name;
    imagePopup.src = link;
    imagePopup.alt = name;
    return this._element;
  }

  open(link, name) {
    this._creatPopupImg(link, name);
    super.open();
  }
}