import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function AddressBox() {
  return (
    <View style={styles.box}>
        <Text style={styles.street}>Rua 30 de Outubro - 505</Text>
        <Text style={styles.neighbourhood}>Itoupava Norte</Text>
        <Text style={styles.city}>Blumenau - SC</Text>
    </View>
  );
}
