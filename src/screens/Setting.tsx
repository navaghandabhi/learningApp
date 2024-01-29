import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Switch } from 'react-native-gesture-handler'
import { AppContext } from '../data/Contexts/AppContext'

export default function Setting() {
  // const {isDarkMode,setDarkMode }= useContext(AppContext)
  const [isDarkMode, setDarkMode] = useState(true);
  return (
    <View>

      <View style={styles.switchTile}>
        <Text>Change Theme</Text>
        <Switch value={isDarkMode} onChange={()=>{setDarkMode(prev =>!prev)}}/> 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  switchTile: {
    flex: 1,
    marginTop:50,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})