import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';


export default function Box({ icon, title, description, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
        <View style={styles.iconContainer}>
            <Image style={styles.img} source={icon}/>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{description}</Text>
          </View>
    </View>
    </TouchableOpacity>
  );
}
