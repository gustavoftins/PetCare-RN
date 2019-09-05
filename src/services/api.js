import axios from 'axios';

const api = axios.create({
    baseURL: 'https://aw-petcare-api.herokuapp.com/api',
    headers: { 'Content-Type': 'application/json' }
});


export default api;
