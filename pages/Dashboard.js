import React, { Component } from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Components/Home';
import Calendar from './Components/Calendar';
import Messages from './Components/Messages';
import Notification from './Components/Notification';
import Profile from './Components/Profile';


const Tab = createBottomTabNavigator();

export default class Dashboard extends Component{
  render() {
    return (
      <Tab.Navigator
        initialRoute="Home" 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let image;
            let width;
            let height;
            if (route.name === 'Home') {
              image = focused 
                ? require('../assets/icons/home-active.png')
                : require('../assets/icons/home.png')
              width = 20;
              height = 20;              
            } else if(route.name === 'Calendar') {
              image = focused 
                ? require('../assets/icons/calendar-active.png')
                : require('../assets/icons/calendar.png')
              width = focused 
                ? 25 : 20
              height = focused 
                ? 25 : 20
            } else if(route.name === 'Messages') {
              image = focused 
                ? require('../assets/icons/messages-active.png')
                : require('../assets/icons/messages.png')
              width = 22;
              height = 23;  
            } else if(route.name === 'Notification') {
              image = focused 
                ? require('../assets/icons/notification-active.png')
                : require('../assets/icons/notification.png')
              width = 18;
              height = 23;  
            } else if(route.name === 'Profile') {
              image = focused 
                ? require('../assets/icons/profile-active.png')
                : require('../assets/icons/profile.png')
              width = 20;
              height = 23;  
            }
            return <Image source={image} style={{width: width, height: height, marginTop:'5%', marginBottom: '3%'}} />;
          },
          tabBarActiveTintColor: 'rgb(112, 112, 112)',
          tabBarInactiveTintColor: 'white',
          shifting: true,
          headerShown: false,
          tabBarStyle: {
            borderTopColor: '#1B2027',
            backgroundColor: '#1B2027',
            shadowColor: '#171717',
            shadowOffset: {height: -3},
            shadowOpacity: 0.3,
          } 
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{ gestureEnabled: false }}/>
        <Tab.Screen name="Calendar" component={Calendar} options={{ gestureEnabled: false }}/>
        <Tab.Screen name="Messages" component={Messages} options={{ gestureEnabled: false }}/>
        <Tab.Screen name="Notification" component={Notification} options={{ gestureEnabled: false }}/>
        <Tab.Screen name="Profile" component={Profile} options={{ gestureEnabled: false }}/>
      </Tab.Navigator>
    );
  }
}