import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>
      <Link href="/">Index</Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({

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
