import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './pages/Landing';
import Start from './pages/Start';
import Login from './pages/Login/Login';
import ForgotPassword from './pages/Login/ForgotPassword';
import IndivSignUp1 from './pages/SignUp/Individual/IndivSignUp1';
import IndivSignUp2 from './pages/SignUp/Individual/IndivSignUp2';
import IndivSignUp3 from './pages/SignUp/Individual/IndivSignUp3';
import IndivSignUp4 from './pages/SignUp/Individual/IndivSignUp4';
import CorpSignUp1 from './pages/SignUp/Corporate/CorpSignUp1';
import CorpSignUp2 from './pages/SignUp/Corporate/CorpSignUp2';
import CorpSignUp3 from './pages/SignUp/Corporate/CorpSignUp3';
import CorpSignUp4 from './pages/SignUp/Corporate/CorpSignUp4';
import CorpSignUp5 from './pages/SignUp/Corporate/CorpSignUp5';
import CorpSignUp6 from './pages/SignUp/Corporate/CorpSignUp6';
import CorpSignUp7 from './pages/SignUp/Corporate/CorpSignUp7';
import QuickQuotation1 from './pages/Booking/QuickQuotation/QuickQuotation1';
import QuickQuotation2 from './pages/Booking/QuickQuotation/QuickQuotation2';
import QuickQuotation3 from './pages/Booking/QuickQuotation/QuickQuotation3';
import QuickQuotation4 from './pages/Booking/QuickQuotation/QuickQuotation4';
import Exclusive1 from './pages/Booking/Exclusive/Exclusive1';
import Exclusive2 from './pages/Booking/Exclusive/Exclusive2';
import Exclusive3 from './pages/Booking/Exclusive/Exclusive3';
import Exclusive4 from './pages/Booking/Exclusive/Exclusive4';
import Dashboard from './pages/Dashboard';
import Booking from './pages/Booking/Booking';

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

// create Stack Navigation
const Stack = createStackNavigator();

export default class App extends Component{
  render() {
    return (
    // put pages in the Stack for the Navigation
    <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator initialRouteName="Exclusive4" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="Start" component={Start} options={{ cardStyleInterpolator: forFade, gestureEnabled: false }} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="IndivSignUp1" component={IndivSignUp1} options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="IndivSignUp2" component={IndivSignUp2} />
          <Stack.Screen name="IndivSignUp3" component={IndivSignUp3} />
          <Stack.Screen name="IndivSignUp4" component={IndivSignUp4} />
          <Stack.Screen name="CorpSignUp1" component={CorpSignUp1} options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="CorpSignUp2" component={CorpSignUp2} />
          <Stack.Screen name="CorpSignUp3" component={CorpSignUp3} />
          <Stack.Screen name="CorpSignUp4" component={CorpSignUp4} />
          <Stack.Screen name="CorpSignUp5" component={CorpSignUp5} />
          <Stack.Screen name="CorpSignUp6" component={CorpSignUp6} />
          <Stack.Screen name="CorpSignUp7" component={CorpSignUp7} />
          <Stack.Screen name="QuickQuotation1" component={QuickQuotation1} />
          <Stack.Screen name="QuickQuotation2" component={QuickQuotation2} />
          <Stack.Screen name="QuickQuotation3" component={QuickQuotation3} />
          <Stack.Screen name="QuickQuotation4" component={QuickQuotation4} />
          <Stack.Screen name="Exclusive1" component={Exclusive1} />
          <Stack.Screen name="Exclusive2" component={Exclusive2} />
          <Stack.Screen name="Exclusive3" component={Exclusive3} />
          <Stack.Screen name="Exclusive4" component={Exclusive4} />
          <Stack.Screen name="Booking" component={Booking} />
          <Stack.Screen name="Dashboard" component={Dashboard} options={{ gestureEnabled: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}