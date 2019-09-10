import api from './api';
import AsyncStorage from '@react-native-community/async-storage';

export const TOKEN_KEY = 'jwtToken';
export const getToken = () => AsyncStorage.getItem(TOKEN_KEY);
export const isAuthenticated = () => AsyncStorage.getItem(TOKEN_KEY) !== null;


export const logout = async () => {
    try {
        await AsyncStorage.removeItem(TOKEN_KEY);
        console.log('foi');
    }catch(err){
        console.log(err);
    }
}

