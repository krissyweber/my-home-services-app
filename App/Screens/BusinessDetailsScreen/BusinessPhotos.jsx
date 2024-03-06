import { View, Text } from 'react-native'
import React from 'react'
import Heading from '../../Components/Heading'
import { FlatList } from 'react-native-gesture-handler'

export default function BusinessPhotos({business}) {
  return (
    <View style={{padding:20}}>
      <Text>Photos</Text>
      <FlatList
      data={business?.images}
      renderItem={({item})=>(
        <Image source={{uri:item.url}}
        style={{width:'100%',flex:1,borderRadius:15,margin:5, height:120}}
        />
      )}/>
    </View>
  )
}