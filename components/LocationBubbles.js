import React from 'react';
import {StyleSheet, View, Text,} from 'react-native';
import  Colors from '../constants/Colors';

const LocationBubbles = props => {
return (
<View style={styles.locationBubbleContainer}>
  <Text style={styles.locationBubbleText}>{props.children}</Text>
</View>
);
};

const styles = StyleSheet.create({
locationBubbleContainer:{
width: 70,
height: 28,
borderRadius: 20,
borderColor: Colors.lightgrey,
borderWidth: 1,
alignItems: 'center',
justifyContent:'center',
margin: 5
},
locationBubbleText:{
  fontSize: 12,
  fontWeight: '400',
  color: Colors.lightgrey,
}
});

export default LocationBubbles;