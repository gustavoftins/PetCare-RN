import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
// import { Container } from './styles';

export default function CompanySubHeader({ companyName, companyDescription, companyStatus, favorite, onPress }) {

  return (
    <View style={styles.container}>
        <Image source={require('../../assets/defaultcompanylogo.png')} style={styles.icon} />
        <View style={styles.textContainer}>
            <Text style={styles.name}>{companyName}</Text>
            <Text style={styles.description}>{companyDescription}</Text>
            <Text style={styles.status}>{companyStatus}</Text>
        </View>
        <TouchableOpacity onPress={onPress}>
        <View style={styles.favoriteContainer}>
            <Image source={favorite} style={styles.favorite} />
        </View>
        </TouchableOpacity>
    </View>
  );
}