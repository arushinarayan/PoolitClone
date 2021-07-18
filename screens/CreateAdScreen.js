import React from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';

import Header from '../components/Header';
import  Colors from '../constants/Colors';
import Category from '../components/Category';

const CreateAdScreen = props => {
return (
<View flex={1}>
<Header title="Create Ad"/>
<Text style={styles.categoryText}>Select Category</Text>
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
  categoryText:{
    fontSize: 16,
    fontWeight: '500',
    color: Colors.darkgrey,
    paddingLeft: 22,
    paddingTop: 10,
    marginTop: 70
  },
  categories:{
    padding: 15,
    flexDirection: 'row',
    justifyContent:'space-around'
  }
});

export default CreateAdScreen;