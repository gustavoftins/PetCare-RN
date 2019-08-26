import React from 'react';
import { View, ScrollView } from 'react-native';
import CartProduct from '../../components/CartProducts/index';
// import { Container } from './styles';

export default function Cart() {
  return (
    <ScrollView>
        <CartProduct />
    </ScrollView>
  );
}



