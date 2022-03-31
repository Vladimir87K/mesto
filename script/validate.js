function showInputError(formElement, inputElement, errorMessage, config) { // показывает элемент ошибки
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
}

function hideInputError(formElement, inputElement, config) { //скрывает элемент ошибки
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`); 
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(config.errorClass);
}

function isValid(formElement, inputElement, config) {        // проверяет валидность поля, вызывает showInputError и hideInputError
  if (!inputElement.validity.valid) {                // проверка валидности введенной информации
    showInputError(formElement, inputElement ,inputElement.validationMessage, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }
}

function setEventListener(formElement, config) {                // поиск полей ввода в филдсете
  const inputList = Array.from(formElement.querySelectorAll(config.inputElement));
  const buttonElement = formElement.querySelector(config.buttonElement);
  toggleButtonState(inputList, buttonElement, config);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
}

function enableValidation(config) {                          // поиск всех филдсетов
  const formList = Array.from(document.querySelectorAll(config.formElement));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListener(formElement, config);
  });
}

function hasInvalidInput(inputList) {                  // проверка валидности всех полей
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

function toggleButtonState(inputList, buttonElement, config) {  // включение\выключение кнопки
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
  }
}

// enableValidation();
enableValidation({
  formElement: '.popup__form-content',
  inputElement: '.popup__form',
  buttonElement: '.popup__form-save',
  inactiveButtonClass: 'popup__form-save_disable',
  inputErrorClass: 'popup__form_type_error',
  errorClass: 'popup__form-error_action'
}); 
