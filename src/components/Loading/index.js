import React from 'react';
import { View, Image } from 'react-native';

// import { Container } from './styles';

export default function Loading() {
  return (
    <View style={{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <Image  source={require('../../assets/loading.gif')} style={{width: 120, height: 120}} />
    </View>
  );
}
