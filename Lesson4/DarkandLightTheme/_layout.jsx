import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { Colors } from '../constants/Colors'
import { StatusBar } from 'expo-status-bar'


const RootLayout = () => {
  
    const colorScheme=useColorScheme()
    const theme=Colors[colorScheme] ?? Colors.light
   
  return (
    <>
    <StatusBar value="auto"/>
  
        <Stack screenOptions={{
            headerStyle:{backgroundColor:theme.navBackground},
            headerTintColor:"#333",
            
        }}>
          <Stack.Screen name="index" options={{title:"Home"}} />    
          <Stack.Screen name="about" options={{title:"About"}} />

                    
        </Stack>
        </>
  
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
