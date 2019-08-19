import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';


export default class Cart extends React.Component {
    callfun = () => {
        alert("Teste");
    }
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row', alignSelf: 'stretch'}}>
                <TouchableOpacity onPress={this.callfun} style={{height: 150, width: 150}}>
                    <Image source={require('../../assets/clinica.jpeg')} style={{width: '100%',height: '100%'}} />
                </TouchableOpacity>
            </View>
        );
    }
}


