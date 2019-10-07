import React, { useState, useEffect } from 'react';
import { View, StyleSheet,ScrollView, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import CompanyCard from '../../components/Cards/Company/index';
import TabNavigator from '../Home/index';
import api from '../../services/api';

import Loading from '../../components/Loading';

import Button from '../../components/Button/SecondaryButton/index';

export default function MostRated({ navigation }) {

  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [actPage, setActPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [isThereMorePages, setIsThereMorePages] = useState(false);

  useEffect(() => {
    handleMostRateds(0)
  },[])
  async function handleMostRateds(page){
    setIsLoading(true);
    await api.get(`/companies-most-rated/${page}`).then(res => {
      setCompanies(res.data.content);
      setActPage(res.data.number);
      setTotalPages(res.data.totalPages);
      setIsLoading(false);

      if(res.data.totalPages <= 1){
        setIsThereMorePages(false);
      }else{
        setIsThereMorePages(true);
      }
    })
  }

  async function loadMoreCompanies(page){
    await api.get(`/companies-most-rated/${page}`).then(res => {
      setCompanies(companies.concat(res.data.content));
      setTotalPages(res.data.totalPages);
      setActPage(res.data.number);


      if(res.data.number === res.data.totalPages){
          setIsThereMorePages(false);
      }else{
          setIsThereMorePages(true);
      }
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
      {isThereMorePages ? (<View style={{width: '100%', alignItems: 'center'}}><Button text={'Carregar Mais'} onPress={() => loadMoreCompanies(actPage + 1)} /></View>) : (<View></View>)}
        </>
      )}
      
    </ScrollView>
  );
}
