import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
    constructor(popupSelector, confirmDelete) {
        super(popupSelector)
        this._confirmDelete = confirmDelete;
    }

    generatePopup(cardId, card) {
        super.generatePopup();
        this._cardId = cardId;
        this._card = card;
    }

    validationDelete(item) {
        return item;
    }

    _setEventListeners() {
        super._setEventListeners();
        this._element.addEventListener('submit', (e) => {
            e.preventDefault();
            this.findButtonSubmit().textContent = 'Удаление выполняется...'
            this._confirmDelete(this._cardId, this._card);
            this.close();
        });

    }
}