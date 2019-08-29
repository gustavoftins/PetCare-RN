import React from 'react';
import { Text, StyleSheet, View, Image, Button, TouchableOpacity, StatusBar } from 'react-native';
import SecondaryButton from '../../components/Button/SecondaryButton/index';

import styles from './styles';

export function navigationOptions({ navigation }) {
    return {
        header: null
    };
}

export default function Opening({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content"/>
            <Image source={require('../../assets/paw.png')} style={styles.img}/>
            <Text style={styles.text}>PetCare</Text>
            <Text style={styles.phrase}>Em prol do bem-estar do seu pet</Text>
            <Image style={styles.mainImg}source={require('../../assets/main.jpg')}/>
            <SecondaryButton text="Entrar" onPress={()=>navigation.navigate("Signin")}/>
            <SecondaryButton text="Cadastrar" onPress={()=>navigation.navigate("Signup")}/>
        </View>
    );
}
