import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Setting from './Setting';
import Dashboard from './Dashboard';
import Icon from 'react-native-vector-icons/Ionicons';
import Profile from './Profile';
import Calculator from './Calculator';
import Weather from './Weather';
const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 70,
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          backgroundColor: '#fff',
          borderRadius: 15,
          ...styles.shadow
        },
        tabBarShowLabel: false,
        // tabBarActiveBackgroundColor: '#E36414',
        tabBarActiveTintColor: '#2B2A4C',
        tabBarInactiveTintColor: '#6962AD',

        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'home';
          let rn = route.name;

          if (rn === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline'
          }
          else if (rn === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline'
          }
          else if (rn === 'Profile') {
            iconName = focused ? 'person' : 'person-outline'
          }
          else if (rn === 'Weather') {
            iconName = focused ? 'cloudy' : 'cloudy-outline'
          }
          else if (rn === 'Calculator') {
            iconName = focused ? 'calculator' : 'calculator-sharp'
          }
          return <Icon name={iconName} size={size} color={color}></Icon>
        },
        tabBarLabelStyle: {
          fontSize: 18,
          paddingBottom: 4,
        }
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Settings" component={Setting} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Calculator" component={Calculator} />
      <Tab.Screen name="Weather" component={Weather} />
    </Tab.Navigator>
  )
}
export default HomeScreen;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      height: 10,
      width: 0
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
})