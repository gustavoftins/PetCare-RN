import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Section({ title, imgpath }) {
    return(
        <View style={[styles.section]}>
            <TouchableOpacity>
                <Text style={styles.title}>{title}</Text>
                <Image source={imgpath} style={styles.img} />
            </TouchableOpacity>
        </View>
    );
}