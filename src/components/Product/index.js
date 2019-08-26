import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
// import { Container } from './styles';

export default function Product() {
  return (
    <View style={styles.container}>
        <View style={styles.main}>
            <Text style={styles.name}>Ração Malaca</Text>
            <Text style={styles.description}>Ddjodsfkjosdfkdsofkdsofkdsofkdsofkodsffkodk</Text>
            <Text style={styles.price}>R$50.00</Text>
        </View>
        <View style={styles.imgcontainer}>
            <Image style={styles.img} source={{uri: 'https://araujo.vteximg.com.br/arquivos/ids/3852959-1000-1000/7896029075685_1.jpg?v=636640497033700000'}} />
        </View>
    </View>
  );
}
