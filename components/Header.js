import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, Image} from 'react-native';
import  Colors from '../constants/Colors';

const Header = props => {
return(
  <SafeAreaView>
<View style={styles.screen}>
<View style={styles.header}>
  <View style={styles.contentContainer}>
  <Text style={styles.headerTitle}>{props.title}</Text>
  <View style={styles.iconContainer}>
  <Image 
  style={styles.icon}
  source={require('../constants/Images/Chat.png')} /> 
  <Image
  style={styles.icon}
  source={require('../constants/Images/Profile.png')} />
  </View>
  </View>
</View>
</View>
</SafeAreaView>
  );
};

const styles = StyleSheet.create({
screen:{
flex: 1,
alignItems: 'center',
},
contentContainer:{
flexDirection: 'row',
alignItems:'center',
justifyContent:'space-between'
},
header: {
  width: '100%',
  height: 58,
  backgroundColor: 'white',
  borderBottomEndRadius: 10,
  borderBottomLeftRadius: 10,
  borderBottomColor: 'black',
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity:  0.1,
  shadowRadius: 3,
  elevation: 5,
  borderRadius: 10,
  paddingLeft: 20,
},
headerTitle: {
paddingTop: 20,
 color: Colors.green,
 fontSize: 18,
 fontWeight: 'bold',
},
iconContainer:{
  flexDirection: 'row',
  marginRight: 10,
  paddingTop: 20,
},
icon:{
width: 18,
height: 18,
marginHorizontal: 10,
}
});

export default Header;