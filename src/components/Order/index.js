import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

import styles from './styles';

export default function Order({ order }) {
  return (
    <View style={styles.container}>
        <View style={styles.display}>
            <Text style={styles.companyName}>{order.nameCompany}</Text>
            <Text>{order.createdOrderAt}</Text>
            <Text style={styles.total}>R${order.total}</Text>
        </View>
    </View>
  );
}
