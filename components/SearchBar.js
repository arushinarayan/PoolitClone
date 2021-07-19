import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import  Colors from '../constants/Colors';

const SearchBar = props => {
return (
<TouchableOpacity onPress = {props.onPress}>
<View style={styles.container}>
    <View style={styles.searchBar} >
    <Image 
    style={styles.icon}
    source={require('../constants/Images/Search(white).png')}/>
    </View>
</View>
</TouchableOpacity>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20
  },
  searchBar: {
    height: 34,
    width: Dimensions.get('window').width * 0.90,
    borderRadius: 16,
    backgroundColor: Colors.lightgrey,
  },
  icon:{
    width: 18,
    height: 18,
    marginTop: 9,
    marginLeft: 16,
    marginBottom: 7
  }
});

export default SearchBar;
