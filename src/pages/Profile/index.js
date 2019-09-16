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

  const [user, setUser] = useState(INITIAL_STATE);

  async function storingUser(){
    try{
      await AsyncStorage.setItem('user', JSON.stringify(user));
    }catch(err){
      console.log(err);
    }
  }

  async function teste(){
    await AsyncStorage.getItem('user').then((value) =>{
      console.log(JSON.parse((value)));
    })
  }

  async function getProfile() {

    let token = await AsyncStorage.getItem(TOKEN_KEY);
    await api.get('/users/profile-user', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    }).then(response => {
      const { id, cpf, completeName, email, phoneNumber, address, favorites} = response.data;
      setUser({ ...user,id: id, cpf: cpf, completeName: completeName, email: email, phoneNumber: phoneNumber, address: { ...address }, favorites: [...favorites] });
    }).catch(err =>{
      console.log(err);
    })
  }

  useEffect(() => {
    getProfile();
  },[])

  useEffect(() => {
    console.log(user);
    storingUser();
    teste();
  },[user])

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={require('../../assets/avatar.png')} />
      </View>
      <Text style={styles.label}>Nome</Text>
      <View style={styles.contentArea}>
        <Text style={styles.content}>{user.completeName}</Text>
      </View>
      <Text style={styles.label}>E-mail</Text>
      <View style={styles.contentArea}>
        <Text style={styles.content}>{user.email}</Text>
      </View>
      <Text style={styles.label}>CPF</Text>
      <View style={styles.contentArea}>
        <Text style={styles.content}>{user.cpf}</Text>
      </View>
    </View>
  );
}