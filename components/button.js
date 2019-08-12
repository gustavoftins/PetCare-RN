import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class AppButton extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <TouchableOpacity style={styles.btn}
                onPress={this.props.onPress}
            >
                <Text style={{color: '#fff'}}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#7bbb5e',
        height: 60,
        width: 300,
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#73b058',
        marginTop: 30
    }
});