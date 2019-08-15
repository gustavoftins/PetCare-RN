import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default class Cart extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View>
                <Text>Aqui é o carrinho</Text>
            </View>
        );
    }
}


