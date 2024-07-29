import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View,Text } from 'react-native'
import Splash from './screens/Splash';
import Login from './screens/Login';
import Singup from './screens/Singup';
// import MainScreen from './screens/MainScreen';
// import Sidebar from './screens/Sidebar';
// import HomeScreen from './sideScreen/HomeScreen';
import Home from './bottom/Home';
import Dashboard from './screens/Dashboard';
const Stack=createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Singup' component={Singup}/>
        {/* <Stack.Screen name='MainScreen' component={MainScreen}/> */}
        {/* <Stack.Screen name='Sidebar' component={Sidebar}/> */}
        {/* <Stack.Screen name='HomeScreen' component={HomeScreen}/> */}
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Dashboard' component={Dashboard}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
