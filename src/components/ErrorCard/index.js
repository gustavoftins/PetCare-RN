import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

import styles from './styles';

export default function ErrorCard({ message }) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{message}</Text>
    </View>
  );
}
