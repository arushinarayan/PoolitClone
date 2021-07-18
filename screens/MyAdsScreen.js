import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

import Header from '../components/Header';
import  Colors from '../constants/Colors';

const MyAdsScreen = props => {
return (
<View style={styles.screen}>
<Header title="My Ads"/>
  <Image style={styles.image} source={require('../constants/Images/MyAdsEmpty.png')}/>
  <Text style={styles.text}>You haven't posted any ads</Text>
  <TouchableOpacity activeOpacity = {0.5}>
  <View alignItems={'center'} justifyContent={'center'}>
  <View style={styles.button}>
  <Text style={styles.buttonText}>POST AD</Text>
  </View>
  </View>
  </TouchableOpacity>
</View>
);
};

const styles = StyleSheet.create({
screen:{
flex: 1
  },
image:{
width: 220,
height: 242,
marginLeft: 55,
marginTop: 159
},
text:{
fontWeight: '400',
color: Colors.lightgrey,
fontSize: 16,
textAlign:'center'
},
button:{
width: 145,
height:28,
borderRadius: 20,
marginVertical: 50,
backgroundColor: Colors.green,
alignItems: 'center',
justifyContent: 'center'
},
buttonText:{
fontWeight: '500',
fontSize: 14,
color: 'white'
}
});

export default MyAdsScreen;