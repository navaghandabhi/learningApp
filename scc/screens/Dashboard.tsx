import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Dashboard() {
    const imageSource = require('../../assets/images/shri_ram.jpg');
  return (
    <View>
    <ImageBackground source={imageSource} style={{padding:20,height:'102%'}}>
    <Text style={{color:'white'}}>Jay Shree Ram</Text>
    <Image style={styles.userImage} source={require('../../assets/images/shri_ram.jpg')}/>
    </ImageBackground>
  </View>
  )
}

const styles = StyleSheet.create({ userImage: {
    borderRadius: 12,
    borderColor:'white',
    borderWidth:5,
    height: 100,
    width: 100,
    margin:16,
  },})