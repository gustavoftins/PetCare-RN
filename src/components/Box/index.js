import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';


export default function Box() {
  return (
    <View style={styles.container}>
        <View style={styles.iconContainer}>
            <Image style={styles.img} source={require('../../assets/credentials.png')}/>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.title}>Meus Dados</Text>
            <Text style={styles.text}>dyfsgyfgdsyfhysdfhydsfhysdfhysdfhsdyfhsdyfhsdyfhsdyfhsdfysdhfsdhfysdhfsdyfh</Text>
        </View>
    </View>
  );
}
