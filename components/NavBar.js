import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import DiscoverScreen from '../screens/DiscoverScreen';
import MyOffersScreen from '../screens/MyOffersScreen';
import MyAdsScreen from '../screens/MyAdsScreen';
import CreateAdScreen from '../screens/CreateAdScreen';
import CommunityScreen from '../screens/CommunityScreen';
import AdDetailsScreen from '../screens/AdDetailsScreen';
import CategoryScreen from '../screens/CategoryScreen';
import CreateAdDetailsScreen from '../screens/CreateAdDetailsScreem'
import  Colors from '../constants/Colors';

const defaultStackNavOptions ={
  headerStyle: {
    backgroundColor: 'white',
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomColor: 'black',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity:  0.1,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 10,
    },
    headerTitleStyle: {
      color: Colors.green,
      fontSize: 18,
      fontWeight: 'bold',
    },
    headerTitleAlign: 'left',
    headerBackImage: ()=>(<Image source={require('../constants/Images/BackButton.png')} 
    style={{marginLeft: 10}}/>),
    headerBackTitleVisible: false
}

const AdsNavigator = createStackNavigator ();
const AdsStack = () => {
  return (
  <AdsNavigator.Navigator 
  initialRouteName="Discover" >
  <AdsNavigator.Screen name="Discover" component={DiscoverScreen} options={{headerShown: false}}/>
  <AdsNavigator.Screen name="Category" component={CategoryScreen} options={defaultStackNavOptions}/>
  <AdsNavigator.Screen name="Ad" component={AdDetailsScreen} options={defaultStackNavOptions}/>
  </AdsNavigator.Navigator> 
  );
};

const CreateAdsNavigator = createStackNavigator();
const CreateAdsStack = () => {
  return (
  <CreateAdsNavigator.Navigator 
  initialRouteName="CreateAd" >
  <CreateAdsNavigator.Screen name="CreateAd" component={CreateAdScreen} options={{headerShown: false}}/>
  <CreateAdsNavigator.Screen name="CreateAdDetails" component={CreateAdDetailsScreen} options={defaultStackNavOptions}/>
  </CreateAdsNavigator.Navigator> 
  );
};

const Tab = createBottomTabNavigator();
const CustomTabBarButton = ({children, onPress}) => (
<TouchableOpacity style={styles.plusButton} onPress={onPress} activeOpacity={0.8}>
  <View style={styles.plusButtonContainer}>
    {children}
  </View>
</TouchableOpacity>
);

const NavBar = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderTopEndRadius: 10,
          backgroundColor: 'white',
          height: Dimensions.get('window').height * 0.10
        },
        headerShown:false
      }}
    >
    <Tab.Screen 
    name="Discover" 
    component={AdsStack} 
    options={{
      tabBarIcon: ({focused}) => (
        <View style={styles.iconContainer}>
          <Image 
          source={require('../constants/Images/Discover.png')} 
          resizeMode='contain'
          style={{
            tintColor: focused ? Colors.green : Colors.lightgrey,
          }}/>
          <Text style={{
          fontWeight: '400',
          fontSize: 10,
          paddingTop: 3,
          color: focused ? Colors.green : Colors.lightgrey}}>DISCOVER</Text>
        </View>
      ),
    }}/>
    <Tab.Screen name="MyOffers" component={MyOffersScreen}
    options={{
      tabBarIcon: ({focused}) => (
        <View style={styles.iconContainer}>
          <Image 
          source={require('../constants/Images/Offers.png')} 
          resizeMode='contain'
          style={{
            tintColor: focused ? Colors.green : Colors.lightgrey,
          }}/>
          <Text style={{
          fontWeight: '400',
          fontSize: 10,
          paddingTop: 3,
          color: focused ? Colors.green : Colors.lightgrey}}>MY OFFERS</Text>
        </View>
      ),
    }}/>
    <Tab.Screen name="CreateAd" component={CreateAdsStack}
    options= {{
      tabBarIcon: ({focused}) => (
        <Image source={require('../constants/Images/CreateAd.png')} 
        resizeMode='contain'
        style={{
          tintColor: 'white',
        }}/>
      ),
      tabBarButton: (props) => (
        <CustomTabBarButton {...props}/>
      )
    }}
    />
    <Tab.Screen name="MyAds" component={MyAdsScreen}
    options={{
      tabBarIcon: ({focused}) => (
        <View style={styles.iconContainer}>
          <Image 
          source={require('../constants/Images/Ads.png')} 
          resizeMode='contain'
          style={{
            tintColor: focused ? Colors.green : Colors.lightgrey,
          }}/>
          <Text style={{
          fontWeight: '400',
          fontSize: 10,
          paddingTop: 3,
          color: focused ? Colors.green : Colors.lightgrey}}>MY ADS</Text>
        </View>
      ),
    }}/>
    <Tab.Screen name="Community" component={CommunityScreen}
    options={{
      tabBarIcon: ({focused}) => (
        <View style={styles.iconContainer}>
          <Image 
          source={require('../constants/Images/Community.png')} 
          resizeMode='contain'
          style={{
            tintColor: focused ? Colors.green : Colors.lightgrey,
          }}/>
          <Text style={{
          fontWeight: '400',
          fontSize: 10,
          paddingTop: 3,
          color: focused ? Colors.green : Colors.lightgrey}}>COMMUNITY</Text>
        </View>
      ),
    }}/>
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
iconContainer:{
  alignItems:'center',
  justifyContent: 'center',
},
plusButton:{
  top: -30,
  justifyContent: 'center',
  alignItems: 'center',
},
plusButtonContainer:{
width: 40,
height: 40,
borderRadius: 20,
backgroundColor: Colors.green
}
});

export default NavBar;