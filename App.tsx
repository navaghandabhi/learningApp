import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useMemo, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import CustomDrawer from './src/Components/CustomDrawer';
import Profile from './src/screens/Profile';
import Messages from './src/screens/Messages';
import Setting from './src/screens/Setting';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AppContext } from './src/data/Contexts/AppContext';
import LightTheme from './src/data/theme/LightTheme';
import { DarkTheme } from './src/data/theme/DarkTheme';
import { useColorScheme } from 'react-native';
import Calculator from './src/screens/Calculator';
import Weather from './src/screens/Weather';
import StopwatchView from './src/screens/StopwatchView';
import TimerView from './src/screens/TimerView';
import ImagePickerView from './src/screens/ImagePickerView';
import DateAndTimePickers from './src/screens/DateAndTimePickers';

export const Drawer = createDrawerNavigator();


export type DrawerParamList = {
  Home: undefined;
  Profile: undefined;

};
function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const appContext = useMemo(() => {
    return { isDarkMode, setDarkMode };
  }, [])

  const colorScheme = useColorScheme();

  return (
    <NavigationContainer theme={colorScheme === "dark" ? DarkTheme : LightTheme}>
      <AppContext.Provider value={appContext}>
        <Drawer.Navigator
          initialRouteName='Home'
          screenOptions={{
            drawerActiveBackgroundColor: '#E36414',
            drawerActiveTintColor: 'white',
            drawerInactiveTintColor: '#2B2A4C',
            drawerLabelStyle: {
              marginLeft: -25,
              fontSize: 15,
              fontFamily: 'Roboto-Medium'
            }
          }}
          drawerContent={(props) => <CustomDrawer props={props} />}>
          <Drawer.Screen name="Home" component={HomeScreen} options={{
            headerShown: false,
            title: "Home Screen",
            drawerIcon: ({ color, size }) => (<Icon name='home' color={color} size={size}></Icon>)
          }} />
          <Drawer.Screen name="Profile" component={Profile} options={{
            title: "Profile",
            drawerIcon: ({ color, size }) => (<Icon name='person' color={color} size={size}></Icon>)
          }} />
          <Drawer.Screen name="Messages" component={Messages} options={{
            title: "Messages",
            drawerIcon: ({ color, size }) => (<Icon name='message' color={color} size={size}></Icon>)
          }} />
          <Drawer.Screen name="Setting" component={Setting} options={{
            title: "Setting",
            drawerIcon: ({ color, size }) => (<Icon name='settings' color={color} size={size}></Icon>)
          }} />
          <Drawer.Screen name="Calculator" component={Calculator} options={{
            title: "Calculator",
            drawerIcon: ({ color, size }) => (<Icon name='calculate' color={color} size={size}></Icon>)
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
            drawerIcon: ({ color, size }) => (<Icon name='calendar-month' color={color} size={size}></Icon>)
          }} />
        </Drawer.Navigator>
      </AppContext.Provider>
    </NavigationContainer>
  )
}

export default App;