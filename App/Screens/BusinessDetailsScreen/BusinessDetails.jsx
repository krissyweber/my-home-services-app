import { View, Text, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation,useRoute  } from '@react-navigation/native'
import { Feather, MaterialIcons } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import Colors from '../Utils/Colors';
import BusinessPhotos from './BusinessPhotos';
import BusinessAboutMe from './BusinessAboutMe';
import { ScrollView } from 'react-native-gesture-handler';
import BookingModal from './BookingModal';

export default function BusinessDetails() {
  
    const params=useRoute().params;
    const [business,setBusiness]=useState(params.business);
    const [showModal, setShowModal]=useState(false)
    const navigation=useNavigation();
    useEffect(()=>{

    },[])

  return business && (
    <View>
    <ScrollView style={{height:'91%'}}>

      <TouchableOpacity style={styles.buttonContainer}
        onPress={()=>navigation.goBack()}>
      <Feather name="arrow-left-circle" size={24} color="black" />
    </TouchableOpacity>

    <Image source={{uri:business?.images[0]?.url}}
      style={{width:'100%', height:300}}/>

    <View style={styles.infoContainer}>

    <Text style={{fontSize:22, fontFamily:'outfit-med',marginLeft:5}}>{business?.name}</Text>

    <View style={styles.subContainer}>
        <Text style={{fontSize:18, fontFamily:'outfit',marginLeft:5}}>{business?.contact} 
        <Feather name="star" size={24} color="black" /> </Text>
        <Text style={{fontSize:20, fontFamily:'outfit',marginLeft:5, color:Colors.WHITE, backgroundColor:Colors.PRIMARY,padding:5,borderRadius:5}}>{business?.category.name}</Text>
        </View>
        <Text style={{fontSize:18, fontFamily:'outfit'}}><MaterialIcons name="location-pin" size={26} color="black" />
        {business?.address}</Text>
        
        {/*Horizontal Line*/}
        <View style={{borderWidth:0.4,borderColor:Colors.GREY,marginBottom:20, marginTop:20}}></View>

        {/*About me section*/}
        <BusinessAboutMe business={business}/>

           {/*Horizontal Line*/}
        <View style={{borderWidth:0.4,borderColor:Colors.GREY,marginBottom:20, marginTop:20}}></View>

        <BusinessPhotos business={business}/>
        <BusinessPhotos/>

    </View>
    </ScrollView>

    <View style={{display:'flex',flexDirection:'row', margin:4,gap:5}}>

      <TouchableOpacity style={styles.messageButton}>
        <Text style={{textAlign:'center', fontFamily:'outfit-med', color:Colors.WHITE, fontSize:20}}>Message</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.bookingButton} onPress={()=>setShowModal(true)}>
        <Text style={{textAlign:'center', fontFamily:'outfit-med', color:Colors.WHITE, fontSize:20}}>Book Now</Text>
      </TouchableOpacity> 
    </View>

    {/*Booking Screen Section Modal*/}
    <Modal
    animationType='slide'
    visible={showModal}
    >
      <BookingModal
      businessId={business.id}
      hideModal={()=>setShowModal(false)}/>
    </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  
  infoContainer:{
    padding:20,
    display:'flex',
    gap:7,
    marginLeft:5
  },
  subContainer:{
    display:'flex',
    flexDirection:'row',
    gap:5,
    alignItems:'center'
  },
  buttonContainer:{
    position:'absolute',
    zIndex:10,
    padding:20
  },
  messageButton:{
    padding:15,
    backgroundColor:Colors.PRIMARY,
    borderWidth:1,
    borderColor:Colors.BLACK,
    borderRadius:99,
    flex:1
  },
  bookingButton:{
    padding:15,
    backgroundColor:Colors.PRIMARY,
    borderWidth:1,
    borderColor:Colors.BLACK,
    borderRadius:99,
    flex:1
  }
})