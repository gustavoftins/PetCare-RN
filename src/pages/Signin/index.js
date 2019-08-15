import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import NewInput from "../../components/input";
import NewButton from "../../components/button";

export default class Signin extends React.Component {
    static navigationOptions = {
        title: 'Entrar'
    }
    render() {
        return (
            <View style={styles.container}>
                <Image 
                    source={require('../../assets/dog.png')}
                />
                <NewInput placeholder="E-mail"/>
                <NewInput placeholder="Senha" />
                <NewButton text="Entrar"
                    onPress={()=>this.props.navigation.navigate("Home")}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center'
    }
});