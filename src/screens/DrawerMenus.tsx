import { StyleSheet } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import Setting from './Setting';
import Dashboard from './Dashboard';
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from './Profile';
import Calculator from './Calculator';
import Weather from './Weather';
import { PermissionsAndroid } from 'react-native';
import { PERMISSIONS } from 'react-native-permissions';
import { AppContext } from '../data/Contexts/AppContext';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../Components/CustomDrawer';
import VideoViewer from './VideoViewer';
import Messages from './Messages';
import StopwatchView from './StopwatchView';
import DateAndTimePickers from './DateAndTimePickers';
import ImagePickerView from './ImagePickerView';
import TimerView from './TimerView';
import ApiIntegration from './ApiIntegration';
import FlatLIst from './FlatLIst';
import TicTacToe from './TicTacToe';
import CustomHome from './CustomHome';

export const Drawer = createDrawerNavigator();

function DrawerMenus() {
  const [isDarkMode, setDarkMode] = useState(false);
  const appContext = useMemo(() => {
    return { isDarkMode, setDarkMode };
  }, [])
  const requestPermission = () => {
    PermissionsAndroid.check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((value) => {
      // console.log("Permission : ",value)
      if (value == false) {
        PermissionsAndroid.request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      }
    })
  }
  useEffect(() => {
    requestPermission()
  }, [])
  return (
    <AppContext.Provider value={appContext}>
      <Drawer.Navigator
        initialRouteName='HomeScreen'
        screenOptions={({navigation}) => ({
          drawerActiveBackgroundColor: '#E36414',
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: '#2B2A4C',
          // headerLeft: (props) => <Icon name='home' style={styles.iconMenu} onPress={() => { navigation.toggleDrawer()}} size={26}></Icon>,
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 15,
            fontFamily: 'Roboto-Medium'
          }
        })}
        drawerContent={(props) => <CustomDrawer props={props} />}>
        <Drawer.Screen name="HomeScreen" component={Dashboard} options={{
          // headerShown: false,
          title: "Home Screen",
          drawerIcon: ({ color, size }) => (<Icon name='home' color={color} size={size}></Icon>)
        }} />
        <Drawer.Screen name="TicTacToe" component={TicTacToe} options={{
          title: "TicTacToe",
          drawerIcon: ({ color, size }) => (<MIcon name='gamepad-square-outline' color={color} size={size}></MIcon>)
        }} />
        <Drawer.Screen name="CustomHome" component={CustomHome} options={{
          title: "Custom Home",
          drawerIcon: ({ color, size }) => (<Icon name='home-outline' color={color} size={size}></Icon>)
        }} />
        <Drawer.Screen name="FlatLIst" component={FlatLIst} options={{
          title: "FlatLIst",
          drawerIcon: ({ color, size }) => (<Icon name='list' color={color} size={size}></Icon>)
        }} />
        <Drawer.Screen name="VideoViewer" component={VideoViewer} options={{
          title: "VideoViewer",
          drawerIcon: ({ color, size }) => (<Icon name='videocam' color={color} size={size}></Icon>)
        }} />
        <Drawer.Screen name="ApiIntegration" component={ApiIntegration} options={{
          title: "ApiIntegration",
          drawerIcon: ({ color, size }) => (<MIcon name='database' color={color} size={size}></MIcon>)
        }} />
        <Drawer.Screen name="Profile" component={Profile} options={{
          title: "Profile",
          drawerIcon: ({ color, size }) => (<Icon name='person' color={color} size={size}></Icon>)
        }} />
        <Drawer.Screen name="Messages" component={Messages} options={{
          title: "Messages",
          drawerIcon: ({ color, size }) => (<MIcon name='message' color={color} size={size}></MIcon>)
        }} />
        <Drawer.Screen name="Setting" component={Setting} options={{
          title: "Setting",
          drawerIcon: ({ color, size }) => (<Icon name='settings' color={color} size={size}></Icon>)
        }} />
        <Drawer.Screen name="Calculator" component={Calculator} options={{
          title: "Calculator",
          drawerIcon: ({ color, size }) => (<MIcon name='calculator' color={color} size={size}></MIcon>)
        }} />
        <Drawer.Screen name="Weather" component={Weather} options={{
          title: "Weather",
          drawerIcon: ({ color, size }) => (<Icon name='cloud' color={color} size={size}></Icon>)
        }} />
        <Drawer.Screen name="StopwatchView" component={StopwatchView} options={{
          title: "StopwatchView",
          drawerIcon: ({ color, size }) => (<Icon name='timer' color={color} size={size}></Icon>)
        }} />
        <Drawer.Screen name="TimerView" component={TimerView} options={{
          title: "TimerView",
          drawerIcon: ({ color, size }) => (<Icon name='timer' color={color} size={size}></Icon>)
        }} />
        <Drawer.Screen name="ImagePickerView" component={ImagePickerView} options={{
          title: "ImagePickerView",
          drawerIcon: ({ color, size }) => (<Icon name='image' color={color} size={size}></Icon>)
        }} />
        <Drawer.Screen name="DateAndTimePickers" component={DateAndTimePickers} options={{
          title: "DateAndTimePickers",
          drawerIcon: ({ color, size }) => (<Icon name='calendar' color={color} size={size}></Icon>)
        }} />
      </Drawer.Navigator>
    </AppContext.Provider>

  )
}
export default DrawerMenus;

const styles = StyleSheet.create({
  iconMenu: {
    paddingLeft: 8,
  },
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