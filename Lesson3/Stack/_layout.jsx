import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

const RootLayout = () => {
  return (
  
        <Stack screenOptions={{
            headerStyle:{backgroundColor:"#ddd"},
            headerTintColor:"#333",
            
        }}>
          <Stack.Screen name="index" options={{title:"Home"}} />    
          <Stack.Screen name="about" options={{title:"About",headerShown:false}} />

                    
        </Stack>
  
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
