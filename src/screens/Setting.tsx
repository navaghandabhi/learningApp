import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Switch } from 'react-native-gesture-handler'
import MyRajes from '../Components/Rajes';

export default function Setting() {
  // const {isDarkMode,setDarkMode }= useContext(AppContext)
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleSwitch1 = () => setDarkMode(previousState => !previousState);

  return (
    <View>
      <View style={styles.switchTile}>
        <Text style={styles.switchTitle}>Change Theme</Text>
        <Switch
          onValueChange={toggleSwitch1}
          value={isDarkMode}
        />
        <MyRajes name='sava'>children</MyRajes>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  switchTitle: {
    color: 'black',
    width: '50%'
  },
  switchTile: {
    // flex: 1,
    marginTop: 50,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})