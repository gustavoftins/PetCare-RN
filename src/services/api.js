import axios from 'axios';
import { getToken, TOKEN_KEY } from './auth';
import AsyncStorage from '@react-native-community/async-storage';
const api = axios.create({
    baseURL: 'https://aw-petcare-api.herokuapp.com/api',
    headers: { 'Content-Type': 'application/json' }
});

api.interceptors.request.use(async config => {
    var token;
    await AsyncStorage.getItem(TOKEN_KEY).then((value) => {
        token = value;
    })

    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})


export default api;
