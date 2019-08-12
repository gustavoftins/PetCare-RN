
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Signup from './pages/Signup';
import Opening from './pages/Opening';

const AppStackNavigator = createStackNavigator({
    Home: Opening,
    Signup: Signup
});

class App extends React.Component {
  render(){
    return (
      <AppStackNavigator />
    );
  }
}


export default createAppContainer(AppStackNavigator);

