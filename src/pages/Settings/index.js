import React from 'react';
import { View, Text } from 'react-native';

import Box from '../../components/Box/index';
import styles from './styles';
import Title from '../../components/Title/index';

export default function Settings() {
  const paths = {
    credentials: require('../../assets/credentials.png'),
    addresses: require('../../assets/address.png'),
    exit: require('../../assets/exit.png'),
    heart: require('../../assets/heart.png')
  }
    return (
      <View>
       <Title title="Configurações" />
          <Box icon={paths.credentials} 
            title="Meus Dados"
            description="sdfdkfdksfsdfsdfsdfkdsfdsf"
          />
          <Box icon={paths.addresses}
            title="Endereços"
            description="adjisadjksad"
          />
          <Box icon={paths.heart}
            title="Favoritos"
            description="saidjiasdjiasdj"
          />
          <Box icon={paths.exit}
            title="Sair"
            description="fdjsifjdskfjsdkfjdskf"
          />
      </View>
    );
}
