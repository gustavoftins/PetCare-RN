import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

// import { Container } from './styles';

export default function CartProducts({ productName, quantity, price }) {
  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.name}>{productName}</Text>
            <Text style={styles.text}>Quantidade: {quantity}</Text>
            <Text style={styles.text}>Total: R${price}</Text>
        </View>
        <View style={styles.iconsContainer}>
            <View>
                <TouchableOpacity>
                    <Text>Remover Item</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}
