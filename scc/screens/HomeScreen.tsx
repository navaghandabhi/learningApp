import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Setting from './Setting';
import Dashboard from './Dashboard';
import Icon from 'react-native-vector-icons/Ionicons';
import Profile from './Profile';
const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 70
        },
        tabBarActiveBackgroundColor: '#E36414',
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#2B2A4C',
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
          return <Icon name={iconName} size={size} color={color}></Icon>
        },
        tabBarLabelStyle: {
          fontSize: 18,
          paddingBottom: 4
        }
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
      <Tab.Screen name="Settings" component={Setting} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}
export default HomeScreen;

