import ImageApi from '../axios/ImageApi';

export const getData = (endpoint) => {
    return ImageApi.get(endpoint).then(res => {
        return Promise.resolve(res);
    });
}
