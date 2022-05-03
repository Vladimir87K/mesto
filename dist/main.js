(()=>{"use strict";document.querySelectorAll(".popup"),document.querySelector(".popup-profil"),document.querySelector(".popup-card"),document.querySelector(".popup-image"),document.querySelector(".popup-profil-form"),document.querySelector(".popap-card-form");var e=document.querySelector(".profil__btn"),t=document.querySelector(".profil-content__btn");function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}document.querySelectorAll(".popup__container-btn"),document.querySelector(".popup__form-name"),document.querySelector(".popup__form-profetional"),document.querySelector(".profil-content__name"),document.querySelector(".profil-content__profethional"),document.querySelector(".popup__form-name-image"),document.querySelector(".popup__form-url-image"),document.querySelector(".cards"),document.querySelector(".card-template"),document.querySelector(".popup-image__img"),document.querySelector(".popup-image__title");var r=function(){function e(t,n){var r=t.data,o=t.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=r.name,this._link=r.link,this._handleCardClick=o,this._selector=n}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector("".concat(this._selector)).content.firstElementChild.cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._element.querySelector(".card__img").src=this._link,this._element.querySelector(".card__img").alt=this._name,this._element.querySelector(".card__title").textContent=this._name,this._element}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".card__like").addEventListener("click",(function(){e._toggleLike()})),this._element.querySelector(".card__delete").addEventListener("click",(function(){e._deleteCard()})),this._element.querySelector(".card__img").addEventListener("click",(function(){e._openPopapImgAction()}))}},{key:"_toggleLike",value:function(){this._element.querySelector(".card__like").classList.toggle("card__like_active")}},{key:"_deleteCard",value:function(){this._element.remove()}},{key:"_openPopapImgAction",value:function(){this._handleCardClick(this._link,this._name)}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._inputForm=n,this._inputList=this._inputForm.querySelectorAll("".concat(this._config.inputElement)),this._button=this._inputForm.querySelector("".concat(this._config.buttonElement))}var t,n;return t=e,(n=[{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_hasInvalidInput",value:function(e){return Array.from(e).some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?(this._button.classList.add("".concat(this._config.inactiveButtonClass)),this._button.disabled=!0):(this._button.classList.remove("".concat(this._config.inactiveButtonClass)),this._button.disabled=!1)}},{key:"_showInputError",value:function(e){var t=document.querySelector(".".concat(e.id,"-error"));e.classList.add(this._config.inputErrorClass),t.textContent="".concat(e.validationMessage),t.classList.add(this._config.errorClass)}},{key:"_hideInputError",value:function(e){var t=document.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._config.inputErrorClass),t.textContent="",t.classList.remove(this._config.errorClass)}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){var r=t.item,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._item=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"showAllElement",value:function(){var e=this;this._item.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t}var t,n;return t=e,(n=[{key:"generatePopup",value:function(){return this._element=document.querySelector(this._popupSelector),this._setEventListeners(),this._element}},{key:"open",value:function(){this._element.classList.add("popup_opened")}},{key:"close",value:function(){this._element.classList.remove("popup_opened")}},{key:"_handleEscClose",value:function(e){"Escape"==e.code&&this.close()}},{key:"_handleOverleyClose",value:function(e){e.target.classList.contains("popup_opened")&&this.close()}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".popup__container-btn").addEventListener("click",(function(){e.close(),console.log("double click!!!")})),this._element.addEventListener("keydown",(function(t){e._handleEscClose(t)})),this._element.closest(".popup").addEventListener("mousedown",(function(t){e._handleOverleyClose(t)}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=y(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function m(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function c(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(r=i.call(this,e))._link=t,r._name=n,r}return t=c,(n=[{key:"_creatPopupImg",value:function(){return this.generatePopup(),this._element.querySelector(".popup-image__title").textContent=this._name,this._element.querySelector(".popup-image__img").src=this._link,this._element.querySelector(".popup-image__img").alt=this._name,this._element}},{key:"open",value:function(){this._creatPopupImg(),f(h(c.prototype),"open",this).call(this)}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(l);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function S(e,t){return S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},S(e,t)}function k(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function c(e){var t,n=e.popupSelector,r=e.renderInput;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,n))._renderInput=r,t}return t=c,(n=[{key:"_getInputValues",value:function(){var e=[];return this._inputList=this._element.querySelectorAll(".popup__form"),this._inputList.forEach((function(t,n){e[n]=t.value})),e}},{key:"_resetInputForm",value:function(){this._inputList=this._element.querySelectorAll(".popup__form"),this._inputList.forEach((function(e){e.value=""}))}},{key:"close",value:function(){var e=this;this._resetInputForm(),this._element.removeEventListener("submit",(function(t){t.preventDefault(),e._renderInput(e._getInputValues()),e.close()})),g(E(c.prototype),"close",this).call(this)}},{key:"_setEventListeners",value:function(){var e=this;g(E(c.prototype),"_setEventListeners",this).call(this),this._element.addEventListener("submit",(function(t){t.preventDefault(),e._renderInput(e._getInputValues()),e.close()}))}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(l);function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selectorUserName=t,this._selectprUserJob=n}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){document.querySelector(".popup__form-name").value=document.querySelector(this._selectorUserName).textContent,document.querySelector(".popup__form-profetional").value=document.querySelector(this._selectprUserJob).textContent}},{key:"setUserInfo",value:function(e,t){document.querySelector(this._selectorUserName).textContent=e,document.querySelector(this._selectprUserJob).textContent=t}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var x,P={};x={formElement:".popup-information",inputElement:".popup__form",buttonElement:".popup__form-save",inactiveButtonClass:"popup__form-save_disable",errorClass:"popup__form-error_action"},Array.from(document.querySelectorAll(x.formElement)).forEach((function(e){var t=new i(x,e),n=e.getAttribute("name");P[n]=t,t.enableValidation()})),new q(".profil-content__name",".profil-content__profethional"),t.addEventListener("click",(function(){var e=new q(".profil-content__name",".profil-content__profethional"),t=new C({popupSelector:".popup-profil",renderInput:function(t){var n,r,o=(r=2,function(e){if(Array.isArray(e))return e}(n=t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(u)throw o}}return i}}(n,r)||function(e,t){if(e){if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],c=o[1];e.setUserInfo(i,c)}});t.generatePopup(),e.getUserInfo(),t.open()})),e.addEventListener("click",(function(){var e=new C({popupSelector:".popup-card",renderInput:function(e){var t={name:e[0],link:e[1]},n=new r({data:t,handleCardClick:function(e,t){var n=new _(".popup-image",e,t);n.generatePopup(),n.open()}},".card-template"),o=n.generateCard();document.querySelector(".cards").prepend(o)}});e.generatePopup(),e.open()}));var L=new u({item:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},{name:"Дагестан",link:"https://images.unsplash.com/photo-1626517545905-dd9a490e013b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8JUQxJTgwJUQwJUJFJUQxJTgxJUQxJTgxJUQwJUI4JUQxJThGfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},{name:"Мещерский парк",link:"https://images.unsplash.com/photo-1594714936914-2713fadc5f02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fCVEMSU4MCVEMCVCRSVEMSU4MSVEMSU4MSVEMCVCOCVEMSU4RnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},{name:"Роза Хутор",link:"https://images.unsplash.com/photo-1617117833203-c91b04e0431f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fCVEMSU4MCVEMCVCRSVEMSU4MSVEMSU4MSVEMCVCOCVEMSU4RnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}],renderer:function(e){var t=new r({data:e,handleCardClick:function(e,t){var n=new _(".popup-image",e,t);n.generatePopup(),n.open()}},".card-template").generateCard();L.addItem(t)}},".cards");L.showAllElement()})();