import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './scc/screens/HomeScreen';
import CustomDrawer from './scc/Components/CustomDrawer';
import Profile from './scc/screens/Profile';
import Messages from './scc/screens/Messages';
import Setting from './scc/screens/Setting';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Drawer = createDrawerNavigator();


export type DrawerParamList = {
  Home: undefined;
  Profile: undefined;

};
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Home'
        screenOptions={{
          drawerActiveBackgroundColor:'#E36414',
          drawerActiveTintColor:'white',
          drawerInactiveTintColor:'#2B2A4C',
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 15,
            fontFamily:'Roboto-Medium'
          }
        }}
        drawerContent={(props) => <CustomDrawer props={props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{
          // headerShown: false,
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
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;