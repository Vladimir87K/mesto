import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor (popupSelector, func) {
    
  }

  _getInputValues() {
    //сбор данных формы
  }

  setEventListeners() {
    super.setEventListeners();
    //+ обработчик сабмита формы
  }
}