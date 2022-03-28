

function showInputError(formElement, inputElement, errorMessage) { // показывает элемент ошибки
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__form_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__form-error_action');
}

function hideInputError(formElement, inputElement) { //скрывает элемент ошибки
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`); 
  inputElement.classList.remove('popup__form_type_error');
  errorElement.textContent = '';
  errorElement.classList.remove('popup__form-error_action');
}

function isValid(formElement, inputElement) {        // проверяет валидность поля, вызывает showInputError и hideInputError
  if (!inputElement.validity.valid) {                // проверка валидности введенной информации
    showInputError(formElement, inputElement ,inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}

function setEventListener(formElement) {                // поиск полей ввода в филдсете
  const inputList = Array.from(formElement.querySelectorAll('.popup__form'));
  const buttonElement = formElement.querySelector('.popup__form-save');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
}

function enableValidation() {                          // поиск всех филдсетов
  const formList = Array.from(document.querySelectorAll('.popup__form-content'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListener(formElement);
  });
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__form-save_disable');
  } else {
    buttonElement.classList.remove('popup__form-save_disable');
  }
}

enableValidation();