import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, FlatList } from 'react-native';
import CartProduct from '../../components/CartProducts/index';
import Title from '../../components/Title/index';

import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';

import Button from '../../components/Button/button';

export default function Cart() {
  const INITIAL_STATE = {
    products: [],
    services: []
  }

  const [total, setTotal] = useState(0);

  const [cart, setCart] = useState({});

  useEffect(() => {
    getCartFromStorage();
  }, [])


  useEffect(() => {
    console.log(cart);
    reloadCart();


  }, [cart])

  async function getCartFromStorage() {
    try {
      await AsyncStorage.getItem('cartInfos').
        then((cartFromLocal) => {
          setCart(JSON.parse(cartFromLocal));

          let teste = JSON.parse(cartFromLocal);
          const cartToAPI = {
            nameCompany: teste.companyName,
            cnpj: teste.cnpj,
            userCompleteName: teste.userCompleteName,
            companyOrderAddress: {
                street: teste.companyAddress.street,
                placeNumber: teste.companyAddress.placeNumber,
                city: teste.companyAddress.city,
                complement: teste.companyAddress.complement,
                neighborhood: teste.companyAddress.neighborhood,
                state: teste.companyAddress.state,
                cep: teste.companyAddress.cep,
            },
            emailOrderUser: teste.email,
            total: 0,
            subTotal: 0,
            paymentMethod: '',
            servicesIdsCart: [],
            productsIdsCart: [],
            
          }
          
        })
    } catch (err) {

    }

  }

  async function removeServiceFromCart(service) {
    setCart({ ...cart, services: cart.services.filter(itemFromList => itemFromList !== service) })
  }

  async function removeProductFromCart(product) {
    setCart({ ...cart, products: cart.products.filter(itemFromList => itemFromList !== product) })
  }

  async function cleanCart() {
    await AsyncStorage.removeItem('cartInfos');
  }

  renderItem = ({ item }) => {
    <CartProduct
      productName={item.name}
      price={item.price}
    />
    console.log(item.price, item.name);
  }

  async function reloadCart() {
    await AsyncStorage.setItem('cartInfos', JSON.stringify(cart));
  }

  return (
    <ScrollView>
      <Text style={styles.pageTitle}>Carrinho</Text>
      <TouchableOpacity style={styles.btn} onPress={cleanCart}>
        <Text style={styles.cleanCart}>Limpar Carrinho</Text>
      </TouchableOpacity>
      {cart.services === undefined || cart.services === undefined ? (<View style={styles.messageContainer}><Text style={styles.noProduct}>Não há produtos em seu carrinho</Text></View>) : (<Text></Text>)}
      {cart.services !== undefined && cart.services.length !== 0 ? (<Text style={styles.subTitle}>Serviços</Text>) : (<Text></Text>)}
      {cart.services !== undefined && cart.services.length !== 0 ? cart.services.map(service => <CartProduct key={service.id} productName={service.name} price={service.price} onPress={() => removeServiceFromCart(service)} />) : console.log('sdjnsdjsd')}
      {cart.products !== undefined && cart.products.length !== 0 ? (<Text style={styles.subTitle}>Produtos</Text>) : (<Text></Text>)}
      {cart.products !== undefined && cart.products.length !== 0 ? cart.products.map(product => <CartProduct key={product.id} productName={product.name} price={product.price} onPress={() => removeProductFromCart(product) } />) : console.log('sdjnsdjsd')}
      <View style={{alignItems: 'center'}}>
        {cart.products !== undefined && (cart.products.length !== 0 || cart.services.length !== 0) ? (<Button text="Finalizar Compra" />) : (<Text />)}
      </View>
    </ScrollView>
  );
}



