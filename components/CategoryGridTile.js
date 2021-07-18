import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import Colors from '../constants/Colors'

const CategoryGridTile = props => {
  return (
    <TouchableOpacity onPress={props.onSelect}>
    <View style={{...styles.card, ...props.style}}>
    <Image style= {styles.image} source={{uri: props.image}} />
    <View style={styles.textContainer}>
    <Text style={styles.categoryTitle} numberOfLines={1}>{props.title}</Text>
    <Text style={styles.categoryNumber}>{props.numberOfProducts}</Text>
    </View>
  </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 156,
    width: 156,
    marginVertical: 10,

  },
  image:{
  height: 108,
  width: 156,
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5
  },
  textContainer:{
    height: 48,
    width: 156,
    backgroundColor: 'white',
    borderBottomLeftRadius: 5,  
    borderBottomRightRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity:  0.1,
    shadowRadius: 3,
    elevation: 5
  },
  categoryTitle:{
  fontSize: 14,
  fontWeight: '500',
  color: Colors.darkgrey,
  },
  categoryNumber:{
    fontSize: 10,
    fontWeight: '300',
    color: Colors.darkgrey,
  }
});

export default CategoryGridTile;