import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
    constructor(popupSelector, confirmDelete) {
        super(popupSelector)
        this._confirmDelete = confirmDelete;
    }

    generatePopup(cardId, card) {
        super.generatePopup();
        this.cardId = cardId;
        this.card = card;
    }

    validationDelete(item) {
        return item;
    }

    _setEventListeners() {
        super._setEventListeners();
        this._element.addEventListener('submit', (e) => {
            e.preventDefault();
            this._confirmDelete(this.cardId, this.card);
            this.close();

        });

    }
}