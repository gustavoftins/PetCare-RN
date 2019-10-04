import React, { useEffect, useState } from 'react';
import { View, FlatList, Image } from 'react-native';
import CompanyCard from '../../components/Cards/Company/index';

import api from '../../services/api';
import Loading from '../../components/Loading';

export default function PetShops({ navigation }) {

    const [companies, setCompanies] = useState([]);

    const [actPage, setActPage] = useState(0);

    const [totalPages, setTotalPages] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
         loadCompanies(actPage);
    },[])

    async function loadCompanies(page) {
        setIsLoading(true)
        await api.get(`/companies/${page}`).then(response => {
            console.log(response.data.content);
            setCompanies(companies.concat(response.data.content));
            setTotalPages(response.data.totalPages);
            setIsLoading(false);
        });
    }

    renderItem = ({ item }) => (
        <CompanyCard 
            title={item.companyName}
            status={item.status}
            description={item.description}
            onPress={() => navigation.navigate('Company', {companyId: item.id})}

        />
    )

    loadMore = () => {
        if(actPage === totalPages) return

        const pageNumber = actPage + 1;

        loadCompanies(pageNumber)
    }

  return (
    <View>
        {isLoading ? (<Loading />) : (
            <>
            <FlatList 
            data={companies}
            keyExtractor={companies => companies.id}
            renderItem={renderItem}
            onEndReached={loadMore}
            onEndReachedThreshold={0.1}
        />
        </>
        )}
        
    </View>
  );
}