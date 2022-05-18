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
                return Promise.reject('Произошла ошибка в загрузке карточек, упс...')
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
                return Promise.reject('Произошла ошибка в загрузке профиля, упс...')
            })
    }

    addNewCards(data) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-41/cards', {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify({
                    name: data.name,
                    link: data.link
                })
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject('Произошла ошибка при загрузке карточки, упс...')
            })
    }

    deleteCard(cardId) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-41/cards/${cardId}`, {
                method: 'DELETE',
                headers: this._headers,
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject('Произошла ошибка удаления, упс...')
            })
    }

    correctUserInfo(data) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-41/users/me', {
                method: 'PATCH',
                headers: this._headers,
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


    correctUserAvatar(data) {
        console.log(data)
        return fetch('https://mesto.nomoreparties.co/v1/cohort-41/users/me/avatar', {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    avatar: data.urlAvatar
                })
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject('Произошла ошибка загрузки аватарки, упс...')
            })
    }
    addLikeCard(idCard) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-41/cards/${idCard}/likes`, {
                method: 'PUT',
                headers: this._headers,
            })
            .then(res => {
                if (res.ok) {
                    /* console.log(res.json()); */
                    return res.json();
                }
                return Promise.reject('Произошла ошибка постановки лайка, упс...')
            })
    }

    deleteLikeCard(idCard) {
            return fetch(`https://mesto.nomoreparties.co/v1/cohort-41/cards/${idCard}/likes`, {
                    method: 'DELETE',
                    headers: this._headers,
                })
                .then(res => {
                    if (res.ok) {
                        /*   console.log(res.json()) */
                        return res.json();
                    }
                    return Promise.reject('Произошла ошибка удаления лайка, упс...')
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
                
         */
        // другие методы работы с API
}