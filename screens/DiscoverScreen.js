import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';

import Header from '../components/Header';
import  Colors from '../constants/Colors';
import SearchBar from '../components/SearchBar';
import LocationBubble from '../components/LocationBubbles';
import Category from '../components/Category';

const DiscoverScreen = props => {
return (
<View style={styles.screen}>
<Header title="Classifieds"/>
<Text style={styles.titleText}>Discover</Text>
<SearchBar/>
<View style={styles.locationTextContainer}>
<Text style={styles.locationText}>By locations</Text>
<TouchableOpacity activeOpacity = {0.5}>
<Text style={styles.addLocationText}>⊕ Add locations</Text>
</TouchableOpacity>
</View>
<View height={50}>
<ScrollView horizontal={true}>
<View style={styles.locationBubbleContainer}>
<LocationBubble >Company</LocationBubble>
<LocationBubble >Delhi</LocationBubble>
<LocationBubble >Gurgaon</LocationBubble>
<LocationBubble >Haryana</LocationBubble>
<LocationBubble >Noida</LocationBubble>
</View>
</ScrollView>
</View>
<Text style={styles.categoryText}>Categories</Text>
<ScrollView>
<View style={styles.categories}>
  <Category>
        <Image source={require('../constants/Images/Mobile Phones.png')}/>
        <Text>Mobile Phones</Text>
        <Text>20 Products</Text>
  </Category>
  <Category>
        <Image source={require('../constants/Images/Mobile Phones.png')}/>
        <Text>Mobile Phones</Text>
        <Text>20 Products</Text>
  </Category>
</View>
<View style={styles.categories}>
<Category>
        <Image source={require('../constants/Images/Mobile Phones.png')}/>
        <Text>Mobile Phones</Text>
        <Text>20 Products</Text>
  </Category>
  <Category>
        <Image source={require('../constants/Images/Mobile Phones.png')}/>
        <Text>Mobile Phones</Text>
        <Text>20 Products</Text>
  </Category>
</View>
<View style={styles.categories}>
<Category>
        <Image source={require('../constants/Images/Mobile Phones.png')}/>
        <Text>Mobile Phones</Text>
        <Text>20 Products</Text>
  </Category>
  <Category>
        <Image source={require('../constants/Images/Mobile Phones.png')}/>
        <Text>Mobile Phones</Text>
        <Text>20 Products</Text>
  </Category>
</View>
</ScrollView>
</View>
);
};

const styles = StyleSheet.create({
screen:{
flex: 1
},
titleText:{
fontSize: 24,
fontWeight: '500',
color: Colors.darkgrey,
paddingTop: 74,
paddingLeft: 16
},
locationTextContainer:{
flexDirection: 'row'
},
locationText:{
  fontSize: 16,
  fontWeight: '500',
  color: Colors.darkgrey,
  paddingTop: 50,
  paddingLeft: 22
},
addLocationText:{
  fontSize: 12,
  fontWeight: '400',
  color: Colors.darkgrey,
  paddingTop: 53,
  paddingLeft: 12
},
locationBubbleContainer:{
  flexDirection: 'row',
  marginLeft: 30,
  marginTop: 15,
},
categoryText:{
  fontSize: 16,
  fontWeight: '500',
  color: Colors.darkgrey,
  paddingLeft: 22,
  paddingTop: 10
},
categories:{
  padding: 15,
  flexDirection: 'row',
  justifyContent:'space-around'
}
});

export default DiscoverScreen;