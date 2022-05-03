 export default class UserInfo {
   constructor(selectorUserName, selectorUserJob) {
    this._selectorUserName = selectorUserName;
    this._selectprUserJob = selectorUserJob;
   }

   getUserInfo() {
     document.querySelector('.popup__form-name').value = document.querySelector(this._selectorUserName).textContent;
     document.querySelector('.popup__form-profetional').value = document.querySelector(this._selectprUserJob).textContent;
   }

   setUserInfo(userName, userJob) {
    document.querySelector(this._selectorUserName).textContent = userName;
    document.querySelector(this._selectprUserJob).textContent = userJob;
   }
 }