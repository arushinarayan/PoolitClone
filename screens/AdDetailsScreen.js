import React from 'react';
import {View, Text} from 'react-native';
import Colors from '../constants/Colors';

const AdDetailScreen = props => {
return (
<View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
<Text style={{fontSize: 25, fontWeight: '400', color: Colors.green}}>Ad Details</Text>
</View>
);
};

export default AdDetailScreen;