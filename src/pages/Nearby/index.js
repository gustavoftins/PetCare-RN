import React, { useEffect, useState } from 'react';
import { View, FlatList, ScrollView, Text } from 'react-native';
import api from '../../services/api';

// import { Container } from './styles';

import CompanyCard from '../../components/Cards/Company/index';

export default function Nearby() {

    const [companies, setCompanies] = useState([]);
    const [message, setMessage] = useState('');


    useEffect(() => {
        getNearbyPetShops(0);
    }, [])


    useEffect(() => {
        if(companies === null || companies === undefined){
            setMessage('Não há nenhum PetShop próximo à você')
        }
    }, [companies])
    async function getNearbyPetShops(page){
        await api.get(`/companies-nearby/${page}`).then((res) =>{
            setCompanies(res.data.content);
            console.log(res.data.content);
        })
    }

    renderItem = ({ item }) => (
        <CompanyCard 
            title={item.companyName}
            description={item.description}
        />
    )

  return (
    <ScrollView>
        <View style={{alignItems: 'center', padding: 30}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{message}</Text>
        </View>
        <FlatList 
            data={companies}
            renderItem={renderItem}
        
        />
    </ScrollView>
  );
}
