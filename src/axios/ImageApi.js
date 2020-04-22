import axios from 'axios';

export const IMAGE = Object.freeze({
    BASE_URL: 'https://image.tmdb.org/t/p/',
    BACKDROP_SIZE: 'w1280',
    LOGO_SIZE: 'w154',
    POSTER_SIZE: 'w780',
    PROFILE_SIZE: 'w185',
    STILL_SIZE: 'w300'
});

export default axios.create({
    baseURL: IMAGE.BASE_URL
});