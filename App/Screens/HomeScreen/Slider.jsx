import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../Utils/GlobalApi'
import { StyleSheet } from 'react-native';

export default function Slider() {

    const[slider,setSlider]=useState([]);
    useEffect(()=>{
        getSliders();
    },[])
    const getSliders=()=>{
        GlobalApi.getSlider().then(resp=>{
            console.log("resp", resp.sliders);
            setSlider(resp?.sliders)
        })
    }
  return (
    <View>
      <Text style={styles.header}>Offers For You</Text>
      <FlatList
      data={slider}
      horizontal={true}
      renderItem={({item,index})=>(
        <View style={{marginRight:20}}>
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
    width:270,
    height:150,
    borderRadius:20,
    objectFit:'contain'
  }
})