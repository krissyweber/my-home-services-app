import { View, Text, color, size } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BookingScreen from '../Screens/BookingScrren/BookingScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../Screens/Utils/Colors';


const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false, tabBarActiveTintColor:Colors.WHITE}}>
        <Tab.Screen name='home' component={HomeScreen}
        options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color, fontSize:12, marginTop:-7}}>Home</Text>
            ),
            tabBarIcon:({color, size})=>(
            <AntDesign name="home" size={size} color={color} />
            )
        }}/>

        <Tab.Screen name='profile' component={ProfileScreen}
        options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color, fontSize:12, marginTop:-7}}>Profile</Text>
                ),
                tabBarIcon:({color, size})=>(
                <AntDesign name="user" size={size} color={color} />
                )
            }}/>
        <Tab.Screen name='booking' component={BookingScreen}
        options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color, fontSize:12, marginTop:-7}}>Booking</Text>
                ),
                tabBarIcon:({color, size})=>(
                    <AntDesign name="book" size={size} color={color} />
                )
            }}/>

    </Tab.Navigator>
  )
}