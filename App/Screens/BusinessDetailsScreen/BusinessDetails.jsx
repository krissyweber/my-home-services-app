import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation,useRoute  } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import 'react-native-gesture-handler';

export default function BusinessDetails() {
  const navigation=useNavigation();
    const {params}=useRoute();
    const [business,setBusiness]=useState(params.business);

  return business && (
    <View>
      <Image source={{uri:business?.images[0]?.url}}
      style={{width:'100%', height:300}}/>

      <TouchableOpacity style={{position:'absolute', zIndex:10,padding:20}}
        onPress={()=>navigation.goBack()}>

      <Feather name="arrow-left-circle" size={24} color="black" />
    </TouchableOpacity>
    <View>
    <Text style={{fontSize:20, fontFamily:'outfit'}}>{business?.name}</Text>
    <View>
        <Text style={{fontSize:18, fontFamily:'outfit'}}>{business?.contact}</Text>
        <Text style={{fontSize:18, fontFamily:'outfit'}}>{business?.category.name}</Text>
        </View>
        <Text style={{fontSize:18, fontFamily:'outfit'}}><MaterialIcons name="location-pin" size={26} color="black" />
        {business?.address}</Text>
        
        
    </View>
    </View>
  )
}