import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Heading from '../../Components/Heading'
import GlobalApi from '../Utils/GlobalApi'
import BusinessListSmall from './BusinessListSmall';
import 'react-native-gesture-handler';

export default function BusinessList() {

const [businessList, setBusinessList]=useState([]);
    useEffect(()=>{
        getBusinessList();
    },[])

const getBusinessList=()=>{
    GlobalApi.getBusinessList().then(resp=>{
        console.log(resp);
        setBusinessList(resp.businessLists)
    })
}

  return (
    <View style={{marginTop:10}}>
      <Heading text={'Recommended Businesses'}isViewAll={true}/>

      <FlatList
        data={businessList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>(
            <View style={{marginRight:10}}>
                <BusinessListSmall business={item}/>
                </View>
        )}
      />
    </View>
  )
}