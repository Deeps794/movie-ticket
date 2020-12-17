import API from '../axios/Api'

export const API_KEY = 'd9c955e307b9020a5d9af1d049f8a191'

export const getData = (endpoint) => {
    return API.get(endpoint, {params: {'api_key': API_KEY}}).then(res => {
        return Promise.resolve(res);
    });
}

export const postData = (endpoint, body) => {
    return API.post(endpoint, body).then(res => {
        return Promise.resolve(res);
    });
}