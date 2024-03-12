import { View, Text } from 'react-native'
import React from 'react'
import BookingScreen from '../Screens/BookingScrren/BookingScreen'
import BusinessDetails from '../Screens/BusinessDetailsScreen/BusinessDetails'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function BookingNavigation() {
  

  return (
    <Stack.Navigator screenOptions={{ headerShown:false}}>
        <Stack.Screen name='booking' component={BookingScreen}/>

        <Stack.Screen name='Business-details' component={BusinessDetails}/>

    </Stack.Navigator>
  )
}