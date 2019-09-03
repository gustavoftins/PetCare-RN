import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import NewInput from "../../components/Input/input";
import NewButton from "../../components/Button/button";
import styles from './styles';
import { NavigationEvents } from 'react-navigation';

export default function Signin({ navigation }) {

    const INITIAL_STATE = {
        email: '',
        password: '',
    }

    const [user, setUser] = useState(INITIAL_STATE);

    function handleLogin() {

        navigation.navigate('Home');
        alert(user.email)
    }
    return (
        <View style={styles.container}>
            <Image 
                source={require('../../assets/dog.png')}
            />
            <NewInput placeholder="E-mail" onChangeText={e => setUser({ ...user, email: e.target.value})}/>
            <NewInput placeholder="Senha" onChangeText={e => setUser({ ...user, password: e.target.value})} />
            <NewButton text="Entrar"
                onPress={handleLogin}
            />
        </View>
    );
}
