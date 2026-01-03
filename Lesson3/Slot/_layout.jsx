import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

const RootLayout = () => {
  return (
    <View style={{flex:1}}>
        <Slot/>
    <View style={styles.container}>
      <Text style={styles.footer}>Footer Page</Text>
    </View>
    </View>
  )
}

export default RootLayout

const styles = StyleSheet.create({
    container:{
      backgroundColor:"#000",
      width:"full",
      height:30,
      alignItems:"center",
    justifyContent:"center"
    },
    footer:{
       color:"#fff" ,
       marginVertical:3
       
    }

})
