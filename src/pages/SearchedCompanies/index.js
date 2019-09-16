import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import CompanyCard from '../../components/Cards/Company/index';

// import { Container } from './styles';

export default function SearchedCompanies({ navigation }) {
    const searchedCompanies = navigation.getParam('searchedCompanies');
    const totalPages = navigation.getParam('totalPages');
    const actPage = navigation.getParam('actPage');

    useEffect(() => {
        console.log(searchedCompanies, totalPages, actPage);
    },[])

    renderItem = ({ item }) => (
      <CompanyCard 
        title={item.companyName}
        status={item.status}
        description={item.description}
        onPress={() => navigation.navigate('Company', {companyId: item.id})}
      />
    )

  return (
    <View>
      <FlatList 
        data={searchedCompanies}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}
