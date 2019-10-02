import React, { useEffect, useState } from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import api from '../../services/api';

// import { Container } from './styles';

import CompanyCard from '../../components/Cards/Company/index';

export default function Nearby() {

    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        getNearbyPetShops(0);
    }, [])

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
        <FlatList 
            data={companies}
            renderItem={renderItem}
        
        />
    </ScrollView>
  );
}
