import React, { Component }  from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Image, Modal, TouchableWithoutFeedback } from 'react-native';
import { EventRegister } from 'react-native-event-listeners'

import { getStorage, setStorage } from '../api/helper/storage';

const bgImage = '../assets/bg-image.png';

export default class Start extends Component {  
  constructor() {
    super();
    
    this.state = { 
      username: '',
      password: '', 
      remember: false,
      error: false,
      data: [],
    };
  }

  async componentDidMount() {
    this.loggedOut();
  }

  componentWillUnmount() {
    EventRegister.removeEventListener(this.listener)
  }

  async componentDidUpdate() {
    if(this.state.remember || !this.state.remember) {
      await setStorage('remember', JSON.stringify(this.state.remember));
    }
  }
  
  async loggedOut() {
    if (!this.listener) {
      this.listener = EventRegister.addEventListener('logout', (data) => {
        this.setState({username: ''})
        this.setState({password: ''})
        this.setState({remember: false})
      });
    }
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
                  <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Login</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.quickQuoteButton} onPress={() => this.props.navigation.navigate('QuickQuotation1')}>
                    <Text style={styles.buttonText}>Quick Quote</Text>
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
    marginTop: '20%'
  },
  row: {
    marginTop: '80%',
    flexDirection: 'row',
    alignItems: 'center',    
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
  quickQuoteButton: {
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