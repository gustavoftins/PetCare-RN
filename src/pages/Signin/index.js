import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TOKEN_KEY, isAuthenticated } from '../../services/auth';
import NewInput from "../../components/Input/input";
import NewButton from "../../components/Button/button";
import styles from './styles';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

export default function Signin({ navigation }) {

    const INITIAL_STATE = {
        email: '',
        password: '',
    }

    const [user, setUser] = useState(INITIAL_STATE);
    const [error, setError] = useState('');

    useEffect(() => {
        //if(isAuthenticated()) {
        //    navigation.navigate('Home');
        //}
    },[])

    async function handleLogin() {

       const { email, password } = user;

       if(email == '' || password == ''){
           setError("Preencha todos os campos");
           return;
       }else{
          if(!(user.email.includes('@') && user.email.includes('.com'))){
              setError("E-mail não válido");
              return;
          }
       }

       if(password.length > 100) {
           setError("Senha não válida");
           return;
       }

       await api.post("/auth/login", JSON.stringify(user)).then(response => {
           const { accessToken } = response.data;
           console.log(response.data);
           console.log(accessToken);
           AsyncStorage.setItem('jwtToken', accessToken);
           navigation.navigate("Home");
       }).catch(error => {
           switch(error.message){
               case "Network Error":
                   return setError("O servidor está temporariamente desligado");
                case "Request failed with status code 404":
                    return setError("Não existe nenhuma empresa associada a este email.");
                case "Request failed with status code 401":
                    return setError("Email ou senha incorretos.");
                default:
                    return setError("");
           } 
       })



    }
    return (
        <View style={styles.container}>
            <Image 
                source={require('../../assets/dog.png')}
            />
            <View>
                <Text>{error}</Text>
            </View>
            <NewInput placeholder="E-mail" onChangeText={(text) => setUser({ ...user, email: text})}/>
            <NewInput placeholder="Senha" onChangeText={(text) => setUser({ ...user, password: text})}
            secureTextEntry={true} />
            <NewButton text="Entrar"
                onPress={handleLogin}
            />
        </View>
    );
}
