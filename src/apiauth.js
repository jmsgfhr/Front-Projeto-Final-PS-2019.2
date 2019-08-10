import axios from 'axios';

const apiAuth = axios.create({
    baseURL: 'https://projeto-final-in-autenticado.herokuapp.com/',
});

export default apiAuth;