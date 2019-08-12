import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class Signup extends React.Component {
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
                    <Button 
                        title="Realizar Cadastro"
                        color="#7bbb5e"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    input: {
        borderBottomColor: '#7bbb5e',
        borderBottomWidth: 1.5,
        width: 300,
        marginBottom: 20
    },
    title: {
        fontSize: 32,
        marginTop: 10,
        marginLeft: 33,
        fontWeight: 'bold'
    },
    description: {
        marginLeft: 33,
        color: '#c4c4c4'
    }
});