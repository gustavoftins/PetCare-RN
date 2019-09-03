import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import AddressBox from '../../components/AddressBox/index';
import styles from './styles';
import NewInput from '../../components/Input/input';
import NewButton from '../../components/Button/button';
// import { Container } from './styles';

export default function Addresses() {
  return (
    <ScrollView style={{minHeight: '100%'}}>
        <View style={styles.container}>
            <Text style={styles.title}>Endereços</Text>
            <AddressBox />
            <Text style={{fontSize: 24, color: '#7bbb5e'}}>Alterar Endereço</Text>
            <NewInput placeholder="Rua" />
            <NewInput placeholder="Número" />
            <NewInput placeholder="Bairro" />
            <NewInput placeholder="Complemento" />
            <NewInput placeholder="CEP" />
            <NewInput placeholder="Cidade" />
            <NewInput placeholder="Estado" />
            <NewButton text="Alterar" />
        </View>
    </ScrollView>
  );
}
