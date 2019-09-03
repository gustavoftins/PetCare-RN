import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import styles from './styles';

export default function NewInput({ placeholder, onChangeText, onPress }) {
    return(
        <TextInput placeholder={placeholder}
            style={styles.input}
            onChangeText={onChangeText}
            onPress={onPress}
        />
    );
}

