import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/Button/button';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
// import { Container } from './styles';

export default function ServicePage({ navigation }) {

  const INITIAL_STATE = {
    completeName: '',
    cpf: '',
    address: {},
    phoneNumber: '',
    cnpj: '',
    companyName: '',
    services: [],
    products: []
  }

  const service = navigation.getParam('service');
  const company = navigation.getParam('company');

  const [user, setUser] = useState({});

  const [services, setServices] = useState([]);

  const [cartWithInfos, setCartWithInfos] = useState(INITIAL_STATE);

  const [cart, setCart] = useState(false);

  useEffect(() => {
    getCartFromStore();
    getUser();
  }, [])

  useEffect(() => {

    console.log(cartWithInfos)

    if(cartWithInfos === null){
      setCart(false)
    }else{
      setCart(true)
    }
  }, [cartWithInfos])

  async function getUser(){
    await AsyncStorage.getItem('user').then((value) => {
      setUser(JSON.parse(value));
    })
  }

  async function getCartFromStore() {
    try {
      await AsyncStorage.getItem('cartInfos').then((value) => {
        setCartWithInfos(JSON.parse(value));
        console.log(JSON.parse(value));
      })
    } catch (err) {
      console.log(err);
    }
  }

  async function addServiceToCart(){
    if(cart){
      if(cartWithInfos.companyName === company.companyName || cartWithInfos.companyName === ''){
        await AsyncStorage.setItem('cartInfos', JSON.stringify({ completeName: user.completeName, cpf: user.cpf, address: user.address, phoneNumber: user.phoneNumber, cnpj: company.cnpj, companyName: company.companyName, services: cartWithInfos.services.concat(service) }));
      }else{
        console.log('empresa diferente');
      }
    }else{
      setCartWithInfos({ ...cartWithInfos, completeName: user.completeName, cpf: user.cpf, address: user.address, phoneNumber: user.phoneNumber, cnpj: company.cnpj, companyName: company.companyName, services: [ ...services, service ]  });
      await AsyncStorage.setItem('cartInfos', JSON.stringify({ completeName: user.completeName, cpf: user.cpf, address: user.address, phoneNumber: user.phoneNumber, cnpj: company.cnpj, companyName: company.companyName, services: [service] }));
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.companyName}>{company.companyName}</Text>
      <Text style={styles.serviceName}>{service.name}</Text>
      <Text style={styles.description}>{service.description}</Text>
      <Text style={styles.price}>R${service.price}</Text>
      <Button text='Adicionar ao Carrinho' onPress={addServiceToCart} />
    </View>
  );
}
