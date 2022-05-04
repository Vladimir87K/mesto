 export default class UserInfo {
   constructor(selectorUserName, selectorUserJob) {
    this._UserName = document.querySelector(selectorUserName);
    this._UserJob = document.querySelector(selectorUserJob);
   }

   getUserInfo() {
     document.querySelector('.popup__form-name').value = this._UserName.textContent;
     document.querySelector('.popup__form-profetional').value = this._UserJob.textContent;
   }

   setUserInfo(userName, userJob) {
    this._UserName.textContent = userName;
    this._UserJob.textContent = userJob;
   }
 }