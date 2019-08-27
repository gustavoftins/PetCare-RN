import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

import styles from './styles';

import NewButton from '../../components/Button/button';
import NewInput from "../../components/Input/input";

export default function Signup() {
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
