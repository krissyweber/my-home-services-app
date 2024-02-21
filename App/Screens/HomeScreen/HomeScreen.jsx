import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../HomeScreen/Header';
import Slider from '../HomeScreen/Slider';
import Categories from '../HomeScreen/Categories';
import BusinessList from './BusinessList';
import 'react-native-gesture-handler';

export default function HomeScreen() {
  return (
    <ScrollView>
    <View>
      <Header/>

      <View style={{padding:20}}>
      <Slider/>
      <Categories/>
      <BusinessList/>
      </View>

    </View>
    </ScrollView>
  )
}

