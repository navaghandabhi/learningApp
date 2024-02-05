import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Setting from './Setting';
import Profile from './Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButton from '../Components/CustomButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
const Tab = createBottomTabNavigator();

export default function Dashboard() {

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

          if (rn === 'MyDashboard') {
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
      <Tab.Screen name="MyDashboard" component={MyDashboard} options={{
        headerShown: false,
      }} />
      <Tab.Screen name="Settings" component={Setting} options={{ headerShown: false, }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false, }} />
      {/* <Tab.Screen name="Calculator" component={Calculator} />
    <Tab.Screen name="Weather" component={Weather} options={{ headerShown: false }} /> */}
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingBottom:100,
    justifyContent: 'space-between'
  },
  userImage: {
    borderRadius: 12,
    borderColor: 'white',
    borderWidth: 5,
    height: 100,
    width: 100,
    margin: 16,
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
},

)

type MyDashboardProps = NativeStackNavigationProp<RootStackParamList, "MyDashboard">
export function MyDashboard({ navigation }: MyDashboardProps) {
  const imageSource = require('../../assets/images/shri_ram.jpg');
  return (

    <ImageBackground source={imageSource} style={{ padding: 20, height: '102%' }}>
      <View style={styles.container}>
        <Text style={{ color: 'white' }}>Jay Shree Ram</Text>
        {/* s<Image style={styles.userImage} source={require('../../assets/images/shri_ram.jpg')} /> */}
        <CustomButton title="Custom Home" onPress={() => {
          navigation.push("CustomHome");
        }} />
      </View>
    </ImageBackground>

  );
}