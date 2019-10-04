import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, FlatList, Modal, StyleSheet } from 'react-native';
import CartProduct from '../../components/CartProducts/index';
import Title from '../../components/Title/index';

import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';

import Button from '../../components/Button/button';

import api from '../../services/api'

export default function Cart() {

  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [cart, setCart] = useState({});
  const [servicesIdsCart, setServicesIdsCart] = useState([])
  const [productsIdsCart, setProductsIdsCart] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [realCart, setRealCart] = useState({});

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
            paymentMethod: paymentMethod,
            servicesIdsCart: [],
            productsIdsCart: [],
            
          }


          for(let i = 0; i < teste.services.length; i++){
            cartToAPI.total += teste.services[i].price;
            setTotal(cartToAPI.total);
            cartToAPI.subTotal = cartToAPI.total;
            setServicesIdsCart(servicesIdsCart.concat(teste.services[i].id));
            cartToAPI.servicesIdsCart = servicesIdsCart.concat(teste.services[i].id);
            
          }

          for(let i = 0; i < teste.products.length; i++){
            cartToAPI.total += teste.products[i].price;
            setTotal(cartToAPI.total)
            cartToAPI.subTotal = cartToAPI.total;
            setProductsIdsCart(productsIdsCart.concat(teste.products[i].id));
            cartToAPI.productsIdsCart = productsIdsCart.concat(teste.products[i].id);
          }

          console.log(cartToAPI);

          setRealCart(cartToAPI);
        })
    } catch (err) {
      console.log(err)
    }

  }

  useEffect(() =>{
    console.log(realCart)
  }, [realCart])

  useEffect(() => {
    console.log(subTotal)
  }, [subTotal])
  async function removeServiceFromCart(service) {
    setCart({ ...cart, services: cart.services.filter(itemFromList => itemFromList !== service) })
  }

  async function removeProductFromCart(product) {
    setCart({ ...cart, products: cart.products.filter(itemFromList => itemFromList !== product) })
  }

  async function cleanCart() {
    await AsyncStorage.removeItem('cartInfos');
  }

  async function reloadCart() {
    await AsyncStorage.setItem('cartInfos', JSON.stringify(cart));
  }

  async function handleFinish(){
    await api.post(`/finishing-order`, JSON.stringify(realCart));
  }

  return (
    <ScrollView style={{ alignContent: 'center'}}>
      <Text style={styles.pageTitle}>Carrinho</Text>
      <TouchableOpacity style={styles.btn} onPress={cleanCart}>
        <Text style={styles.cleanCart}>Limpar Carrinho</Text>
      </TouchableOpacity>
        <Modal visible={modalVisible} transparent={true}>
        <View style={modalStyles.modalContainer}>
          <Text style={modalStyles.modalTitle}>Método de pagamento</Text>
          <Text>Total: R${total}</Text>
          <View style={modalStyles.paymentMethodContainer}>
            <TouchableOpacity onPress={() => setRealCart({ ...realCart, paymentMethod: 'MONEY'})}>
              <Text>Dinheiro</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setPaymentMethod('DEBIT_CARD')}> 
              <Text>Cartão de Débito</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setPaymentMethod('CREDIT_CARD')}>
              <Text>Cartão de Crédito</Text>
            </TouchableOpacity>
          </View>
          <View style={modalStyles.paymentMethodContainer}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text>Fechar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text onPress={handleFinish}>Finalizar Compra</Text>
          </TouchableOpacity>
          </View>
        </View>
        </Modal>
      {cart.services === undefined || cart.services === undefined ? (<View style={styles.messageContainer}><Text style={styles.noProduct}>Não há produtos em seu carrinho</Text></View>) : (<Text></Text>)}
      {cart.services !== undefined && cart.services.length !== 0 ? (<Text style={styles.subTitle}>Serviços</Text>) : (<Text></Text>)}
      {cart.services !== undefined && cart.services.length !== 0 ? cart.services.map(service =>  (<CartProduct key={service.id} productName={service.name} price={service.price} onPress={() => removeServiceFromCart(service)} />)) : console.log('sdjnsdjsd')}
      {cart.products !== undefined && cart.products.length !== 0 ? (<Text style={styles.subTitle}>Produtos</Text>) : (<Text></Text>)}
      {cart.products !== undefined && cart.products.length !== 0 ? cart.products.map(product =>  (<CartProduct key={product.id} productName={product.name} price={product.price} onPress={() => removeProductFromCart(product) } />)) : console.log('sdjnsdjsd')}
      <View style={{alignItems: 'center'}}>
        {cart.products !== undefined && (cart.products.length !== 0 || cart.services.length !== 0) ? (<Button text="Finalizar Compra" onPress={() => setModalVisible(true)} />) : (<Text />)}
      </View>
    </ScrollView>
  );
}



const modalStyles = StyleSheet.create({
  modalContainer: {
    height: 150, 
    backgroundColor: '#f2f2f2',
    alignItems: 'center'
  },
  modalTitle: {
    fontSize: 18,
    color: '#7bbb5e'
  },
  closeModal: {

  },
  paymentMethodContainer: {
    flexDirection: 'row'
  }
})