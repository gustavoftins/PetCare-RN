import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, ScrollView } from 'react-native';
import api from '../../services/api';

// import { Container } from './styles';

import Order from '../../components/Order/index';


export default function Orders() {
    const [notFinishedOrders, setNotFinishedOrders] = useState([]);
    const [finishedOrders, setFinishedOrders] = useState([]);

    useEffect(() => {
        getOrdersFromAPI(0);
        getFinishedOrdersFromAPI(0);
    }, [])

    async function getOrdersFromAPI(page){
        await api.get(`/get-orders/${page}`).then(res => {
            setNotFinishedOrders(res.data.content);
        })
    }

    async function getFinishedOrdersFromAPI(page){
        await api.get(`/get-orders-finished/${page}`).then(res => {
            setFinishedOrders(res.data.content);
        })
    }

    renderItem = ({ item }) => (
        <Order 
            order={item}
        />
    )

  return (
    <ScrollView>
        <Text style={{marginLeft: 25, color: '#7bbb5e', fontSize: 22}}>Pedidos em Andamento</Text>
        <FlatList 
        data={notFinishedOrders}
            keyExtractor={notFinishedOrder => notFinishedOrder.id.toString()}
            renderItem={renderItem}
        />
    </ScrollView>
  );
}
