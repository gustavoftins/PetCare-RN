import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Cart from '../Cart/index';
import Settings from '../Settings/index';
import styles from './styles';
// import Icon from 'react-native-vector-icons/FontAwesome';
import HomeHeader from '../../components/HomeHeader/index';
import Section from '../../components/Section/index';
import NewButton from '../../components/Button/button';
import SearchBar from '../../components/SearchBar/index';
import { isAuthenticated } from '../../services/auth';


export function navigationOptions({ navigation }) {
    return {
        header: null
    };
}

export function Home({ navigation }) {

    useEffect(() =>{
        if(!isAuthenticated){
            navigation.navigate("Home")
        }
    },[navigation.navigate])

    return (
        <ScrollView style={{height: '100%'}}>
            <HomeHeader />
            <StatusBar backgroundColor="#7bbb5e"/>
            <SearchBar />
            <View style={{alignItems: 'center', marginTop: 15}}>
                <Section title="Melhores Avaliados" imgpath={paths.star} onPress={()=>navigation.navigate('MostRated')}/>
                <Section title="Pet Shops" imgpath={paths.petshop} onPress={() =>navigation.navigate("PetShops")} />
                <Section title="Próximos a você" imgpath={paths.location}/>
                <Section title="Favoritos" imgpath={paths.favorites}/>
            </View>
        </ScrollView>
    );
}

const bottomNavigator = createBottomTabNavigator({
    Início: { 
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
    Carrinho: { 
        screen: Cart,
        navigationOptions: {
            tabBarLabel: null,
            tabBarIcon:({ tintcolor }) =>(
                <Image source={require('../../assets/Cart-512.png')} style={{height: 28, width: 28}} />
            ),
            tabBarOptions: {
                activeTintColor: '#7bbb5e'
            },
        } 
    },
    Configurações: { screen:
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

const App = createAppContainer(bottomNavigator);

export default App;

const paths = {
    petshop: require('../../assets/petshop.jpg'),
    star: require('../../assets/star.png'),
    location: require('../../assets/location.png'),
    favorites: require('../../assets/favorites.jpg')
}
