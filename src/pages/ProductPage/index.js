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
      products: [],
    }

    const [cartToAPI, setCartToAPI ] = useState({})

    const [user, setUser] = useState({});

    const [cartWithInfos, setCartWithInfos] = useState(INITIAL_STATE);

    const [cart, setCart] = useState(false);

    const [services, setServices] = useState([]);
    const [oldProducts, setOldProducts] = useState([])

    const [productsIdsCart, setProductsIdsCart] = useState([]);

    const[servicesIdsCart, setServicesIdsCart] = useState([]);

    const product = navigation.getParam('product');
    const company = navigation.getParam('company');

    const address = company.address;

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
        setCart(true);
        setOldProducts(cartWithInfos.products);
      }

    }, [cartWithInfos])
    
    async function getCartFromStore(){
      try{
        await AsyncStorage.getItem('cartInfos').then((value) => {
          setCartWithInfos(JSON.parse(value));
          setServices(JSON.parse(value.services));
        })

        await AsyncStorage.getItem('cartToAPI').then((value) => {
          setCartToAPI(JSON.parse(value)); 
          console.log(JSON.parse(value));
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
          await AsyncStorage.setItem('cartInfos', JSON.stringify({ completeName: user.completeName, cpf: user.cpf, address: user.address, phoneNumber: user.phoneNumber, cnpj: company.cnpj, companyName: company.companyName, services: [...services, ], products: cartWithInfos.products.concat(product), companyAddress: company.address, email: user.email }));
          // await AsyncStorage.setItem('cartToAPI', JSON.stringify({ nameCompany: company.companyName, cnpj: company.cnpj, userCompleteName: user.completeName,  companyOrderAddress: address, emailOrderUser: user.email, total:  cartToAPI.total + product.price, subTotal: cartToAPI.total + product.price, payMentMethod: '', servicesIdsCart: servicesIdsCart, productsIdsCart: [...product.id]  }))
          // console.log({ nameCompany: company.companyName, cnpj: company.cnpj, userCompleteName: user.completeName,  companyOrderAddress: address, emailOrderUser: user.email, total: cartToAPI.total + product.price, subTotal: cartToAPI.total + product.price, payMentMethod: '', servicesIdsCart: [], productsIdsCart: []  })
          console.log('teste');
        }else{
          console.log('empresa diferente');
        }
      }else{
        setCartWithInfos({ ...cartWithInfos, completeName: user.completeName, cpf: user.cpf, address: user.address, phoneNumber: user.phoneNumber, cnpj: company.cnpj, companyName: company.companyName, services: [ ...services],  });
        await AsyncStorage.setItem('cartInfos', JSON.stringify({ completeName: user.completeName, cpf: user.cpf, address: user.address, phoneNumber: user.phoneNumber, cnpj: company.cnpj, companyName: company.companyName, services: [...services], products: [product], companyAddress: company.address, email: user.email }));
        // await AsyncStorage.setItem('cartToAPI', JSON.stringify({ nameCompany: company.companyName, cnpj: company.cnpj, userCompleteName: user.completeName,  companyOrderAddress: address, emailOrderUser: user.email, total:  product.price, subTotal: product.price, payMentMethod: '', servicesIdsCart: servicesIdsCart, productsIdsCart: [...product.id]  }))
      }
    }

    useEffect(() => {
      console.log(services);
    }, [services])

    useEffect(() => {
      console.log(servicesIdsCart);
    }, [servicesIdsCart])
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
