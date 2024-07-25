import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View,Text } from 'react-native'
import Splash from './screens/Splash';
import Login from './screens/Login';
import Singup from './screens/Singup';
const Stack=createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Singup' component={Singup}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
