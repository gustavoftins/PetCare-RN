import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default class Section extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <View style={[styles.section]}>
                <TouchableOpacity>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Image source={this.props.imgpath} style={styles.img} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    section: {
        height: 100,
        width: '95%',
        borderColor: '#ebeced',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 5,
        alignItems: 'center',
        alignContent: 'center',
        paddingTop: 10
    },
    title: {
        fontSize: 38,
        fontWeight: 'bold',
        color: '#394458'
    },
    img: {
        height: '100%',
        width: '100%'
    }

});