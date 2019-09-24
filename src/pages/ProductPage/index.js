import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function ProductPage({ navigation }) {
    const product = navigation.getParam('product');

    useEffect(() => {
        console.log(product);
    }, [])
    

  return (
    <View>
        <Text>{product.name}</Text>
        <Text>{product.description}</Text>
        <Text>Porte: {product.porte}</Text>
        <Text>Quantidade em estoque: {product.quantityStore}</Text>
        <Text>Indicação: {product.indicationPet}</Text>
        <Text>Transgênico: {product.transgenic}</Text>
    </View>
  );
}
