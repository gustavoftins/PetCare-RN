import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

import NewButton from '../../components/button';
import NewInput from "../../components/input";

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
                    <NewInput placeholder="Nome" />
                    <NewInput placeholder="E-mail" />
                    <NewInput placeholder="Senha" />
                    <NewInput placeholder="Telefone" />
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