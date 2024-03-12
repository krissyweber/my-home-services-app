import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../Utils/GlobalApi'
import { useUser } from '@clerk/clerk-expo'
import { FlatList } from 'react-native';
import BusinessListItem from '../BusinessScreen/BusinessListItem'
import Colors from '../Utils/Colors';

export default function BookingScreen({booking, business}) {

  const {user}=useUser();
  const [bookingList,setBookingList]=useState([])
  const [loading,setLoading]=useState(false)
 
  useEffect(()=>{
    user&&getUserBookings();
  },[user])

  /*get user bookings */

  const getUserBookings=()=>{
    setLoading(true)
    GlobalApi.getUserBookings(user.primaryEmailAddress.emailAddress).then(resp=>{
      console.log(resp);
      setBookingList(resp.bookings);
      setLoading(false)
    })
  }
  return (
    
      <View style={{padding:20}}>
        <Text style={{fontFamily:'outfit-med', fontSize:24}}>My Bookings</Text>
  
      <View>
       {bookingList?.length>0? <FlatList
        data={bookingList}
        onRefresh={()=>getUserBookings()}
        refreshing={loading}
        renderItem={({item,index})=>(
          <BusinessListItem 
          business={item?.businessList}
          booking={item}
          
          />
        )}
        />:
        <Text style={{fontFamily:'outfit-med',fontSize:25,textAlign:'center',marginTop:100}}>No Booking Found...</Text>}
      </View>
      </View>
    )
  }

