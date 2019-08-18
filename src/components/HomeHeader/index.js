import React from 'react';

import { View, TextInput, Image, StyleSheet, Text } from 'react-native';

// import { Container } from './styles';

export default class HomeHeader extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Explore</Text>
                <View style={styles.background}>
                    <TextInput placeholder="Pesquisar" style={styles.input}></TextInput>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingHorizontal: 5,
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 0.8,
    },
    input: {
        fontSize: 14,
        justifyContent: 'center',
        backgroundColor: '#e0e0e0',
        borderRadius: 15,
        height: 40,
        marginBottom: 15
    },
    title: {
        fontSize: 28,
        marginLeft: 5,
        fontWeight: 'bold',
        marginBottom: 18,
        marginTop: 18,
        color: '#f58c22'
    }
});