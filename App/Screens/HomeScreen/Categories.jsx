import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import GlobalApi from '../Utils/GlobalApi'
import { useEffect, useState } from 'react'
import Heading from '../../Components/Heading';
import Colors from '../Utils/Colors';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';

export default function Categories() {

    const[categories,setCategory]=useState([]);
    const navigation=useNavigation()
    useEffect(()=>{
        getCategory();
    },[])

    const getCategory=()=>{
        GlobalApi.getCategory().then(resp=>{
            setCategory(resp?.categories)
        })
    }

    
  return (
    <View style={{marginTop:10}}>
      <Heading text={'Categories'}/>

      <FlatList
      data={categories}
      numColumns={4}
      renderItem={({item,index})=>index<=3&&(
        <TouchableOpacity style={styles.container} onPress={()=>navigation.push('Business-List',{category:item.name})}>
        <View style={styles.iconContainer}>
          <Image source={{uri:item?.icon?.url}}
          style={styles.categoryImage}/>
          </View>
          <Text style={{fontFamily:'outfit-med', marginTop:5}}>{item?.name}</Text>
          </TouchableOpacity>
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
        flex:1,
        alignItems:'center'
  },
  iconContainer:{
        backgroundColor:Colors.LIGHTGREY,
        padding:10,
        borderRadius:80
  },
    
    categoryImage:{
        width:50,
        height:50,
        borderRadius:5,
        objectFit:'contain'
      }
})