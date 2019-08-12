import React from 'react';
import { Text, StyleSheet, View, Image, Button } from 'react-native';

export default class Opening extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image 
                    style={{width: 120, height: 120}}
                    source={{uri: 'https://image.flaticon.com/icons/png/512/12/12638.png'}}
                />
                <Text style={styles.title}>PetCare</Text>
                <View style={{width: 300, marginBottom: 50, marginTop:50}}>
                <Text style={{marginBottom: 25, borderBottomColor:"#7bbb5e", borderBottomWidth: 1.5, paddingBottom: 10 }}>Escolha uma opção:</Text>
                    <Button 
                        title="Já tenho cadastro"
                        color="#7bbb5e"
                        style={styles.button}
                    />
                </View>
                <View style={{width: 300}}>
                    <Button 
                        title="Sou novo por aqui"
                        color="#7bbb5e"
                        style={styles.button}
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
        marginTop: 50
    },
    title: {
        fontWeight: 'bold'
    },
    button: {
        minWidth: '80%',
        marginBottom: 50
    }
});