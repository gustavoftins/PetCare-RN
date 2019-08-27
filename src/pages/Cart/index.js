import React from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import CartProduct from '../../components/CartProducts/index';
import Title from '../../components/Title/index';

import styles from './styles';

export default function Cart() {
  return (
    <ScrollView>
      <Title title="Carrinho" />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.cleanCart}>Limpar Carrinho</Text>
      </TouchableOpacity>
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
    </ScrollView>
  );
}



