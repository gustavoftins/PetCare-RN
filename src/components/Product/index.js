import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
// import { Container } from './styles';

export default function Product({ name, price, description }) {
  return (
      <View style={styles.container}>
          <View style={styles.main}>
              <Text style={styles.name}>{name}</Text>
              <Text numberOfLines={2} style={styles.description}>{description}</Text>
              <Text style={styles.price}>R${price}</Text>
          </View>
          <View style={styles.imgcontainer}>
              <Image style={styles.img} source={{uri: 'https://araujo.vteximg.com.br/arquivos/ids/3852959-1000-1000/7896029075685_1.jpg?v=636640497033700000'}} />
          </View>
      </View>
  );
}