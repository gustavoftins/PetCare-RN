import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Section extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <View style={styles.section}>
                <View style={{flexDirection: 'row', height: '100%', width: '100%'}}>
                    <Image source={this.props.imgpath} style={styles.img} />
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
                <View>
                    <Text>{this.props.description}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    section: {
        height: 100,
        width: '100%',
        borderColor: '#e0e0e0',
        borderWidth: 1.8,
        marginBottom: 30
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    img: {
        height: '100%',
        width: '100%'
    }

});