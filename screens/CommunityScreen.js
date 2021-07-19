import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import Header from '../components/Header';
import  Colors from '../constants/Colors';

const CommunityScreen = props => {
return (
<View style={styles.screen}>
<Header title="Community"/>
<Text style={styles.text}>COMING SOON</Text>
<View marginHorizontal={20} marginVertical={15}>
  <Image style={styles.image} source={require('../constants/Images/CommunityEmpty.png')}/>
  <Text style={styles.subtext}>Our Team is Working on an Exciting New Fature. Stay Tuned</Text>
  </View>
</View>
);
};

const styles = StyleSheet.create({
screen:{
flex: 1,
backgroundColor: 'white'},
image:{
width: 165,
height: 177,
marginLeft: 97,
marginTop: 60,
},
text:{
fontSize: 20,
fontWeight: '700',
color: Colors.green,
textAlign: 'center',
marginTop: 170
},
subtext:{
fontWeight: '400',
color: Colors.lightgrey,
fontSize: 16,
textAlign: 'center'
},
});

export default CommunityScreen;