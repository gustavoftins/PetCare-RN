import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import NewInput from "../../components/Input/input";
import NewButton from "../../components/Button/button";
import styles from './styles';
import { NavigationEvents } from 'react-navigation';
import api from '../../services/api'

export default function Signin({ navigation }) {

    const INITIAL_STATE = {
        email: '',
        password: '',
    }

    const [user, setUser] = useState(INITIAL_STATE);
    const [error, setError] = useState('');

    async function handleLogin() {

        const { email, password} = user;

        await api.post("/auth/login", JSON.stringify(user)).then(res => {

        })
    }
    return (
        <View style={styles.container}>
            <Image 
                source={require('../../assets/dog.png')}
            />
            <NewInput placeholder="E-mail" onChangeText={(text) => setUser({email:text})}/>
            <NewInput placeholder="Senha" onChangeText={(text) => setUser({password:text})}
            secureTextEntry={true} />
            <NewButton text="Entrar"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    );
}
