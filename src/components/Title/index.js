import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

// import { Container } from './styles';

export default function Title({ title }) {
  return (
    <View style={styles.titleContainer}>
        <Text style={styles.pageTitle}>{title}</Text>
    </View>
  );
}
