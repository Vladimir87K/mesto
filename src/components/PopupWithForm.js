import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, renderInput }) {
        super(popupSelector);
        this._renderInput = renderInput;
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

    _setEventListeners() {
        super._setEventListeners();
        this._element.addEventListener('submit', (e) => {
            e.preventDefault();
            this._renderInput(this._getInputValues());
            this.close();
        });
    }
}