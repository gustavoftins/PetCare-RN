import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import styles from './styles';
export default function AppButton({ onPress, text, color }) {
    return (
        <TouchableOpacity style={styles.btn}
            onPress={onPress}
        >
            <Text style={{color: '#fff'}}>{text}</Text>
        </TouchableOpacity>
    );
}
