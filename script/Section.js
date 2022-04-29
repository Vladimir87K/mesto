export default class Section {
  constructor ({item, renderer}, selectorContainer) {
    this._item = item;
    this._renderer = renderer;  //функция, которая отвечает за создание и отрисовку данных на странице. использовать Card
    this._container = document.querySelector(selectorContainer);
  }

  showAllElement() {
    this._item.forEach(item => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._container.prepend(element)
    //принимает DOM элемент и добавляет его в разметку
  }
}