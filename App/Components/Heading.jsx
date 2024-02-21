import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function Heading({text, isViewAll=false}) {
  return (
    <View style={styles.container}>
      {isViewAll&&<Text style={styles.header}>{text}</Text>}
      <Text>View All</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    header:{
      fontSize:20,
      fontFamily:'outfit-med',
      marginBottom:10
    },
    container:{
        marginTop:10,
        display:'flex', 
        flexDirection:'row',
        alignItems:'center', 
        justifyContent:'space-between'
    }
})