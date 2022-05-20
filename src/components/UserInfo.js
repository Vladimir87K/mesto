export default class UserInfo {
    constructor(selectorUserName, selectorUserJob, selectorUserAvatar) {
        this._userName = document.querySelector(selectorUserName);
        this._userJob = document.querySelector(selectorUserJob);
        this._userAvatar = document.querySelector(selectorUserAvatar)
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            about: this._userJob.textContent,
            avatar: this._userAvatar,
            Id: this._userId
        };
    }

    setUserInfo(userName, userJob, userAvatar, userId) {
        this._userName.textContent = userName;
        this._userJob.textContent = userJob;
        this._userAvatar.src = userAvatar;
        this._userId = userId;
    }
}