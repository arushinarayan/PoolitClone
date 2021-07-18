import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, FlatList} from 'react-native';

import Header from '../components/Header';
import  Colors from '../constants/Colors';
import SearchBar from '../components/SearchBar';
import LocationBubble from '../components/LocationBubbles';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const DiscoverScreen = props => {
const renderGridItem = itemData => {
    return(
      <View style={styles.screen}>
      <CategoryGridTile title={itemData.item.title} 
      image={itemData.item.imageUrl}
      numberOfProducts={itemData.item.numberOfProducts}
       onSelect={()=> { props.navigation.navigate('Category', {
        categoryId: itemData.item.categoryId
       })}}/>
          </View>
    );
  };
return (
<View>
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
<FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
      ListFooterComponent={<View style={{height: 450}}/>}
    />
</View>
);
};

const styles = StyleSheet.create({
screen:{
flex: 1,
justifyContent: 'space-around',
alignItems: 'center'
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

});

export default DiscoverScreen;