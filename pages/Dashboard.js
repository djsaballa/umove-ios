import React, { Component }  from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { EventRegister } from 'react-native-event-listeners'

import { AuthenticationApi } from '../api/authentication'; 
import { getStorage, setStorage } from '../api/helper/storage';

const bgImage = '../assets/bg-image.png';

export default class QuickQuotation4 extends Component {  
  constructor() {
    super();
    
    this.state = { 
      user: []
    };
  }

  async componentDidMount() {
    this.init();
  }
  
  async init() {
    let user = await getStorage('user');
    this.setState({user})
  }

  async logOut() {
    let user = await getStorage('user');
    await AuthenticationApi.logout(user.refresh);
    this.props.navigation.navigate('Login');
    EventRegister.emit('logout', true);
  }

  render() {
    return(
      <View style={styles.container}>
        <ImageBackground source={require(bgImage)} resizeMode='cover' style={styles.image}>
          <View style={styles.innerContainer}>
            <View style={styles.content}>

              {/* Logo */}
              <View style={styles.alignItemCenter}>
                <Image
                  source={require('../assets/logo/logo.png')}
                  style={styles.logo}
                />
              </View>

              {/* Buttons */}
              <View style={styles.alignItemCenter}>
                <View style={styles.row}>
                  <TouchableOpacity style={styles.loginButton} onPress={() => this.logOut() }>
                    <Text style={styles.buttonText}>Log Out</Text>
                  </TouchableOpacity>
                </View>
              </View>

            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  alignItemCenter: {
    alignItems: 'center',
  },
  logo: {
    height: 50,
    width: 240,
    marginBottom: '15%',
  },
  row: {
    marginTop: '15%',
    flexDirection: 'row',
    alignItems: 'center',    
  },
  quickQuotationButton: {
    marginTop: '35%',
    height: 50,
    width: '55%',
    borderRadius: 10,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'rgb(223,131,68)',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 6},
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
  loginButton: {
    height: 50,
    width: '35%',
    borderRadius: 10,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'rgb(223,131,68)',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 6},
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
  signupButton: {
    marginLeft: '8%',
    height: 50,
    width: '35%',
    borderRadius: 10,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'rgb(223,131,68)',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 6},
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight:'bold'
  },
})