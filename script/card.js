import * as elements from './elementsPage.js';
import {openPopup} from './index.js';

export class Card {
  constructor(data, templateSelector) {                       //введение в в класс внешних переменных
    this._name = data.name;
    this._link = data.link;
    this._selector = templateSelector;
  }

  _getTemplate() {                          //поиск и возврат клона темплайт-элемента
    const cardElement = document.querySelector(`${this._selector}`).content.firstElementChild.cloneNode(true);
    return cardElement
  }

  generateCard() {                          //заполнение элемента содержимым
    this._element = this._getTemplate();

    this._setEventListeners();

    this._element.querySelector('.card__img').src = this._link;
    this._element.querySelector('.card__img').alt = this._name;
    this._element.querySelector('.card__title').textContent = this._name

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.card__like').addEventListener('click', () => {
      this._toggleLike();
    });
    this._element.querySelector('.card__delete').addEventListener('click', () => {
      this._deleteCard();
    });
    this._element.querySelector('.card__img').addEventListener('click', () => {
      this._openPopapImgAction();
    });
  }

  _toggleLike() {                             //лайки
    this._element.querySelector('.card__like').classList.toggle('card__like_active');
  }

  _deleteCard() {                             //удаление карточки
    this._element.remove();
  }

  _openPopapImgAction() {                 //открытие попапа - картинки
    elements.popupImageTitle.textContent = this._name;
    elements.popupImage.src = this._link;
    elements.popupImage.alt = this._name;
    openPopup(elements.popupImg);
  }
}