import React, { useEffect, useState } from 'react';
import { View, FlatList, ScrollView, Text } from 'react-native';
import api from '../../services/api';

// import { Container } from './styles';

import CompanyCard from '../../components/Cards/Company/index';

import Loading from '../../components/Loading/index';

import Button from '../../components/Button/SecondaryButton/index';

export default function Nearby() {

    const [companies, setCompanies] = useState([]);
    const [message, setMessage] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const [actPage, setActPage] = useState(0);

    const [totalPages, setTotalPages] = useState(0);

    const [isThereMorePages, setIsthereMorePages] = useState(false);

    useEffect(() => {
        getNearbyPetShops(actPage);
    }, [])


    useEffect(() => {
        if(companies === null || companies === undefined){
            setMessage('Não há nenhum PetShop próximo à você')
        }
    }, [companies])
    async function getNearbyPetShops(page){
        setIsLoading(true);
        await api.get(`/companies-nearby/${page}`).then((res) =>{
            setCompanies(res.data.content);
            setActPage(res.data.number);
            setTotalPages(res.data.totalPages);
            setIsLoading(false);

            if(res.data.number <= 1){
                setIsthereMorePages(false);
            }else{
                setIsthereMorePages(true);
            }
        })
    }

    async function loadMore(page){
        await api.get(`/companies-nearby/${page}`).then((res) => {
            setCompanies(res.data.content);
            setActPage(res.data.number);
            setTotalPages(res.data.totalPages);

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
            description={item.description}
            status={item.status}
        />
    )

  return (
    <ScrollView>

        {isLoading ? (<Loading />) : (
            <>
            <FlatList 
            data={companies}
            renderItem={renderItem}
            
            />
            {isThereMorePages ? (<View style={{widht: '100%', alignItems: 'cemter', margin: 10}}><Button onPress={() => loadMore(actPage + 1)} text="Carregar Mais" /></View>) : (<View></View>)}
            </>
        )}

        <View style={{alignItems: 'center', padding: 30}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{message}</Text>
        </View>
    </ScrollView>
  );
}
