export class FormValidator {
    constructor(config, inputForm) {
        this._config = config;
        this._inputForm = inputForm;

        this._inputList = this._inputForm.querySelectorAll(`${this._config.inputElement}`);
        this._button = this._inputForm.querySelector(`${this._config.buttonElement}`);
        console.log(this._config.inputErrorClass)
    }

    resetValidation() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement)
        })
    }

    _hasInvalidInput(el) {
            return Array.from(el).some((e) => {
                return !e.validity.valid;
            })
        }
        // включение и выключение кнопки по состоянию валидации
    _toggleButtonState() {
        if (this._hasInvalidInput(this._inputList)) {
            this._button.classList.add(`${this._config.inactiveButtonClass}`);
            this._button.disabled = true;
        } else {
            this._button.classList.remove(`${this._config.inactiveButtonClass}`);
            this._button.disabled = false;
        }
    }

    _showInputError(inputElement) {
        const errorElement = this._inputForm.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._config.inputErrorClass);
        errorElement.textContent = `${inputElement.validationMessage}`;
        errorElement.classList.add(this._config.errorClass);
    }

    //дезактивация формы (невалидно). Связать с кнопкой. Вызвать ошибку
    _hideInputError(inputElement) {
        const errorElement = this._inputForm.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._config.inputErrorClass);
        errorElement.textContent = '';
        errorElement.classList.remove(this._config.errorClass);
    }

    //проверка this.формы на валидность.
    _isValid(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _setEventListeners() {
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this._toggleButtonState();
            })
        })
    }

    enableValidation() {
        this._setEventListeners();
    }
}