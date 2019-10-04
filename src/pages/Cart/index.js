import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, FlatList, Modal, StyleSheet } from 'react-native';
import CartProduct from '../../components/CartProducts/index';
import Title from '../../components/Title/index';

import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';

import Button from '../../components/Button/button';

import api from '../../services/api'

export default function Cart({ navigation }) {

  const CART_INITIAL_STATE = {
    address: {
      id: '',
      placeNumber: '',
      complement: '',
      street: '',
      neighborhood: '',
      cep: '',
      city: '',
      state: ''
    },
    companyAddress: {
      cep: '',
      city: '',
      complement: '',
      id: '',
      neighborhood: '',
      placeNumber: '',
      state: '',
      street: ''
    },
    cnpj: '',
    companyName: '',
    completeName: '',
    cpf: '',
    email: '',
    phoneNumber: '',
    products: [],
    services: []
  }

  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [cart, setCart] = useState(CART_INITIAL_STATE);
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

          if(teste.services.length !== null || teste.services.length !== undefined || teste.services.length > 0){
          for(let i = 0; i < teste.services.length; i++){
            cartToAPI.total += teste.services[i].price;
            setTotal(cartToAPI.total);
            cartToAPI.subTotal = cartToAPI.total;
            setServicesIdsCart(servicesIdsCart.concat(teste.services[i].id));
            cartToAPI.servicesIdsCart = servicesIdsCart.concat(teste.services[i].id);
          }
        }
          if(teste.products.length !== null || teste.product.length !== undefined || teste.products.length > 0){
          for(let i = 0; i < teste.products.length; i++){
            cartToAPI.total += teste.products[i].price;
            setTotal(cartToAPI.total)
            cartToAPI.subTotal = cartToAPI.total;
            setProductsIdsCart(productsIdsCart.concat(teste.products[i].id));
            cartToAPI.productsIdsCart = productsIdsCart.concat(teste.products[i].id);
          }
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
    setRealCart({...realCart, servicesIdsCart: realCart.servicesIdsCart.filter(serviceId => serviceId !== service.id)});

    if(cart.services.length === 0 && cart.products.length === 0){
      setCart(CART_INITIAL_STATE);
      setRealCart(CART_INITIAL_STATE);
    }
  }

  async function removeProductFromCart(product) {
    setCart({ ...cart, products: cart.products.filter(itemFromList => itemFromList !== product) })
    setRealCart({...realCart, productsIdsCart: realCart.productsIdsCart.filter(productId => productId !== product.id) })

    if(cart.services.length === 0 && cart.products.length === 0){
      setCart(CART_INITIAL_STATE);
      setRealCart(CART_INITIAL_STATE);
    }

  }

  function cleanCart() {
    setCart(CART_INITIAL_STATE);
    setRealCart(CART_INITIAL_STATE);
  }

  async function reloadCart() {
    await AsyncStorage.setItem('cartInfos', JSON.stringify(cart));
  }

  async function handleFinish(){
    try{
      await api.post(`/finishing-order`, JSON.stringify(realCart));
      setRealCart(CART_INITIAL_STATE);
      setCart(CART_INITIAL_STATE);
      setModalVisible(false);
      navigation.navigate('Home');
    }catch(err){

    }
  }

  return (
    <ScrollView style={{ alignContent: 'center'}}>
      <Text style={styles.pageTitle}>Carrinho</Text>

        <Modal visible={modalVisible} transparent={true}>
        <View style={modalStyles.modalContainer}>
          <Text style={modalStyles.modalTitle}>Método de pagamento</Text>
          <Text>Total: R${total}</Text>
          <View style={modalStyles.paymentMethodContainer}>
            <TouchableOpacity onPress={() => setRealCart({ ...realCart, paymentMethod: 'MONEY'})}>
              <Text>Dinheiro</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setRealCart({ ...realCart, paymentMethod: 'DEBIT_CARD'})}> 
              <Text>Cartão de Débito</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setRealCart({...realCart, paymentMethod: 'CREDIT_CARD'})}>
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
      {cart.services.length === 0 && cart.products.length === 0 ? (<View style={styles.messageContainer}><Text style={styles.noProduct}>Não há produtos em seu carrinho</Text></View>) : (<TouchableOpacity onPress={cleanCart}><Text style={styles.cleanCart}>Limpar Carrinho</Text></TouchableOpacity>)}
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