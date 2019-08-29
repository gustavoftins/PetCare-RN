import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Section({ title, imgpath }) {
    return(
        <TouchableOpacity style={styles.btn}>
            <View style={[styles.section]}>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={imgpath}/>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}