import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './components/NavBar';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

enableScreens();

export default function App(){
return (
<SafeAreaProvider>
<NavigationContainer>
 <NavBar/>
</NavigationContainer>
 </SafeAreaProvider>
);
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },

});

