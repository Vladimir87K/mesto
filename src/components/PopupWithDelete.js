import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
  }

  _setEventListeners() {
    super._setEventListeners();
    this._element.addEventListener('submit', (e) => {
        e.preventDefault();
        this.close();
    });
  }
}