import React from 'react';
import { View, Text, AsyncStorage } from 'react-native';

import Box from '../../components/Box/index';
import styles from './styles';
import Title from '../../components/Title/index';

import { logout, TOKEN_KEY } from '../../services/auth';

export default function Settings({ navigation }) {
  const paths = {
    credentials: require('../../assets/credentials.png'),
    addresses: require('../../assets/address.png'),
    exit: require('../../assets/exit.png'),
    heart: require('../../assets/heart.png')
  }

  async function logoff(){
    try{
      await AsyncStorage.multiRemove([TOKEN_KEY, 'user'])
      navigation.navigate('Home')
    }catch(err){

    }
  }
    return (
      <View>
       <Title title="Configurações" />
          <Box icon={paths.credentials} 
            title="Meus Dados"
            description="sdfdkfdksfsdfsdfsdfkdsfdsf"
            onPress={() => navigation.navigate('Profile')}
          />
          <Box icon={paths.addresses}
            title="Endereços"
            description="adjisadjksad"
            onPress={() => navigation.navigate("Addresses")}
          />
          <Box icon={paths.heart}
            title="Favoritos"
            description="saidjiasdjiasdj"
          />
          <Box icon={paths.exit}
            title="Sair"
            description="fdjsifjdskfjsdkfjdskf"
            onPress={logout}
          />
      </View>
    );
}
