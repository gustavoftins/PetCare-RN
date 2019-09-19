import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import api from '../../services/api';

import CompanyCard from '../../components/Cards/Company/index';

export default function Favorites({ navigation }) {

    const [favoriteCompanies, setFavoriteCompanies] = useState([]);

    async function loadFavorites(page){
        await api.get(`/users/favorites-list/${page}`).then(res => {
            console.log(res.data.content);
            setFavoriteCompanies(res.data.companies);
        })
    }

    useEffect(() => {
        loadFavorites(0);
    }, [])

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
        
        data={favoriteCompanies} 
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
        />
    </View>
  );
}
