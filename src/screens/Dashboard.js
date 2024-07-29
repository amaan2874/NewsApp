import React from 'react'
import { Text, View,Image } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../bottom/Home';
import Explore from '../bottom/Explore';
import Bookmark from '../bottom/Bookmark';
import Profile from '../bottom/Profile';

const Tab = createBottomTabNavigator();
const Dashboard = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor:'#1877F2',
            tabBarInactiveTintColor:'black',
            headerShown:false
          }}>
            <Tab.Screen name='Home' component={Home}
            options={{
                tabBarIcon: () => (
                    <Image source={require('../assets/icons/home.png')}
                    style={{ height: 30, width: 30 }} />
                )
            }}
            />
            <Tab.Screen name='Explore' component={Explore}
                options={{
                    tabBarIcon: () => (
                        <Image source={require('../assets/icons/explore.png')}
                        style={{ height: 30, width: 30 }} />
                    )
                }}
            />
            <Tab.Screen name='Bookmark' component={Bookmark}
                options={{
                    tabBarIcon: () => (
                        <Image source={require('../assets/icons/bookmark.png')}
                        style={{ height: 30, width: 30 }} />
                    )
                }}
            />
            <Tab.Screen name='Profile' component={Profile}
                options={{
                    tabBarIcon: () => (
                        <Image source={require('../assets/icons/profile.png')}
                        style={{ height: 30, width: 30 }} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Dashboard
