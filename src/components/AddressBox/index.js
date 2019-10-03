import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function AddressBox({ street, neighbourhood, city, placeNumber , state}) {
  return (
    <View style={styles.box}>
        <Text style={styles.street}>{street} - {placeNumber}</Text>
        <Text style={styles.neighbourhood}>{neighbourhood}</Text>
        <Text style={styles.city}>{city}</Text>
    </View>
  );
}
