import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleSubmit }) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._inputList = this._element.querySelectorAll('.popup__form');
    }

    _getInputValues() {
        const newCard = {};
        this._inputList.forEach((input) => {
            newCard[input.name] = input.value;
        })
        return newCard;
    }

    _resetInputForm() {
        this._inputList.forEach((input) => {
            input.value = '';
        })
    }

    close() {
        this._resetInputForm();
        super.close();
    }

    setEventListeners() {
        super.setEventListeners();
        this._element.addEventListener('submit', (e) => {
            e.preventDefault();
            this.findButtonSubmit().textContent = "Загрузка...";
            this._handleSubmit(this._getInputValues())
                /*  .then(() => this.close())
                 .finally(() => {
                     this.findButtonSubmit().textContent = 'Сохранить'
                 }) */
        });
    }
}