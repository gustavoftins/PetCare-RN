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
  Favorites: Favorites
});

class App extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}
axios.interceptors.request.use(async (config) => {
  if (
    !config.url.endsWith('login') ||
    !config.url.endsWith('signup')
  ) {
    AsyncStorage.getItem(TOKEN_KEY).then(res => {
      config.headers.Authorization = `Bearer ${res}`;
    });
  }

  return config;
}, (error) => {
  // I cand handle a request with errors here
  return Promise.reject(error);
});

export default createAppContainer(AppStackNavigator);


