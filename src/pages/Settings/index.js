import React from 'react';
import { View, Text } from 'react-native';

import Box from '../../components/Box/index';
import styles from './styles';

export default function Settings() {
    return (
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.pageTitle}>Configurações</Text>
        </View>
          <Box />
          <Box />
          <Box />
          <Box />
      </View>
    );
}
