import axios from 'axios';
import React, { Fragment } from 'react';
import Signup from './src/pages/Signup/index';
import Opening from './src/pages/Opening/index';
import Signin from './src/pages/Signin/index';
import Home from './src/pages/Home/index';
import MostRated from './src/pages/MostRated/index';
import Company from './src/pages/Company/index';
import Profile from './src/pages/Profile/index';
import Addresses from './src/pages/Addresses/index'
import PetShops from './src/pages/PetShops/index';
import { TOKEN_KEY } from './src/services/auth';
import ServicePage from './src/pages/ServicePage/index';
import SearchedCompanies from './src/pages/SearchedCompanies/index';
import Favorites from './src/pages/Favorites/index';
import ProductPage from './src/pages/ProductPage/index';
import Nearby from './src/pages/Nearby/index';
import Cart from './src/pages/Cart/index';
import Orders from './src/pages/Orders/index';


import AsyncStorage from '@react-native-community/async-storage';



import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppStackNavigator = createStackNavigator({
  InitialPage: {
    screen: Opening,
    navigationOptions: {
      header: null
    }
  },
  Signup: Signup,
  Signin: Signin,
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  MostRated: MostRated,
  Company: Company,
  Profile: Profile,
  Addresses: Addresses,
  PetShops: PetShops,
  ServicePage: ServicePage,
  SearchedCompanies: SearchedCompanies,
  Favorites: Favorites,
  ProductPage: ProductPage,
  Nearby: Nearby,
  Cart: Cart,
  Orders: Orders

});

class App extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

export default createAppContainer(AppStackNavigator);


