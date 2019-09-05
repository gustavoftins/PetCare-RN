import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { isAuthenticated, TOKEN_KEY } from '../../services/auth';

import styles from './styles';

import NewButton from '../../components/Button/button';
import NewInput from "../../components/Input/input";
import api from '../../services/api';

export default function Signup({ navigation }) {

    const INITIAL_STATE = {
        email: '',
        password: '',
        cpf: ''
    };

    const [user, setUser] = useState(INITIAL_STATE);
    const [error, setError] = useState('');

    async function handleSignup(){
 
        const { email, password, cpf } = user;

        if(!email || !password || !cpf){
            setError("Preencha todos os campos");
            return;
        }else {
            if(!(email.includes('@') && email.includes('.com'))){
                setError("Este e-mail não é valido");
                return;
            }
        }

        if(password.length <= 3 || password.length >= 100){
            setError("Insira uma senha válida");
            return;
        }

        if(cpf.length > 11) {
            setError("Este CPF não é válido");
            return;
          }
    
          var Soma;
          var Resto;
          Soma = 0;
          if (cpf === "00000000000") {
            setError("Este CPF não é válido");
            return;
          }
    
          for (var i = 1; i <= 9; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
          Resto = (Soma * 10) % 11;
    
          if ((Resto === 10) || (Resto === 11)) Resto = 0;
          if (Resto !== parseInt(cpf.substring(9, 10))) return false;
    
          Soma = 0;
          for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
          Resto = (Soma * 10) % 11;
    
          if ((Resto === 10) || (Resto === 11)) Resto = 0;
          if (Resto !== parseInt(cpf.substring(10, 11))) {
            setError("Este CPF não é válido");
            return;
          }

        await api.post("/auth/signup", JSON.stringify(user)).then(() => {
            setError("");
            navigation.navigate("Signin");
        }).catch(error => {
            switch(error.message){
                case "Network Error":
                    return setError("O servidor está temporariamente desligado");
                case "Request failed with status code 400":
                    return setError("Este email já está sendo usado");
                default:
                    return setError("");
            }
        })
    }

    return (
        <View>
            <Text style={styles.title}>Seja bem-vindo ao petcare</Text>
            <Text style={styles.description}>Primeiro, vamos cadastra-lo para que você possa aproveitar de todos os nossos recursos</Text>
            <View>
                <Text>{error}</Text>
            </View>
            <View style={styles.container}>
                <NewInput onChangeText={(text) => setUser({...user, email: text})} placeholder="E-mail" />
                <NewInput onChangeText={(text) => setUser({...user, password: text})} placeholder="Senha" />
                <NewInput onChangeText={(text) => setUser({...user, cpf: text})} placeholder="CPF" />
                <NewButton onPress={handleSignup} text="Realizar Cadastro"/>
            </View>
        </View>
    );
}
