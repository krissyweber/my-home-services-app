import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';



export default function BusinessListSmall({business}) {

  const navigation=useNavigation()
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.push('Business-details', { business:business })}>
      <Image source={{ uri:business?.images[0]?.url }}
      style={styles.image}/>
      <View style={styles.infoContainer}>
        <Text style={{fontSize:17, fontFamily:'outfit'}}>{business?.name}</Text>
        <Text style={{fontSize:13, fontFamily:'outfit'}}>{business?.contact}</Text>
        <Text style={{fontSize:13, fontFamily:'outfit', padding:3, color:Colors.WHITE,backgroundColor:Colors.PRIMARY, borderRadius:3,alignSelf:'flex-start',paddingHorizontal:7}}>
          {business?.category.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:Colors.WHITE,
        borderRadius:10
    },
    infoContainer:{
        padding:7,
        display:'flex',
        gap:3
    },
    image:{
        width:160,
        height:100,
        borderRadius:10
    }
})