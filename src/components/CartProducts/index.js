import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

// import { Container } from './styles';

export default function CartProducts() {
  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.name}>Ração Malaca</Text>
            <Text style={styles.text}>Quantidade: 25</Text>
            <Text style={styles.text}>Total: R$78.00</Text>
        </View>
        <View style={styles.iconsContainer}>
            <View>
                <TouchableOpacity>
                    <Image style={[styles.icon, styles.firstIcon]} source={require('../../assets/minus.png')}/>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <Image style={styles.icon} source={require('../../assets/plus.png')} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}
