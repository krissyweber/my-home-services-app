import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'
import 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const navigation=useNavigation();

export default function BusinessListItem({business}) {
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.push('Business-details',
    { business:business })}>
      
      <Image source={{uri:business?.images[0]?.url}} 
     style={{width:100, height:100, borderRadius:10}} />
     <View style={styles.subContainer}>
     <Text style={{fontSize:20, fontFamily:'outfit'}}>{business?.name}</Text>
        <Text style={{fontSize:18, fontFamily:'outfit'}}>{business?.contact}</Text>
        <Text style={{fontSize:18, fontFamily:'outfit'}}><MaterialIcons name="location-pin" size={26} color="black" />
        {business?.address}</Text>
    </View>
    </TouchableOpacity>
  )
}

const styles= StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:Colors.WHITE,
        borderRadius:10,
        marginBottom:15,
        display:'flex',
        flexDirection:'row',
        gap:10
    },
    subContainer:{
      display:'flex',
      gap:5
    }
})