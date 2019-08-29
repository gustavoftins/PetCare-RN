import React from 'react';
import { ScrollView, Image, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Company({ onPress, imgpath, status, title, description }) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <View style={styles.card}>
            <View style={styles.imgContainer}>
                <Image source={imgpath} style={styles.img}/>
              </View>
              <View style={styles.textContainer}>
                <Text numberOfLines={1} style={styles.title}>{title}</Text>
                <Text numberOfLines={1} style={styles.description}>{description}</Text>
                <Text style={styles.status}>{status}</Text>
              </View>
            </View>
        </View>
      </TouchableOpacity>
    );
}
