 export default class UserInfo {
   constructor(selectorUserName, selectorUserJob) {
    this._UserName = document.querySelector(selectorUserName);
    this._UserJob = document.querySelector(selectorUserJob);
   }

   getUserInfo() {
    return [this._UserName.textContent,
      this._UserJob.textContent];
   }

   setUserInfo(userName, userJob) {
    this._UserName.textContent = userName;
    this._UserJob.textContent = userJob;
   }
 }