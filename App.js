import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './components/NavBar';

import DiscoverScreen from './screens/DiscoverScreen';

export default function App(){
return (
<NavigationContainer>
 <NavBar/>
</NavigationContainer>
);
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },

});

