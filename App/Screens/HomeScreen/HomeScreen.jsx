import { View, Text } from 'react-native'
import React from 'react'
import Header from '../HomeScreen/Header';
import Slider from '../HomeScreen/Slider';

export default function HomeScreen() {
  return (
    <View>
      <Header/>

      <View style={{padding:20}}>
      <Slider/>
      </View>

    </View>
  )
}