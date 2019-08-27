import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import NewInput from "../../components/Input/input";
import NewButton from "../../components/Button/button";
import styles from './styles';

export default function Signin({ navigation }) {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../../assets/dog.png')}
            />
            <NewInput placeholder="E-mail"/>
            <NewInput placeholder="Senha" />
            <NewButton text="Entrar"
                onPress={()=>navigation.navigate("Home")}
            />
        </View>
    );
}
