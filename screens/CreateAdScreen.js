import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

import Header from '../components/Header';
import  Colors from '../constants/Colors';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CreateAdScreen = props => {
  const renderGridItem = itemData => {
    return(
      <View style={styles.screen}>
      <CategoryGridTile title={itemData.item.title} 
      image={itemData.item.imageUrl}/>
      </View>
    );
  };
return (
<View flex={1}>
<Header title="Create Ad"/>
<Text style={styles.categoryText}>Select Category</Text>
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
    alignItems: 'center',
    justifyContent: 'center'
    },
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