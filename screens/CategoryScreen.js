import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import  Colors from '../constants/Colors';
import SearchBar from '../components/SearchBar';
import LocationBubble from '../components/LocationBubbles';
import { CATEGORIES, ADS} from '../data/dummy-data';
import AdDetailsScreen from '../screens/AdDetailsScreen';
import AdGridTile from '../components/AdGridTile';

const CategoryScreen = props => {
  const renderAdItem = itemData => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <AdGridTile
        title={itemData.item.Adtitle}
        image={itemData.item.Adimage}
        sellingMethod={itemData.item.sellingMethod}
        location={itemData.item.location}
        onSelect={() => {
          props.navigation.navigate('Ad', {
              adId: itemData.item.id,
          });
        }}
      />
      </View>
    );
  };

return (
<View>
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
<FlatList
      keyExtractor={(item, index) => item.id}
      data={ADS}
      renderItem={renderAdItem}
      numColumns={2}
      ListFooterComponent={<View style={{height: 250}}/>}
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
  });

export default CategoryScreen;