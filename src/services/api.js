import axios from 'axios';
import { getToken } from './auth';
const api = axios.create({
    baseURL: 'https://aw-petcare-api.herokuapp.com/api',
    headers: { 'Content-Type': 'application/json' }
});



export default api;
