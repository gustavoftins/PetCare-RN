import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
// import { Container } from './styles';

export default function CompanySubHeader() {
  return (
    <View style={styles.container}>
        <Image source={require('../../assets/blumengarten.jpg')} style={styles.icon} />
        <View style={styles.textContainer}>
            <Text style={styles.name}>BlumenGarten Pet Shop</Text>
            <Text style={styles.description}>They say hard work pays off I've been feeling paid off</Text>
            <Text style={styles.status}>Fechado</Text>
        </View>

    </View>
  );
}
