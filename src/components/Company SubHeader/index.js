import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
// import { Container } from './styles';

export default function CompanySubHeader({ companyName, companyDescription, companyStatus, favorite }) {


  return (
    <View style={styles.container}>
        <Image source={require('../../assets/defaultcompanylogo.png')} style={styles.icon} />
        <View style={styles.textContainer}>
            <Text style={styles.name}>{companyName}</Text>
            <Text style={styles.description}>{companyDescription}</Text>
            <Text style={styles.status}>{companyStatus}</Text>
        </View>
        <View style={styles.favoriteContainer}>
        </View>
    </View>
  );
}