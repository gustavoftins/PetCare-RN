import React from 'react';
import { View, StyleSheet,ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import CompanyCard from '../../components/Cards/Company/index';
// import { Container } from './styles';

export default function MostRated({ navigation }) {
    const paths = {
      blumengarten: require('../../assets/blumengarten.jpg'),
      central: require('../../assets/central.jpg')
    }
  return (
    <ScrollView style={{height: '100%', width: '100%'}}>
        <CompanyCard imgpath={paths.blumengarten}
          title="BlumenGarten PetShop"
          description="dsjifjdsifsjdfidsjfisjfisfjsdifjdsifsdifj"
          status="Aberto"
        />

        <CompanyCard onPress={()=>navigation.navigate('Company')}
        imgpath={paths.central} title="Central PetShop" description="difjdsifjsdifjdsif" />
        <CompanyCard onPress={()=>navigation.navigate("Home")} imgpath={paths.central} title="Central PetShop" description="difjdsifjsdifjdsif" status="Aberto" />
        <CompanyCard imgpath={paths.central} title="Central PetShop" description="difjdsifjsdifjdsif" status="Aberto" />
        <CompanyCard imgpath={paths.central} title="Central PetShop" description="difjdsifjsdifjdsif" status="Aberto" />
        <CompanyCard imgpath={paths.central} title="Central PetShop" description="difjdsifjsdifjdsif" status="Aberto" />
        <CompanyCard imgpath={paths.central} title="Central PetShop" description="difjdsifjsdifjdsif" status="Aberto" />
        <CompanyCard imgpath={paths.central} title="Central PetShop" description="difjdsifjsdifjdsif"  status="Aberto" />
        <CompanyCard imgpath={paths.central} title="Central PetShop" description="difjdsifjsdifjdsif" />
        <CompanyCard imgpath={paths.central} title="Central PetShop" description="difjdsifjsdifjdsif" />
        <CompanyCard imgpath={paths.central} title="Central PetShop" description="difjdsifjsdifjdsif" />
    </ScrollView>
  );
}
