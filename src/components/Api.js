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
             return fetch(this._url, {
                     method: 'DELETE',
                     headers: this._headers,
                 })
                 .then(res => {
                     if (res.ok) {
                         return res.json();
                     }
                     return Promise.reject('Произошла ошибка, упс...')
                 })
         } */
    // другие методы работы с API
}