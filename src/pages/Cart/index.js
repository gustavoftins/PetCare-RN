import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, FlatList } from 'react-native';
import CartProduct from '../../components/CartProducts/index';
import Title from '../../components/Title/index';

import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';

export default function Cart() {

  const [cart, setCart] = useState({});

  useEffect(() => {
    getCartFromStorage();
  }, [])


  useEffect(() => {
    console.log(cart);
  }, [cart])

  async function getCartFromStorage() {
    try {
      await AsyncStorage.getItem('cartInfos').
      then((cartFromLocal) => {
        setCart(JSON.parse(cartFromLocal));
      })
    } catch (err) {

    }
  }

  async function removeServiceFromCart(service){
    setCart({ ...cart, services: cart.service.filter(itemFromList => itemFromList !== service )})
  }

  async function cleanCart(){
    setCart([]);
    await AsyncStorage.removeItem('cartInfos');
  }

  renderItem = ({ item }) => {
    <CartProduct
      productName={item.name}
      price={item.price}
    />
    console.log(item.price, item.name);
  }

  return (
    <ScrollView>
      {/* <Title title="Carrinho" />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.cleanCart}>Limpar Carrinho</Text>
      </TouchableOpacity> */}
      <View>
        <Title title="Carrinho" />
        <TouchableOpacity style={styles.btn} onPress={cleanCart}>
          <Text style={styles.cleanCart}>Limpar Carrinho</Text>
      </TouchableOpacity>
      </View>
      <Text>Serviços</Text>
      { cart.services !== undefined ? cart.services.map(service => <CartProduct key={service.id} productName={service.name} price={service.price} onPress={() => removeServiceFromCart(service)} />) : console.log('sdjnsdjsd')}
      <Text>Produtos</Text>
      { cart.products !== undefined ? cart.products.map(product => <CartProduct key={product.id} productName={product.name} price={product.price} />) : console.log('sdjnsdjsd')}
    </ScrollView>
  );
}



