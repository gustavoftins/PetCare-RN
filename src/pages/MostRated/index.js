import React, { useState, useEffect } from 'react';
import { View, StyleSheet,ScrollView, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import CompanyCard from '../../components/Cards/Company/index';
import TabNavigator from '../Home/index';
import api from '../../services/api';


export default function MostRated({ navigation }) {

  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    handleMostRateds(0)
  },[])
  async function handleMostRateds(page){
    await api.get(`/companies-most-rated/${page}`).then(res => {
      setCompanies(res.data.content);
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
    />
  )

  return (
    <ScrollView style={{height: '100%', width: '100%'}}>
      <FlatList 
        data={companies}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </ScrollView>
  );
}
