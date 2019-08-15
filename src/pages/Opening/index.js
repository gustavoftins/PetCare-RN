import React from 'react';
import { Text, StyleSheet, View, Image, Button, TouchableOpacity } from 'react-native';
import NewButton from '../../components/button';

export default class Opening extends React.Component {
    static navigationOptions = {
        header: null
      }

    render() {
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
                        onPress={()=>this.props.navigation.navigate("Signin")}
                    />
                    <NewButton text="CADASTRAR" 
                        onPress={()=>this.props.navigation.navigate("Signup")}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 15
    },
    btn: {
        backgroundColor: '#7bbb5e',
        height: 60,
        width: 300,
        borderColor: '#000',
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#73b058',
        marginTop: 30
    },
    btnText: {
        color: '#fff'
    },
    slogan: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 50,
        color: '#4c5765'
    }
});