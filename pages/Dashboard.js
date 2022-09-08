import React, { Component } from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Components/Home';

const Tab = createBottomTabNavigator();

export default class Dashboard extends Component{
  render() {
    return (
      <Tab.Navigator
        initialRoute="Home" 
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            let image;
            if (route.name === 'Home') {
              image = require('../assets/icons/home.png');
            }

            return <Image source={image} style={{width: 20, height:20, marginTop:'4%', marginBottom: '3%'}} />;
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
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
      </Tab.Navigator>
    );
  }
}