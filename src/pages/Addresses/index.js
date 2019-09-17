import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import AddressBox from '../../components/AddressBox/index';
import styles from './styles';
import NewInput from '../../components/Input/input';
import NewButton from '../../components/Button/button';
// import { Container } from './styles';

import { TOKEN_KEY } from '../../services/auth';

import api from '../../services/api';

import AsyncStorage from '@react-native-community/async-storage';

export default function Addresses() {

  const INITIAL_STATE = {
    address: {
      street: '',
      placeNumber: '',
      complement: '',
      neighborhood: '',
      cep: '',
      city: '',
      state: ''
    }
  }

  const [user, setUser] = useState({});

  const [message, setMessage] = useState('');

  const [address, setAddress] = useState(INITIAL_STATE);

  useEffect(() => {
    getUser();
  }, [])

  useEffect(() => {
    console.log(user);

  }, [user])
  async function getUser() {

    try {
      await AsyncStorage.getItem('user').then((value) => {
        setUser(JSON.parse(value));

        if (JSON.parse(value).address.street) {
          console.log('foi');
          setMessage('')
        } else {
          console.log('não');
          setMessage('Você não tem nenhum endereço, por favor cadastre um');
        }
      })

    } catch (err) {

    }
  }

  async function handleSubmit() {
    const { street, placeNumber, complement, neighborhood, cep, city } = address;

    var token;
    await AsyncStorage.getItem(TOKEN_KEY).then((value) => {
      console.log(value);
      token = value;
    })

    console.log(address);
    await api.post('/address/edit', JSON.stringify(address), {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
  }
  return (
    <ScrollView style={{ minHeight: '100%' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Endereços</Text>
        <AddressBox />
        <Text>{message}</Text>
        <Text style={{ fontSize: 24, color: '#7bbb5e' }}>Alterar Endereço</Text>
        <NewInput onChangeText={(text) => setAddress({ ...address, address: { ...address.address, street: text } })} placeholder="Rua" />
        <NewInput onChangeText={(text) => setAddress({ ...address, address: { ...address.address, placeNumber: text} })} placeholder="Número" />
        <NewInput onChangeText={(text) => setAddress({ ...address, address: { ...address.address, neighborhood: text } })} placeholder="Bairro" />
        <NewInput onChangeText={(text) => setAddress({ ...address, address: { ...address.address, complement: text } })} placeholder="Complemento" />
        <NewInput onChangeText={(text) => setAddress({ ...address, address: { ...address.address, cep: text } })} placeholder="CEP" />
        <NewInput onChangeText={(text) => setAddress({ ...address, address: { ...address.address, city: text } })} placeholder="Cidade" />
        <NewInput onChangeText={(text) => setAddress({ ...address, address: { ...address.address, state: text } })} placeholder="Estado" />
        <NewButton text="Alterar" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
}
