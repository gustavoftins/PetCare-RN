import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';

import Cart from '../Cart/index';
import Settings from '../Settings/index';

import Icon from 'react-native-vector-icons/FontAwesome';

export class Home extends React.Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <View>
                <Text>Aqui é a Home</Text>
            </View>
        );
    }
}

export default createBottomTabNavigator({
    Home: { 
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Início',
            tabBarIcon:({ tintcolor }) =>(
               <Icon name="home" color={ tintcolor } size={24} /> 
            )
        }
     },
    Cart: { 
        screen: Cart,
        navigationOptions: {
            tabBarLabel: "Pedidos",
            tabBarIcon:({ tintcolor }) =>(
                <Icon name="shopping-cart" color={ tintcolor } size={24} />
            )
        } 
    },
    Settings: { screen:
         Settings,
         navigationOptions: {
             tabBarLabel: "Configurações",
             tabBarIcon:({ tintcolor }) =>(
                 <Icon name="settings" color={tintcolor} size={24} />
             )
         }
         }
});