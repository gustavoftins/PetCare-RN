import React, { useState, useEffect } from 'react';
import { View, StyleSheet,ScrollView, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import CompanyCard from '../../components/Cards/Company/index';
import TabNavigator from '../Home/index';
import api from '../../services/api';

import Loading from '../../components/Loading';

export default function MostRated({ navigation }) {

  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleMostRateds(0)
  },[])
  async function handleMostRateds(page){
    setIsLoading(true);
    await api.get(`/companies-most-rated/${page}`).then(res => {
      setCompanies(res.data.content);

      setIsLoading(false);
    })
  }

  useEffect(() =>{
    console.log(companies);
  },[companies])

  renderItem = ({ item }) => (
    <CompanyCard 
      title={item.companyName}
      description={item.description}
      status={item.status}
      onPress={() => navigation.navigate('Company', {companyId: item.id})}
    />
  )

  return (
    <ScrollView style={{height: '100%', width: '100%'}}>

      {isLoading ? (<Loading />) : (
        <>
          <FlatList 
        data={companies}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
        </>
      )}
      
    </ScrollView>
  );
}
