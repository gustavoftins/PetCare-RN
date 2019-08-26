import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';
import { createMaterialTopTabNavigator } from 'react-navigation';
// import { Container } from './styles';

import SubHeader from '../../components/Company SubHeader/index';
import Product from '../../components/Product/index';
import Services from '../Services/index';

export function Company() {
  return (
    <ScrollView style={{        backgroundColor: '#f5f5f5',}}>
      <View style={{width: '100%', alignItems: 'center'}}>
          <SubHeader />
          <Product />
          <Product />
        </View>
    </ScrollView>
  );
}

export default createMaterialTopTabNavigator({
    Produtos: Company,
    Serviços: Services,
    
},{
  tabBarOptions: {
    activeBackgroundColor: '#7bbb5e',
    labelStyle:{
      color: 'black',
      fontSize: 12
    },
    style:{
      backgroundColor: 'white'
    },
    indicatorStyle: {
      backgroundColor: '#7bbb5e'
    }
  }
});
