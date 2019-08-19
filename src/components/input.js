import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';


export default class NewInput extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <TextInput placeholder={this.props.placeholder}
                style={styles.input}
            />
        );
    }
}

const styles = StyleSheet.create({
    input: {
        borderBottomColor: '#7bbb5e',
        borderBottomWidth: 1.5,
        width: 380,
        marginBottom: 20,
        height: 80,
        paddingBottom: 0,
        fontSize: 20
    }
});