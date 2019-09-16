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


export default function Company({ navigation }) {

  const [company, setCompany] = useState({});

  const [products, setProducts] = useState([]);

  const [services, setServices] = useState([]);

  const [user, setUser] = useState({});

  const id = navigation.getParam('companyId');

  async function loadCompanyById(id){
    await api.get(`/companies-list/${id}`).then(res => {
      console.log(res.data);
      setCompany(res.data);
    })
  }

  async function getProducts(id, page){
    await api.get(`/company-products/${id}/${page}`).then(res => {
      console.log(res.data.content);
      setProducts(products.concat(res.data.content));
    })
  }

  async function getServices(id, page){
    await api.get(`/company-services/${id}/${page}`).then(res => {
      console.log(res.data.content);
      setServices(services.concat(res.data.content));
    })
  }

  async function getUser(){
    try{
      await AsyncStorage.getItem('user').then((value) => {
        setUser(JSON.parse(value));
      })
    }catch(err){

    }

  }

  useEffect(() => {
    console.log(user);
  },[user])

  useEffect(() =>{
    loadCompanyById(id);
    if(id){
      getProducts(id, 0);
      getServices(id, 0);
      getUser();
    }
  },[])

  renderServices = ({ item }) => (
    <Product
      price={item.price}
      name={item.name}
      description={item.description}
      />
  )

  return (
    <ScrollView style={{        backgroundColor: '#f5f5f5', height: '100%'}}>
      <View style={{width: '100%', alignItems: 'center'}}>
          <SubHeader companyName={company.companyName} companyDescription={company.description} companyStatus={company.status} />
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
              <TouchableOpacity onPress={() => navigation.navigate('ServicePage')}>
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