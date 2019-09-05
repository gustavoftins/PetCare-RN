import api from './api';
import { AsyncStorage } from 'react-native'

export const TOKEN_KEY = 'jwtToken';
export const getToken = () => AsyncStorage.getItem(TOKEN_KEY);
export const isAuthenticated = () => AsyncStorage.getItem(TOKEN_KEY) !== null;


export const logout = () => {
    AsyncStorage.removeItem(TOKEN_KEY);
    AsyncStorage.removeItem('user')
}