import React from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';
import styles from './styles';
import CompanyCard from '../../components/Cards/Company/index';
// import { Container } from './styles';

export default class MostRated extends React.Component {
  render() {
    const paths = {
      blumengarten: require('../../assets/blumengarten.jpg'),
      central: require('../../assets/central.jpg')
    }
  return (
    <ScrollView style={{height: '100%', width: '100%'}}>
    <View> 
        <CompanyCard imgpath={paths.blumengarten}
          title="BlumenGarten PetShop"
          description="dsjifjdsifsjdfidsjfisjfisfjsdifjdsifsdifj"
        />
        <CompanyCard imgpath={paths.central} title="Central PetShop" description="difjdsifjsdifjdsif" />
        <CompanyCard imgpath={paths.central} title="Central PetShop" description="difjdsifjsdifjdsif" />
        <CompanyCard imgpath={paths.central} title="Central PetShop" description="difjdsifjsdifjdsif" />
        <CompanyCard imgpath={paths.central} title="Central PetShop" description="difjdsifjsdifjdsif" />
        <CompanyCard imgpath={paths.central} title="Central PetShop" description="difjdsifjsdifjdsif" />
        <CompanyCard imgpath={paths.central} title="Central PetShop" description="difjdsifjsdifjdsif" />
        <CompanyCard imgpath={paths.central} title="Central PetShop" description="difjdsifjsdifjdsif" />
        <CompanyCard imgpath={paths.central} title="Central PetShop" description="difjdsifjsdifjdsif" />
        <CompanyCard imgpath={paths.central} title="Central PetShop" description="difjdsifjsdifjdsif" />
        <CompanyCard imgpath={paths.central} title="Central PetShop" description="difjdsifjsdifjdsif" />
    </View>

    </ScrollView>
  );
  }
}
