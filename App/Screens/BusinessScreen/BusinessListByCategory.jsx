import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import BusinessListItem from './BusinessListItem';
import GlobalApi from '../Utils/GlobalApi';
import PageHeading from '../../Components/PageHeading';

export default function BusinessListByCategory() {
  const [businessList, setBusinessList] = useState([]);
    const params = useRoute().params;
    const navigation=useNavigation();
    useEffect(()=>{
      if (params){
          getBusinessByCategory();
      }
    },[params]);
    

    const getBusinessByCategory=()=>{
      GlobalApi.getBusinessListByCategory(params.category).then(resp=>{
        setBusinessList(resp.businessLists);
      }).catch(error =>{
        console.error('Failed to fetch business list', error);
      });
      
    };
  return (
    <View style={{padding:20, paddingTop:30}}>
      <PageHeading title={params.category}/>
        <TouchableOpacity style={{display:'flex', flexDirection:'row',gap:10, alignItems:'center'}}
        onPress={()=>navigation.goBack()}>

      <Feather name="arrow-left-circle" size={24} color="black" />
      <Text style={{fontSize:25,fontFamily:'outfit-med'}}>{params?.category}</Text>
    </TouchableOpacity>
   {businessList?.length>0? <FlatList
    data={businessList}
    style={{marginTop:15}}
    renderItem={({item,index})=>(
      <BusinessListItem business={item}/>
    )}
    />:
    <Text style={{fontSize:20, fontFamily:'outfit-med',textAlign:'center', marginTop:'20%' }}>No Businesses Found...</Text>}
    </View>
  )
}