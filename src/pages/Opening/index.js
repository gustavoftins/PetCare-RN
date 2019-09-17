import React, {useEffect, useState} from 'react';
import { Text, StyleSheet, View, Image, Button, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import SecondaryButton from '../../components/Button/SecondaryButton/index';

import { TOKEN_KEY } from '../../services/auth';

import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';


export function navigationOptions({ navigation }) {
    return {
        header: null
    };
}

export default function Opening({ navigation }) {

    const [token, setToken] = useState();

    async function getUser(){
        await AsyncStorage.getItem(TOKEN_KEY).then((value) =>{
            setToken(value);
        })
    }

    useEffect(() =>{
        getUser();
    }, [])

    useEffect(() =>{
        console.log(token);
        if(token !== null && token !== undefined){
            navigation.navigate('Home');
        }
    }, [token])
    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content"/>
                <Image source={require('../../assets/paw.png')} style={styles.img}/>
                <Text style={styles.text}>PetCare</Text>
                <Text style={styles.phrase}>Em prol do bem-estar do seu pet</Text>
                <Image style={styles.mainImg}source={require('../../assets/main.jpg')}/>
                <SecondaryButton text="Entrar" onPress={()=>navigation.navigate("Signin")}/>
                <SecondaryButton text="Cadastrar" onPress={()=>navigation.navigate("Signup")}/>
            </View>
        </ScrollView>
    );
}
