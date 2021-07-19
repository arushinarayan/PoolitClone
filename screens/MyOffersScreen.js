import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

import Header from '../components/Header';
import  Colors from '../constants/Colors';

const MyOffersScreen = props => {
return (
<View style={styles.screen}>
<Header title="My Offers"/>
  <Image style={styles.image} source={require('../constants/Images/MyOffersEmpty.png')}/>
  <Text style={styles.text}>You have not made any offers yet</Text>
  <TouchableOpacity activeOpacity = {0.5}>
    <View alignItems={'center'} justifyContent={'center'}>
  <View style={styles.button}>
  <Text style={styles.buttonText}>EXPLORE ADS</Text>
  </View>
  </View>
  </TouchableOpacity>
</View>
);
};

const styles = StyleSheet.create({
screen:{
flex: 1,
backgroundColor: 'white'
  },
image:{
width: 124,
height: 186,
marginLeft: 117,
marginTop: 192
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
backgroundColor: Colors.green,
marginVertical: 50,
alignItems: 'center',
justifyContent: 'center'
},
buttonText:{
fontWeight: '500',
fontSize: 14,
color: 'white'
}
});

export default MyOffersScreen;