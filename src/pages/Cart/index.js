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
        <CartProduct productName="Ração Malaca"
          quantity="2"
          price="196"
        />
        <CartProduct productName="Coleira azul"
          quantity="1"
          price="68"
        />
        <CartProduct productName="Petisco para gatos"
          quantity="4"
          price="16"
        />
        <CartProduct productName="Remédio" 
          quantity="1"
          price="35"
        />
        <CartProduct productName="Motor de barco" 
          quantity="28"
          price="22"
        />
    </ScrollView>
  );
}



