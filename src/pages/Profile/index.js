import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

export default function Profile() {
  return (
    <View style={styles.container}>
        <View style={styles.avatarContainer}>
            <Image source={require('../../assets/avatar.png')}/>
        </View>
        <Text style={styles.label}>Nome</Text>
        <View style={styles.contentArea}>
        <Text style={styles.content}>João da Luz</Text>
        </View>
        <Text style={styles.label}>E-mail</Text>
        <View style={styles.contentArea}>
        <Text style={styles.content}>joaozinho23@gmail.com</Text>
        </View>
        <Text style={styles.label}>CPF</Text>
        <View style={styles.contentArea}>
        <Text style={styles.content}>105.597.339-76</Text>
        </View>
    </View>
  );
}
