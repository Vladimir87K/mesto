export default class UserInfo {
    constructor(selectorUserName, selectorUserJob, selectorUserAvatar) {
        this._userName = document.querySelector(selectorUserName);
        this._userJob = document.querySelector(selectorUserJob);
        this._userAvatar = document.querySelector(selectorUserAvatar)
    }

    getUserInfo() {
        return [this._userName.textContent,
            this._userJob.textContent,
            this._userAvatar
        ];
    }

    setUserInfo(userName, userJob, userAvatar) {
        this._userName.textContent = userName;
        this._userJob.textContent = userJob;
        this._userAvatar.src = userAvatar;
    }
}