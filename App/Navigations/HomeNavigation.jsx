import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BusinessListByCategory from '../Screens/BusinessScreen/BusinessListByCategory';
import 'react-native-gesture-handler';
import BusinessDetails from '../Screens/BusinessDetailsScreen/BusinessDetails';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  
  return (
   <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Business-List" component={BusinessListByCategory} />
    <Stack.Screen name="Business-details" component={BusinessDetails} />
   </Stack.Navigator>
  )
}