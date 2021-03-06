import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, StatusBar, Modal } from 'react-native';

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
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';


import Loading from '../../components/Loading/index';

export function navigationOptions({ navigation }) {
    return {
        header: null
    };
}

export function Home({ navigation }) {

    const [searchParam, setSearchParam] = useState('');
    const [searchedCompanies, setSearchedCompanies] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [actPage, setActPage] = useState(0);
    const [searchText, setSearchText] = useState('');
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        getUser();
    }, [])

    async function searchByCompanyName(page, text) {
        setIsLoading(true);
        console.log(searchText);
        if(searchText.length !== '') {
            await api.get(`/companies-searched/${page}/${text}`).then(res => {
                setTotalPages(res.data.totalPages);
                setActPage(res.data.number);
                setSearchedCompanies(res.data.content);
                setIsLoading(false);
            })
        }   
    }

    async function getUser(){
        await api.get('/users/profile-user').then((res) => {
            setUser(res.data);
            AsyncStorage.setItem('user', JSON.stringify(res.data));
        })
    }

    useEffect(() => {
        if(searchedCompanies.length > 0 ){
            navigation.navigate('SearchedCompanies', {searchedCompanies: searchedCompanies, totalPages, actPage});
        }

    },[searchedCompanies])
    return (
        <ScrollView style={{height: '100%'}}>
            
            <StatusBar backgroundColor="#7bbb5e"/>
            {isLoading ? (<Modal visible={isLoading} transparent={true}><Loading /><StatusBar backgroundColor="white"/></Modal>) : (
                <>
                <HomeHeader />
                <SearchBar onPress={() => searchByCompanyName(0, searchText)} onChangeText={(text) => setSearchText(text)} />
            <View style={{alignItems: 'center', marginTop: 15}}>
                <Section title="Melhores Avaliados" imgpath={paths.star} onPress={()=>navigation.navigate('MostRated')}/>
                <Section title="Pet Shops" imgpath={paths.petshop} onPress={() =>navigation.navigate("PetShops")} />
                <Section title="Próximos a você" imgpath={paths.location} onPress={() => navigation.navigate('Nearby')} />
                <Section title="Favoritos" imgpath={paths.favorites} onPress={() => navigation.navigate('Favorites')} />
            </View>
                </>
            )}
            
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
