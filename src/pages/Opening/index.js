import React from 'react';
import { Text, StyleSheet, View, Image, Button, TouchableOpacity } from 'react-native';
import NewButton from '../../components/Button/button';

import styles from './styles';

export function navigationOptions({ navigation }) {
    return {
        header: null
    };
}

export default function Opening({ navigation }) {
    return (
        <View style={styles.container}>
            <Image 
                style={{width: 120, height: 120}}
                source = {require('../../assets/download.png')}
            />
            <Text style={styles.title}>PetCare</Text>
            <Text style={styles.slogan}>Unindo a tecnologia e serviços para o bem-estar do seu pet</Text>
            <View style={{width: 300, marginBottom: 50, marginTop:50}}>
                <Text style={{marginBottom: 25, borderBottomColor:"#7bbb5e", borderBottomWidth: 1.5, paddingBottom: 10, fontSize: 18 }}>Escolha uma opção:</Text>
                <NewButton text="LOG IN"
                    onPress={()=>navigation.navigate("Signin")}
                />
                <NewButton text="CADASTRAR" 
                    onPress={()=>navigation.navigate("Signup")}
                />
            </View>
        </View>
    );
}
