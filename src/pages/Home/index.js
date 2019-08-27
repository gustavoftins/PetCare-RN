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

export function navigationOptions({ navigation }) {
    return {
        header: null
    };
}

export function Home({ navigation }) {
    return (
        <ScrollView style={{flexDirection: 'column', flex: 1}}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <HomeHeader />
            <View style={{alignItems: 'center', width: '100%', flex: 1}} >
                <Text style={styles.sectionText}>Serviços melhores avaliados</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("MostRated")} >
                    <Image source={require('../../assets/most-rated.jpg')} style={styles.img} />
                </TouchableOpacity>
                <Section title="Creches" />
                <Section title="Petshops" />
                <Section title="Clinicas"/>
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
    clinica: require('../../assets/clinica.jpeg'),
    creches: require('../../assets/creches.jpg')
}
