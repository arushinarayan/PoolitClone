import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image, Platform, TouchableNativeFeedback} from 'react-native';
import Colors from '../constants/Colors'

const CategoryGridTile = props => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >=21) { TouchableCmp = TouchableNativeFeedback;}
  return (
    <View style={{flex:1}}>
    <TouchableCmp onPress={props.onSelect}>
    <View style={{...styles.card, ...props.style}}>
    <Image style= {styles.image} source={{uri: props.image}} />
    <View style={styles.textContainer}>
    <Text style={styles.sellingMethodText}>{props.sellingMethod}</Text>
    <Text style={styles.AdTitle} numberOfLines={1}>{props.title}</Text>
    <View style={styles.locationContainer}>
    <Image style= {styles.locationPin} source={require('../constants/Images/locationPin.png')}/>
   <Text style={styles.locationText}>{props.location}</Text>
   </View>
    </View>
  </View>
    </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 203,
    width: 156,
    marginVertical: 10,
  },
  image:{
  height: 111,
  width: 156,
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5
  },
  textContainer:{
    height: 92,
    width: 156,
    backgroundColor: 'white',
    borderBottomLeftRadius: 5,  
    borderBottomRightRadius: 5,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity:  0.1,
    shadowRadius: 3,
    elevation: 5
  },
  AdTitle:{
  paddingTop: 8,
  paddingLeft: 16,
  paddingBottom: 5,
  fontSize: 12,
  fontWeight: '500',
  color: Colors.darkgrey,
  },
  sellingMethodText:{
    paddingTop: 16,
    paddingLeft: 16,
    fontWeight: '700',
    fontSize: 10,
    color: Colors.darkgrey
  },
  locationContainer:{
    flexDirection: 'row',
    paddingLeft: 10
  },
  locationPin:{
    paddingLeft: 10,
    paddingTop: 10
  },
  locationText:{
    fontSize: 12,
    fontWeight: '300',
    color: Colors.lightgrey,
    paddingTop: 5
  }
 
});

export default CategoryGridTile;
