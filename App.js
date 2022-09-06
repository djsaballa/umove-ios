import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Start from './pages/Start';
import Login from './pages/Login/Login';
import ForgotPassword from './pages/Login/ForgotPassword';
import SignUp1 from './pages/SignUp/SignUp1';
import SignUp2 from './pages/SignUp/SignUp2';
import SignUp3 from './pages/SignUp/SignUp3';
import SignUp4 from './pages/SignUp/SignUp4';
import QuickQuotation1 from './pages/Booking/QuickQuotation/QuickQuotation1';
import QuickQuotation2 from './pages/Booking/QuickQuotation/QuickQuotation2';
import QuickQuotation3 from './pages/Booking/QuickQuotation/QuickQuotation3';
import QuickQuotation4 from './pages/Booking/QuickQuotation/QuickQuotation4';
import Booking from './pages/Booking/Booking';
import Dashboard from './pages/Dashboard';

// create Stack Navigation
const Stack = createStackNavigator();

export default class App extends Component{
  render() {
    return (
    // put pages in the Stack for the Navigation
    <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator initialRouteName="Start" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="SignUp1" component={SignUp1} />
          <Stack.Screen name="SignUp2" component={SignUp2} />
          <Stack.Screen name="SignUp3" component={SignUp3} />
          <Stack.Screen name="SignUp4" component={SignUp4} />
          <Stack.Screen name="QuickQuotation1" component={QuickQuotation1} />
          <Stack.Screen name="QuickQuotation2" component={QuickQuotation2} />
          <Stack.Screen name="QuickQuotation3" component={QuickQuotation3} />
          <Stack.Screen name="QuickQuotation4" component={QuickQuotation4} />
          <Stack.Screen name="Booking" component={Booking} />
          <Stack.Screen name="Dashboard" component={Dashboard} options={{gestureEnabled: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}