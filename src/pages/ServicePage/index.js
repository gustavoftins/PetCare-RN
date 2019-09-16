import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/Button/button';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
// import { Container } from './styles';

export default function ServicePage({ navigation }) {

    const INITIAL_STATE = {
      completeName:'',
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

    useEffect(() =>{
      setServices(services.concat(service));
      getUser();
    },[])

    useEffect(() => {
      console.log(cartWithInfos);
    },[cartWithInfos])

    async function addServiceToCart(){

      setCartWithInfos({ ...cartWithInfos, completeName: user.completeName, cpf: user.cpf, address: { ...user.address }, phoneNumber: user.phoneNumber,
      cnpj: company.cnpj, companyName: company.companyName, services: [...services], products: [] });

      try{
      await AsyncStorage.setItem('cartInfos', JSON.stringify(cartWithInfos));
      }catch(err){
        
      }
    }

    async function getUser(){
      try{
        await AsyncStorage.getItem('user').then((value) => {
          setUser(JSON.parse(value));
        })
      }catch(err){
        console.log(err);
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
