import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import api from '../../services/api';
import { TOKEN_KEY } from '../../services/auth';
import AsyncStorage from '@react-native-community/async-storage';


export default function Profile() {

  const INITIAL_STATE = {
    id: '',
    cpf: '',
    completeName: '',
    email: '',
    phoneNumber: '',
    address:{
      street: '',
      placeNumber: '',
      complement: '',
      neighborhood: '',
      cep: '',
      city: '',
      state: '',
    },
    favorites: [],
  }

  const[user, setUser] = useState();

  async function getProfile() {

    let token = await AsyncStorage.getItem(TOKEN_KEY);
    await api.get('/users/profile-user', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    }).then(response => {
      console.log(response.data);
      setUser({ ...response.data });
    }).catch(err =>{
      console.log(err);
    })
  }

  useEffect(() => {
    getProfile();
    console.log(user);
  },[])

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={require('../../assets/avatar.png')} />
      </View>
      <Text style={styles.label}>Nome</Text>
      <View style={styles.contentArea}>
        <Text style={styles.content}>{user}</Text>
      </View>
      <Text style={styles.label}>E-mail</Text>
      <View style={styles.contentArea}>
        <Text style={styles.content}>joaozinho23@gmail.com</Text>
      </View>
      <Text style={styles.label}>CPF</Text>
      <View style={styles.contentArea}>
        <Text style={styles.content}>105.597.339-76</Text>
      </View>
    </View>
  );
}
