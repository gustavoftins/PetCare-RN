import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

import NewButton from '../components/button';

export default class Signup extends React.Component {
    static navigationOptions = {
        title: 'Cadastro'
    }
    render() {
        return (
            <View>
                <Text style={styles.title}>Seja bem-vindo ao petcare</Text>
                <Text style={styles.description}>Primeiro, vamos cadastra-lo para que você possa aproveitar de todos os nossos recursos</Text>
                <View style={styles.container}>
                    <TextInput placeholder="Nome" style={styles.input}></TextInput>
                    <TextInput placeholder="E-mail" style={styles.input}></TextInput>
                    <TextInput placeholder="Senha" style={styles.input}></TextInput>
                    <TextInput placeholder="Telefone" style={styles.input}></TextInput>
                    <NewButton text="Realizar Cadastro"/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderBottomColor: '#7bbb5e',
        borderBottomWidth: 1.5,
        width: 380,
        marginBottom: 20,
        height: 80,
        paddingBottom: 0
    },
    title: {
        fontSize: 40,
        marginTop: 10,
        fontWeight: 'bold',
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom: 25
    },
    description: {
        color: '#c4c4c4',
        fontSize: 18,
        justifyContent: 'center',
        textAlign: 'justify',
        paddingLeft: 30,
        paddingRight: 30
    }
});