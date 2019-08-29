import React from 'react';
import { View, TextInput, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
// import { Container } from './styles';

export default function SearchBar() {
  return (
    <View style={styles.container}>
        <View style={styles.display}>
            <TextInput style={styles.input} placeholder="Pesquisar"/>
            <TouchableOpacity>
                <Image style={styles.icon} source={require('../../assets/search.png')}/>
            </TouchableOpacity>
        </View>
    </View>
  );
}
