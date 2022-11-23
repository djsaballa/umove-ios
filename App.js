import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './pages/Landing';
import Start1 from './pages/Start/Start1';
import Start2 from './pages/Start/Start2';
import Login from './pages/Login/Login';
import ForgotPassword from './pages/Login/ForgotPassword';
import IndivSignUp1 from './pages/SignUp/Individual/IndivSignUp1';
import IndivSignUp2 from './pages/SignUp/Individual/IndivSignUp2';
import IndivSignUp3 from './pages/SignUp/Individual/IndivSignUp3';
import CorpSignUp1 from './pages/SignUp/Corporate/CorpSignUp1';
import CorpSignUp2 from './pages/SignUp/Corporate/CorpSignUp2';
import CorpSignUp3 from './pages/SignUp/Corporate/CorpSignUp3';
import CorpSignUp4 from './pages/SignUp/Corporate/CorpSignUp4';
import CorpSignUp5 from './pages/SignUp/Corporate/CorpSignUp5';
import CorpSignUp6 from './pages/SignUp/Corporate/CorpSignUp6';
import QuickQuotation1 from './pages/QuickQuotation/QuickQuotation1';
import QuickQuotation2 from './pages/QuickQuotation/QuickQuotation2';
import QuickQuotation3 from './pages/QuickQuotation/QuickQuotation3';
import QuickQuotation4 from './pages/QuickQuotation/QuickQuotation4';
import CorpExclusive1 from './pages/CorporateSide/CorpBooking/Exclusive/CorpExclusive1';
import CorpExclusive2 from './pages/CorporateSide/CorpBooking/Exclusive/CorpExclusive2';
import CorpExclusive3 from './pages/CorporateSide/CorpBooking/Exclusive/CorpExclusive3';
import CorpExclusive4 from './pages/CorporateSide/CorpBooking/Exclusive/CorpExclusive4';
import CorpExclusive5 from './pages/CorporateSide/CorpBooking/Exclusive/CorpExclusive5';
import CorpExclusive6 from './pages/CorporateSide/CorpBooking/Exclusive/CorpExclusive6';
import CorpDashboard from './pages/CorporateSide/CorpDashboard';
import IndivDashboard from './pages/IndividualSide/IndivDashboard';


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
        <StatusBar style="dark" />
        <Stack.Navigator initialRouteName="Landing" screenOptions={{headerShown: false}} >
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="Start1" component={Start1} options={{ cardStyleInterpolator: forFade, gestureEnabled: false }} />
          <Stack.Screen name="Start2" component={Start2} options={{ cardStyleInterpolator: forFade}} />
          <Stack.Screen name="Login" component={Login} options={{ cardStyleInterpolator: forFade, gestureEnabled: false }} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="IndivSignUp1" component={IndivSignUp1} options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="IndivSignUp2" component={IndivSignUp2} />
          <Stack.Screen name="IndivSignUp3" component={IndivSignUp3} />
          <Stack.Screen name="CorpSignUp1" component={CorpSignUp1} options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="CorpSignUp2" component={CorpSignUp2} />
          <Stack.Screen name="CorpSignUp3" component={CorpSignUp3} />
          <Stack.Screen name="CorpSignUp4" component={CorpSignUp4} />
          <Stack.Screen name="CorpSignUp5" component={CorpSignUp5} />
          <Stack.Screen name="CorpSignUp6" component={CorpSignUp6} />
          <Stack.Screen name="QuickQuotation1" component={QuickQuotation1} options={{ cardStyleInterpolator: forFade, gestureEnabled: false }} />
          <Stack.Screen name="QuickQuotation2" component={QuickQuotation2} />
          <Stack.Screen name="QuickQuotation3" component={QuickQuotation3} />
          <Stack.Screen name="QuickQuotation4" component={QuickQuotation4} />
          <Stack.Screen name="CorpExclusive1" component={CorpExclusive1} />
          <Stack.Screen name="CorpExclusive2" component={CorpExclusive2} />
          <Stack.Screen name="CorpExclusive3" component={CorpExclusive3} />
          <Stack.Screen name="CorpExclusive4" component={CorpExclusive4} />
          <Stack.Screen name="CorpExclusive5" component={CorpExclusive5} />
          <Stack.Screen name="CorpExclusive6" component={CorpExclusive6} options={{ gestureEnabled: false }} />
          <Stack.Screen name="CorpDashboard" component={CorpDashboard} options={{ gestureEnabled: false }} />
          <Stack.Screen name="IndivDashboard" component={IndivDashboard} options={{ gestureEnabled: false }} />

          {/* There are Pages in the Archive and Hidden Folder */}

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
