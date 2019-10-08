import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage'

import Box from '../../components/Box/index';
import styles from './styles';
import Title from '../../components/Title/index';

import { logout, TOKEN_KEY } from '../../services/auth';


export default function Settings({ navigation }) {
  const paths = {
    credentials: require('../../assets/credentials.png'),
    addresses: require('../../assets/address.png'),
    exit: require('../../assets/exit.png'),
    heart: require('../../assets/heart.png'),
    bill: require('../../assets/bill.png')
  }
  async function logoff() {
    await AsyncStorage.multiRemove([TOKEN_KEY, 'user']).then(() => {
      navigation.navigate('InitialPage');
    })
  }

  return (
    <ScrollView>
      <View>
        <Title title="Configurações" />
        <Box icon={paths.credentials}
          title="Meus Dados"
          description="Visualize seus dados"
          onPress={() => navigation.navigate('Profile')}
        />
        <Box icon={paths.addresses}
          title="Endereços"
          description="Edite e visualize endereços"
          onPress={() => navigation.navigate("Addresses")}
        />

        <Box icon={paths.bill}
            title="Pedidos"
            description="Verifique seus pedidos"
            onPress={() => navigation.navigate("Orders")}
            />
        <Box icon={paths.exit}
          title="Sair"
          description="Finalizar sua sessão"
          onPress={logoff}

        />
      </View>
    </ScrollView>
  );
}
