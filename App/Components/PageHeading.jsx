import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

export default function PageHeading({title}) {
    const navigation=useNavigation();
  return (
    <View>
       <TouchableOpacity style={{display:'flex', flexDirection:'row',gap:10, alignItems:'center'}}
        onPress={()=>navigation.goBack()}>

      <Feather name="arrow-left-circle" size={24} color="black" />
      <Text style={{fontSize:25,fontFamily:'outfit-med'}}>{title}</Text>
    </TouchableOpacity>
    </View>
  )
}