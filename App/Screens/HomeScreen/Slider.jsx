import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../Utils/GlobalApi'
import { StyleSheet } from 'react-native';
import Heading from '../../Components/Heading';
import 'react-native-gesture-handler';

export default function Slider() {

    const[slider,setSlider]=useState([]);
    useEffect(()=>{
        getSliders();
    },[])
    const getSliders=()=>{
        GlobalApi.getSlider().then(resp=>{
            setSlider(resp?.sliders)
        })
    }
  return (
    <View>

      <Heading text={'Offers For You'} isViewAll={true}/>
      
      <FlatList
      data={slider}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index})=>(
        <View style={{marginRight:10}}>
          <Image source={{uri:item?.image?.url}}
          style={styles.sliderImage}/>
          </View>
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    fontSize:20,
    fontFamily:'outfit-med',
    marginBottom:10
  },
  sliderImage:{
    width:150,
    height:120,
    borderRadius:20,
    objectFit:'contain'
  }
})