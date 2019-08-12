
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Signup from './pages/Signup';
import Opening from './pages/Opening'

export default class App extends React.Component {
  render(){
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Home: {
    screen: Opening
  }
});

