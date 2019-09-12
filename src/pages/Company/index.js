import React, { useEffect, useState } from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import styles from './styles';
import { createMaterialTopTabNavigator } from 'react-navigation';
// import { Container } from './styles';

import SubHeader from '../../components/Company SubHeader/index';
import Product from '../../components/Product/index';
import Services from '../Services/index';
import api from '../../services/api';

export default function Company({ navigation }) {

  const [company, setCompany] = useState({});

  const [products, setProducts] = useState([]);

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

  useEffect(() =>{
    loadCompanyById(id);
    if(id){
      getProducts(id, 0);
    }
  },[])

  renderItem = ({ item }) => (
    <Product 
      price={item.price}
      name={item.name}
      description={item.description}
    />
  )

  return (
    <ScrollView style={{        backgroundColor: '#f5f5f5',}}>
      <View style={{width: '100%', alignItems: 'center'}}>
          <SubHeader companyName={company.companyName} companyDescription={company.description} companyStatus={company.status} />
          <FlatList 
            data={products}
            keyExtractor={products => products.id.toString()}
            renderItem={renderItem}
          />
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
