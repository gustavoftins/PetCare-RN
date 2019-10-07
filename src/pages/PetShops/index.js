import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, ScrollView, Text } from 'react-native';
import CompanyCard from '../../components/Cards/Company/index';

import api from '../../services/api';
import Loading from '../../components/Loading';

import Button from '../../components/Button/SecondaryButton/index';
console.disableYellowBox = true;

export default function PetShops({ navigation }) {

    const [companies, setCompanies] = useState([]);

    const [actPage, setActPage] = useState(0);

    const [totalPages, setTotalPages] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const [isThereMorePages, setIsThereMorePages] = useState(false);

    useEffect(() => {
         loadCompanies(actPage);
    },[])

    async function loadCompanies(page) {
        setIsLoading(true)
        await api.get(`/companies/${page}`).then(response => {
            console.log(response.data.content);
            setCompanies(companies.concat(response.data.content));
            setTotalPages(response.data.totalPages);
            setActPage(response.data.number);
            setIsLoading(false);

            if(response.data.totalPages <= 1){
                setIsThereMorePages(false);
            }else{
                setIsThereMorePages(true);
            }
        });
    }

    async function loadMoreCompanies(page){
        await api.get(`/companies/${page}`).then(res => {
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

    renderItem = ({ item }) => (
        <CompanyCard 
            title={item.companyName}
            status={item.status}
            description={item.description}
            onPress={() => navigation.navigate('Company', {companyId: item.id})}

        />
    )

  return (
    <ScrollView>
        {isLoading ? (<Loading />) : (
            <>
            <FlatList 
            data={companies}
            keyExtractor={companies => companies.id.toString()}
            renderItem={renderItem}
        />
        <View style={{width: '100%', alignItems: 'center', margin: 10}}>
            {isThereMorePages ? (<Button text="Carregar mais" onPress={() => loadMoreCompanies(actPage + 1)} />) : (<Text></Text>)}
        </View>
        </>
        
        )}

    </ScrollView>
  );
}