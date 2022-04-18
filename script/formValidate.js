export class FormValidator {
  constructor(config, inputElement) {
    this._config = config;
    this._inputElement = inputElement;

    this._form = this._inputElement.closest(`${this._config.formElement}`);
    this._inputList = this._form.querySelectorAll(`${this._config.inputElement}`);
    this._button = this._form.querySelector(`${this._config.buttonElement}`);
  }

  _hasInvalidInput(el) {
    return Array.from(el).some((e) => {
      return !e.validity.valid;
    })
  }
  // включение и выключение кнопки по состоянию валидации
  _toggleButtonState() {
    if(this._hasInvalidInput(this._inputList)) {
      this._button.classList.add(`${this._config.inactiveButtonClass}`);
      this._button.disabled = true;
    } else {
      this._button.classList.remove(`${this._config.inactiveButtonClass}`);
      this._button.disabled = false;
    }
  }
  //активация this.формы(валидно). Связать с кнопкой. Скрыть ошибку
  _showInputError() {
    const errorElement = document.querySelector(`.${this._inputElement.id}-error`);
    this._inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = `${this._inputElement.validationMessage}`;
    errorElement.classList.add(this._config.errorClass);
    this._toggleButtonState();
  }
  //дезактивация формы (невалидно). Связать с кнопкой. Вызвать ошибку
  _hideInputError() {
    const errorElement = document.querySelector(`.${this._inputElement.id}-error`);
    this._inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._config.errorClass);
    this._toggleButtonState();
  }

  //проверка this.формы на валидность.
  isValid() {
    if (!this._inputElement.validity.valid) { 
      this._showInputError();
    } else {
      this._hideInputError();
    }
  } 
}
 