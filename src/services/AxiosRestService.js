import API from './AxiosService';

export const getData = (endpoint) => {
    API.get(endpoint).then(res => {
        return res;
    });    
}

export const postData = (endpoint, body) => {
    API.post(endpoint, body).then(res => {
        return res;
    });    
}