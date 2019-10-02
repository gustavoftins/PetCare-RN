import React, { useState, useEffect } from 'react';
import { View, FlatList, ScrollView, Text } from 'react-native';

import api from '../../services/api';

import CompanyCard from '../../components/Cards/Company/index';

export default function Favorites({ navigation }) {

    const [favoriteCompanies, setFavoriteCompanies] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        loadFavorites(0);
    }, [])

    async function loadFavorites(page) {
        await api.get(`/users/favorites-list/${page}`).then(res => {
            setFavoriteCompanies(res.data.content);
        })
    }

    useEffect(() => {
        if (favoriteCompanies !== undefined  && favoriteCompanies.length === 0) {
            setMessage('Você não favoritou nenhum PetShop ainda');
        }
    }, [favoriteCompanies])

    renderItem = ({ item }) => (
        <CompanyCard
            title={item.companyName}
            status={item.status}
            description={item.description}
            onPress={() => navigation.navigate('Company', { companyId: item.id })}
        />
    )

    return (
        <ScrollView style={{ width: '100%', height: '100%' }}>
            <View style={{alignItems: 'center', padding: 30}}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>{message}</Text>
            </View>
            <FlatList
                data={favoriteCompanies}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
            />
        </ScrollView>
    );
}
