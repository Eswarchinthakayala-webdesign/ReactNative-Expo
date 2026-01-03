import {StyleSheet,Image, View, Text } from 'react-native'
import React from 'react'
import Logo from "../assets/icon.png"
import { Link } from 'expo-router'

const Home = () => {
  return (
    <View style={styles.container} >
        <Image source={Logo} style={styles.img}/>
      <Text style={styles.title}>The Number 1</Text>

      <Text style={{fontWeight:500,margin:10}}>Reading List App</Text>

     <Link href="/about">About Page</Link>

    </View>
  )
}

export default Home

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  title:{
    fontWeight:"bold",
    fontSize:18,
  },
  card:{
   
    backgroundColor:"#000",
    padding:2,
    borderRadius:5,
    boxShadow:"0px 0px 2px #0f0",  
  },
  img:{
    marginVertical:10,
    height:200,
    width:200,
    borderRadius:18,
  }
})

