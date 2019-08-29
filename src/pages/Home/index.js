import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';

import Cart from '../Cart/index';
import Settings from '../Settings/index';
import styles from './styles';
// import Icon from 'react-native-vector-icons/FontAwesome';
import HomeHeader from '../../components/HomeHeader/index';
import Section from '../../components/Section/index';
import NewButton from '../../components/Button/button';
import SearchBar from '../../components/SearchBar/index';

export function navigationOptions({ navigation }) {
    return {
        header: null
    };
}

export function Home({ navigation }) {
    return (
        <ScrollView style={{height: '100%'}}>
            <HomeHeader />
            <StatusBar backgroundColor="#7bbb5e"/>
            <SearchBar />
            <View style={{alignItems: 'center', marginTop: 15}}>
                <Section title="Melhores Avaliados" imgpath={paths.star}/>
                <Section title="Pet Shops" imgpath={paths.petshop}/>
                <Section title="Próximos a você" imgpath={paths.location}/>
            </View>
        </ScrollView>
    );
}

export default createBottomTabNavigator({
    Home: { 
        screen: Home,
        navigationOptions: {
            tabBarLabel: null,
            tabBarIcon:() =>(
               <Image source={require('../../assets/home.png')} style={{height: 28, width: 28}} />
            ),
            tabBarOptions: {
                activeTintColor: '#7bbb5e'
            }
        }
     },
    Cart: { 
        screen: Cart,
        navigationOptions: {
            tabBarLabel: null,
            tabBarIcon:({ tintcolor }) =>(
                <Image source={require('../../assets/Cart-512.png')} style={{height: 28, width: 28}} />
            ),
            tabBarOptions: {
                activeTintColor: '#7bbb5e'
            }
        } 
    },
    Settings: { screen:
         Settings,
         navigationOptions: {
             tabBarLabel: null,
             tabBarIcon:({ tintcolor }) =>(
                <Image source={require('../../assets/settings_icon.png')} style={{height: 24, width: 24}} />
             ),
             tabBarOptions: {
                 activeTintColor:'#7bbb5e'
             }
        }
    }
});

const paths = {
    petshop: require('../../assets/petshop.jpg'),
    star: require('../../assets/startest.jpg'),
    location: require('../../assets/location.png')
}
