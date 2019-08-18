import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';

import Cart from '../Cart/index';
import Settings from '../Settings/index';

// import Icon from 'react-native-vector-icons/FontAwesome';
import HomeHeader from '../../components/HomeHeader/index';
import Section from '../../components/Section/index';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

export class Home extends React.Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <ScrollView style={{flexDirection: 'column', flex: 1}}>
                <HomeHeader />
                <View>
                    <Text style={styles.sectionText}>Serviços melhores avaliados</Text>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Signin")} >
                        <Image source={require('../../assets/most-rated.jpg')} style={styles.img} />
                    </TouchableOpacity>
                    <Text style={styles.subtitle}> Petshops</Text>
                    <Section imgpath={paths.petshop} />
                    <Text style={styles.subtitle}>Clínicas Veterinárias</Text>
                    <Section imgpath={paths.clinica} />
                    <Text styles={styles.subtitle}>Creches</Text>
                    <Section imgpath={paths.creches} />
                </View>
            </ScrollView>
        );
    }
}

export default createBottomTabNavigator({
    Home: { 
        screen: Home,
        navigationOptions: {
            tabBarLabel: null,
            tabBarIcon:() =>(
               <Image source={require('../../assets/home.png')} style={{height: 24, width: 24}} />
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
                <Image source={require('../../assets/Cart-512.png')} style={{height: 24, width: 24}} />
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
             tabBarOptions: '#7bbb5e'
        }
    }
});

const paths = {
    petshop: require('../../assets/petshop.jpg'),
    clinica: require('../../assets/clinica.jpeg'),
    creches: require('../../assets/creches.jpg')
}

const styles = StyleSheet.create({
    img: {  
        marginTop: 20,
        width: 350,
        height: 150,
        marginLeft: 5,
        marginBottom: 15
    },
    sectionText: {
        fontSize: 16,
        marginTop: 5,
        marginLeft: 5
    }
});