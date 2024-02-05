import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import DrawerMenus from './src/screens/DrawerMenus';
import LightTheme from './src/data/theme/LightTheme';
import { DarkTheme } from './src/data/theme/DarkTheme';
import { useColorScheme } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostDetailsScreen from './src/screens/PostDetailsScreen';
import { MyDashboard } from './src/screens/Dashboard';
import CustomHome from './src/screens/CustomHome';


export type RootStackParamList = {
  Home: undefined,
  ApiIntegration: undefined,
  PostDetailsScreen: { id: string };
  MyDashboard:undefined;
  CustomHome:undefined;
}
export const Stack = createNativeStackNavigator<RootStackParamList>()
export type DrawerParamList = {
  Home: undefined;
  Profile: undefined;
};
function App() {
  const colorScheme = useColorScheme();
  return (
    <NavigationContainer theme={colorScheme === "dark" ? DarkTheme : LightTheme}>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={DrawerMenus}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='MyDashboard'
          component={MyDashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='CustomHome'
          component={CustomHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='PostDetailsScreen'
          component={PostDetailsScreen}
        //  options={}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;