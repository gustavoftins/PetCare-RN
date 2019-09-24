import React, { useEffect, useState } from 'react';
import { View, ScrollView, FlatList , Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';
import { createMaterialTopTabNavigator } from 'react-navigation';
// import { Container } from './styles';

import SubHeader from '../../components/Company SubHeader/index';
import Product from '../../components/Product/index';
import Service from '../../components/ServiceCard/index';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

import { TOKEN_KEY } from '../../services/auth';

export default function Company({ navigation }) {

  const [company, setCompany] = useState({});

  const [products, setProducts] = useState([]);

  const [services, setServices] = useState([]);

  const [user, setUser] = useState({});

  const id = navigation.getParam('companyId');

  const [isFavorite, setIsFavorite] = useState();

  const [path, setPath] = useState();

  async function loadCompanyById(id){
    await api.get(`/companies-list/${id}`).then(res => {
      setCompany(res.data);
    })
  }

  async function getProducts(id, page){
    await api.get(`/company-products/${id}/${page}`).then(res => {
      setProducts(products.concat(res.data.content));
    })
  }

  async function getServices(id, page){
    await api.get(`/company-services/${id}/${page}`).then(res => {
      setServices(services.concat(res.data.content));
    })
  }

  async function getUser(){
    try{
      await AsyncStorage.getItem('user').then((value) => {
        setUser(JSON.parse(value));

        let teste = JSON.parse(value);
        console.log(teste);
        setIsFavorite(teste.favorites.includes(id));
      })
    }catch(err){

    }
  }

  async function refreshFavorite(){
    await AsyncStorage.setItem('user', JSON.stringify(user));
  }


  useEffect(() => {
    // console.log(user);
  },[user])

  useEffect(() =>{
    console.log(id);
    loadCompanyById(id);
    if(id){
      getUser();
      getProducts(id, 0);
      getServices(id, 0);

    }

  },[])

  useEffect(() => {
    refreshFavorite()
  }, [isFavorite])

  renderServices = ({ item }) => (
    <Product
      price={item.price}
      name={item.name}
      description={item.description}
      />
  )

  useEffect(() =>{

  }, [])

  async function handleFavorite(){
    var token;
    await AsyncStorage.getItem(TOKEN_KEY).then((value => {
       token = value; 
    }))

    if(!isFavorite && company.id !== undefined){
      await api.post(`/users/favorite/${company.id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
        
      } );
      setIsFavorite(true)
    }else{
      await api.post(`/users/removeFavorite/${company.id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
      setIsFavorite(false);
    }
  }

  return (
    <ScrollView style={{        backgroundColor: '#f5f5f5', height: '100%'}}>
      <View style={{width: '100%', alignItems: 'center'}}>
          <SubHeader companyName={company.companyName} companyDescription={company.description} companyStatus={company.status} favorite={ isFavorite ? (require('../../assets/favorite.png')) : (require('../../assets/notfavorite.png'))} onPress={handleFavorite} />
          <View style={{width: '100%', alignItems: 'center'}}>
          <Text style={styles.title}>Serviços</Text>
          <FlatList 
              data={services}
              keyExtractor={services => services.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity style={{height: 120}}
                  onPress={() => navigation.navigate('ServicePage', {service: item, company})}
                >
                <Service
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  service={item}
                />
                </TouchableOpacity>
              )}
            />
          <Text style={styles.title}>Produtos</Text>
          <FlatList 
            data={products}
            keyExtractor={products => products.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('ProductPage', {product: item, company})}>
              <Product 
              price={item.price}
              name={item.name}
              description={item.description}
              />
              </TouchableOpacity>
            )}
          />
          </View>
        </View>
    </ScrollView>
  );
}



// export default createMaterialTopTabNavigator({
//     Produtos: Company,
//     Serviços: Services,
    
// },{
//   tabBarOptions: {
//     activeBackgroundColor: '#7bbb5e',
//     labelStyle:{
//       color: 'black',
//       fontSize: 12
//     },
//     style:{
//       backgroundColor: 'white'
//     },
//     indicatorStyle: {
//       backgroundColor: '#7bbb5e'
//     }
//   }
// });