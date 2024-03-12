import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Feather} from '@expo/vector-icons';
import CalendarPicker from 'react-native-calendar-picker';
import Heading from '../../Components/Heading';
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';
import Colors from '../Utils/Colors';
import GlobalApi from '../Utils/GlobalApi';
import moment from 'moment';
import { useUser } from '@clerk/clerk-expo';

export default function BookingModal({businessId, hideModal}) {

  const [timeList, setTimeList]=useState();
  const [selectedTime, setSelectedTime]=useState();
  const [selectedDate, setSelectedDate]=useState();
  const [note, setNote]=useState();
  const {user}=useUser();

  useEffect(()=>{
    getTime();
  },[])

const getTime=()=>{
  const timeList=[];
  for(let i=8;i<=12;i++)
  {
    timeList.push({
      time:i+':00 AM'
    })
    timeList.push({
      time:i+':30 AM'
    })
  }
  for(let i=1;i<=7;i++)
  {
    timeList.push({
      time:i+':00 PM'
    })
    timeList.push({
      time:i+':30 PM'
    })
  }
  setTimeList(timeList);
}

const createNewBooking=()=>{
  if(!selectedTime||!selectedDate)
  {
    ToastAndroid.show('Please select A date and time',ToastAndroid.LONG)
    return;
  }
  const data={
    userName:user?.fullName,
    userEmail:user?.primaryEmailAddress.emailAddress,
    time:selectedTime,
    date:moment(selectedDate).format('DD-MMM-YYYY') ,
    businessId:businessId
  }
  GlobalApi.createBooking(data).then(resp=>{
    console.log("Resp", resp);
    ToastAndroid.show('Booking Completed Successfully!', ToastAndroid.LONG)
    hideModal();
  })
}

  return (
    <ScrollView>
    <KeyboardAvoidingView style={{padding:20}}>
      <TouchableOpacity style={{display:'flex', flexDirection:'row',gap:10, alignItems:'center'}}
        onPress={()=>hideModal()}>

      <Feather name="arrow-left-circle" size={24} color="black" />
      <Text style={{fontSize:25,fontFamily:'outfit-med'}}>Booking</Text>
    </TouchableOpacity>

    {/*Booking Calender Section*/}

    <Heading text={'Please Select a Date'}isViewAll={true}/>
    <View style={styles.calenderContainer}>
      <CalendarPicker
          onDateChange={setSelectedDate}
          width={340}
          minDate={Date.now()}
          todayBackgroundColor={Colors.PINK}
          todayTextStyle={{color:Colors.WHITE}}
          selectedDayColor={Colors.PRIMARY}
          selectedDayTextColor={Colors.WHITE}
        />

    </View>

    {/*Time Selection Section*/}

    <View style={{marginTop:5}}>
    <Heading text={'Please Select a Time'} isViewAll={true}/>
      <FlatList
      data={timeList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index})=>(
        <TouchableOpacity style={{marginRight:10}} onPress={()=>setSelectedTime(item.time)}>
          <Text style={[selectedTime==item.time?styles.timeSelected:styles.timeUnselected]}>
            {item.time}</Text>
        </TouchableOpacity>
      )}
      />
    </View>

    {/*note taking section*/} 

    <View style={{paddingTop:20}}>
      <Heading text={'Notes For Us'}isViewAll={true}/>
      <TextInput placeholder='Notes' 
      numberOfLines={5} multiline={true}
      style={styles.noteArea}
      onChange={(text)=>setNote(text)}/>
    </View>

    {/*confirmation button*/}

    <TouchableOpacity style={{marginTop:15}}
    onPress={()=>createNewBooking()}>
      <Text style={styles.confirmButton}>Confirm & Book</Text>
    </TouchableOpacity>
    </KeyboardAvoidingView>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  timeSelected:{
    padding:5,
    borderWidth:1,
    borderColor:Colors.PRIMARY,
    borderRadius:99,
    paddingHorizontal:18,
    backgroundColor:Colors.PRIMARY,
    color:Colors.WHITE
  },
  timeUnselected:{
    padding:5,
    borderWidth:1,
    borderColor:Colors.PRIMARY,
    borderRadius:99,
    paddingHorizontal:18,
    color:Colors.PRIMARY
  },
  noteArea:{
    borderWidth:1,
    borderRadius:15,
    textAlignVertical:'top',
    padding:20,
    fontSize:16,
    fontFamily:'outfit',
  },
  confirmButton:{
    textAlign:'center',
    fontFamily:'outfit-med',
    fontSize:17,
    backgroundColor:Colors.PRIMARY,
    color:Colors.WHITE,
    padding:13,
    borderRadius:99,
    elevation:3,
  },
  calenderContainer:{
    backgroundColor:Colors.SHELL,
    padding:20,
    borderRadius:15,
  }

})