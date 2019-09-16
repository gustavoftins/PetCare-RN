import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import CompanyCard from '../../components/Cards/Company/index';

import api from '../../services/api';

export default function PetShops({ navigation }) {

    const [companies, setCompanies] = useState([]);

    useEffect(() => {
         loadCompanies(0);
    },[])

    async function loadCompanies(page) {
        await api.get(`/companies/${page}`).then(response => {
            console.log(response.data.content);
            setCompanies(companies.concat(response.data.content));
        });
    }

    renderItem = ({ item }) => (
        <CompanyCard 
            title={item.companyName}
            status={item.status}
            description={item.description}
            onPress={() => navigation.navigate('Company', {companyId: item.id})}
            imgpath={item.avatar}
        />
    )

  return (
    <View>
        <FlatList 
            data={companies}
            keyExtractor={companies => companies.id.toString()}
            renderItem={renderItem}
        />
    </View>
  );
}