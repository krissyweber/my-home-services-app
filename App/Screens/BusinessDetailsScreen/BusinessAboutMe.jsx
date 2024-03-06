import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import Heading from '../../Components/Heading';
import 'react-native-gesture-handler';


export default function BusinessAboutMe({business}) {
    const [isReadMore,setIsReadMore]=useState(false);
    
  return business &&(
    <View>
      
          <Heading text={'About Us'}isViewAll={true}/>
          <Text style={{fontFamily:'outfit',lineHeight:28,fontSize:16,marginLeft:5}} numberOfLines={isReadMore?20:5}>{business?.about}</Text>
          <TouchableOpacity onPress={()=>setIsReadMore(!isReadMore)}>
          <Text style={{fontSize:16, fontFamily:'outfit',marginLeft:5, marginTop:10}}>{isReadMore?'Read Less':'Read More...'}</Text>
          </TouchableOpacity>
    </View>
  )
}