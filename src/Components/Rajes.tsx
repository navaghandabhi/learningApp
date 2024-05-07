import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'

interface MyRajesProps {
  name: string;
  children?: ReactNode;
}

const MyRajes = ({ name, children }: MyRajesProps) => {
  return (
    <View>
      <Text style={{ color: 'black' }}>{name}</Text>
      <Text style={{ color: 'black' }}>{children}</Text>
    </View>
  )
}

export default MyRajes

const styles = StyleSheet.create({})