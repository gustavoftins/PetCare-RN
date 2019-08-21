import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';
// import { Container } from './styles';

import SubHeader from '../../components/Company SubHeader/index';
import Product from '../../components/Product/index';

export default function Company() {
  return (
    <ScrollView style={{        backgroundColor: '#f5f5f5'}}>
        <SubHeader />
        <Product />
        <Product />
    </ScrollView>
  );
}
