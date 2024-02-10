import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';
import { StyleSheet } from 'react-native';
import Colors from '../../Screens/Utils/Colors';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Header() {
    const{user, isLoading}=useUser();
  return user&&(
    
    //Profile Section

    <View style={styles.container}>
      <View style={styles.profileMainContainer}>
      <View style={styles.profileContainer}>
        <Image source={{uri:user?.imageUrl}} style={styles.userImage}/>
        <View>
        <Text style={{color:Colors.WHITE}}>Welcome,</Text>
        <Text style={{color:Colors.WHITE, fontSize:20}}>{user?.fullName}</Text>
        </View>
      </View>
      <Feather name="bookmark" size={30} color="white" />
      </View>

    {/* Search Bar */}

    <View style={styles.searchBarContainer}>
     <TextInput placeholder='Search...' style={styles.textInput} />
     <AntDesign name="search1" size={24} color="white" style={styles.searchButton}/> 
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      padding:20,
      paddingTop:40,
      backgroundColor: Colors.PRIMARY,
      borderBottomLeftRadius:25,
      borderBottomRightRadius:25
    },
  
    profileMainContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        justifyContent:'space-between'
    },
    profileContainer:{
      display:'flex',
      flexDirection:'row',
      gap:10
  },
    textInput:{
      padding:7,
      paddingHorizontal:16,
      backgroundColor:Colors.WHITE,
      borderRadius:8,
      width:'85%',
      fontSize:19
    },
    searchBarContainer:{
      marginTop:15,
      display:'flex',
      flexDirection:'row',
      gap:10
   } , 
   searchButton:{
      backgroundColor:Colors.PRIMARY,
      padding:10,
      borderRadius:8
   },
    userImage:{
        height:45,
        width:45,
        borderRadius:99
    }
})