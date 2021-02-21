import axios from 'axios';

const api = axios.create({
    baseURL: 'https://projeto-final-in.herokuapp.com/',
});

export default api;