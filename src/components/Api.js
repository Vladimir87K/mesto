export class Api {
    constructor(options) {
        this._url = options.url;
        this._headers = options.headers;

    }

    getInitialCards() {
        return fetch(this._url, {
                method: 'GET',
                headers: this._headers
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject('Произошла ошибка, упс...')
            })
    }

    getInitialProfil() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-41/users/me', {
                method: 'GET',
                headers: this._headers
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject('Произошла ошибка, упс...')
            })
    }


    correctUserInfo(data) {
        console.log(data)
        return fetch('https://mesto.nomoreparties.co/v1/cohort-41/users/me', {
                method: 'PATCH',
                headers: {
                    authorization: 'd2b53e42-b171-4a97-abd9-e550272a84f9',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: data.userName,
                    about: data.userJob
                })
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject('Произошла ошибка, упс...')
            })
    }

    /*  addNewCards(data) {
                             return fetch(https://mesto.nomoreparties.co/v1/cohort-41/users/me/avatar, {
                                     method: 'POST',
                                     headers: this._headers,
                                     body: JSON.stringify(data)
                                 })
                                 .then(res => {
                                     if (res.ok) {
                                         return res.json();
                                     }
                                     return Promise.reject('Произошла ошибка, упс...')
                                 })
                         }

                         deleteCards(data) {
                                 return fetch(https://mesto.nomoreparties.co/v1/cohort-41/cards/cardId/likes, {
                                         method: 'DELETE',
                                         headers: this._headers,
                                     })
                                     .then(res => {
                                         if (res.ok) {
                                             return res.json();
                                         }
                                         return Promise.reject('Произошла ошибка, упс...')
                                     })
                             }
                             
                        correctAvatarImg() {
                            return fetch(https://mesto.nomoreparties.co/v1/cohortId/users/me/avatar, {
                                         method: 'PATCH',
                                         headers: this._headers,
                                     })
                                     .then(res => {
                                         if (res.ok) {
                                             return res.json();
                                         }
                                         return Promise.reject('Произошла ошибка, упс...')
                                     })
                        }
        
                        likeCard() {
                            return fetch(https://mesto.nomoreparties.co/v1/cohortId/cards/cardId/likes, {
                                         method: 'PUT',
                                         headers: this._headers,
                                     })
                                     .then(res => {
                                         if (res.ok) {
                                             return res.json();
                                         }
                                         return Promise.reject('Произошла ошибка, упс...')
                                     })
                        }*/
    // другие методы работы с API
}