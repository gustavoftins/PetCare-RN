import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';
// import { Container } from './styles';

export default function SecondaryButton({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.btn}
            onPress={onPress}
        >
            <Text style={{color: '#fff'}}>{text}</Text>
    </TouchableOpacity>
  );
}
