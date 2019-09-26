import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

import Button from '../../components/Button/button';
import AsyncStorage from '@react-native-community/async-storage';

export default function ProductPage({ navigation }) {

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

    const [user, setUser] = useState({});

    const [cartWithInfos, setCartWithInfos] = useState(INITIAL_STATE);

    const [cart, setCart] = useState(false);

    const [services, setServices] = useState([])


    const product = navigation.getParam('product');
    const company = navigation.getParam('company');

    useEffect(() => {
      getCartFromStore();
      getUserFromStore();
    }, [])

    useEffect(() => {

      console.log(cartWithInfos)
  
      if(cartWithInfos === null){
        setCart(false)
      }else{
        setServices(cartWithInfos.services);
        setCart(true)
      }

    }, [cartWithInfos])
    
    async function getCartFromStore(){
      try{
        await AsyncStorage.getItem('cartInfos').then((value) => {
          setCartWithInfos(JSON.parse(value));
          console.log(JSON.parse(value));
          setServices(JSON.parse(value.services));
        })
      }catch(err){

      }
    }

    async function getUserFromStore(){
      try{
        await AsyncStorage.getItem('user').then((value) => {
          setUser(JSON.parse(user));
          console.log(user);
        })
      }catch(err){

      }
    }

    async function addProductToCart(){
      if(cart){
        if(cartWithInfos.companyName === company.companyName || cartWithInfos.companyName === ''){
          await AsyncStorage.setItem('cartInfos', JSON.stringify({ completeName: user.completeName, cpf: user.cpf, address: user.address, phoneNumber: user.phoneNumber, cnpj: company.cnpj, companyName: company.companyName, services: [...services, ], products: cartWithInfos.products.concat(product) }));
        }else{
          console.log('empresa diferente');
        }
      }else{
        setCartWithInfos({ ...cartWithInfos, completeName: user.completeName, cpf: user.cpf, address: user.address, phoneNumber: user.phoneNumber, cnpj: company.cnpj, companyName: company.companyName, services: [ ...services],  });
        await AsyncStorage.setItem('cartInfos', JSON.stringify({ completeName: user.completeName, cpf: user.cpf, address: user.address, phoneNumber: user.phoneNumber, cnpj: company.cnpj, companyName: company.companyName, services: [...services], products: [product] }));
      }
    }

    useEffect(() => {
      console.log(services);
    }, [services])
  return (
    <View style={styles.container}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.features}>Porte: {product.porte}</Text>
        <Text style={styles.features}>Quantidade em estoque: {product.quantityStore}</Text>
        <Text style={styles.features}>Indicação: {product.indicationPet}</Text>
        <Text style={styles.features}>Transgênico: {product.transgenic}</Text>
        <Text style={styles.price}>R${product.price}</Text>
        <Button text="Adicionar ao carrinho" onPress={addProductToCart} />
    </View>
  );
}
