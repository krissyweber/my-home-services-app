import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'
import 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';



export default function BusinessListItem({business, booking}) {
  const navigation=useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.push('Business-details',
    { business:business })}>
      
      <Image source={{uri:business?.images[0]?.url}} 
     style={{width:100, height:100, borderRadius:10}} />

     <View style={styles.subContainer}>
     <Text style={{fontSize:20, fontFamily:'outfit'}}>{business?.name}</Text>
        <Text style={{fontSize:18, fontFamily:'outfit'}}>{business?.contact}</Text>
       {!booking?.id?<Text style={{fontSize:18, fontFamily:'outfit'}}><MaterialIcons name="location-pin" size={26} color="black" />
        {business?.address}</Text>
        :
        <Text style={[{ padding:5,borderRadius:5,fontSize:14, alignSelf:'flex-start'},
              booking?.bookingStatus=='Completed'?
            {backgroundColor:Colors.LIGHTGREEN,color:Colors.WHITE}:
            booking.bookingStatus=='Canceled'?
            {backgroundColor:Colors.RED,color:Colors.WHITE}:
            {color:Colors.WHITE,backgroundColor:Colors.PRIMARY}]}>
                {booking?.bookingStatus}</Text>
            }

            {booking?.id?
            <Text style={{fontFamily:'outfit', color:Colors.GREY,fontSize:16}}>
          <AntDesign name="calendar" size={24} color={Colors.PRIMARY} style={{marginRight:15}}/>
            {booking.date} at {booking.time}</Text> :null}
      </View>
      
    </TouchableOpacity>
  )
}

const styles= StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:Colors.WHITE,
        borderRadius:10,
        marginBottom:15,
        display:'flex',
        flexDirection:'row',
        gap:10
    },
    subContainer:{
      display:'flex',
      gap:5
    }
})