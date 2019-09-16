import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import  styles from './styles';
// import { Container } from './styles';

export default function ServiceCard({ name, price, description }) {
  return (
      <View style={styles.container}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.price}>R${price}</Text>
      </View>
  );
}
