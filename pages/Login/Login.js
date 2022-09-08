import React, { Component }  from 'react';
import { StyleSheet, View, ImageBackground, Image, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Constants from 'expo-constants';
import { EventRegister } from 'react-native-event-listeners'
import { CheckBox } from 'react-native-elements';

import { AuthenticationApi } from '../../api/authentication'; 
import { getStorage, setStorage } from '../../api/helper/storage';

const bgImage = '../../assets/bg-image.png';

export default class Login extends Component {  
  constructor() {
    super();
    
    this.state = { 
      username: '',
      password: '', 
      remember: false,
      error: false,
    };
  }

  async componentDidMount() {
    this.init();
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
  
  async init() {
    let remember = await getStorage('remember');
    if(remember) {
      this.setState({remember});
      let loginInfo = await getStorage('loginInfo');
      if(loginInfo) {
        this.setState({username: loginInfo[0]})
        this.setState({password: loginInfo[1]})
        let [res, err] = await AuthenticationApi.login(loginInfo[0], loginInfo[1]);
        if(err) {
          this.setState({ error: true });
        }
        if(res) {
          await setStorage('user', res)
          this.props.navigation.navigate('Dashboard');
        }
      }
    } else {
      await setStorage('loginInfo', null)
    }
  
  }
  async logIn() {
    this.setState({ error: false });
    let loginInfo = [this.state.username, this.state.password]
    await setStorage('loginInfo', loginInfo)
    
    let [res, err] = await AuthenticationApi.login(this.state.username, this.state.password);
    if(err) {
      this.setState({ error: true });
    }
    if(res) {
      await setStorage('user', res)
      this.props.navigation.navigate('Dashboard');
    }
  }

  async loggedOut() {
    if (!this.listener) {
      this.listener = EventRegister.addEventListener('logout', () => {
        this.setState({username: ''})
        this.setState({password: ''})
        this.setState({remember: false})
      });
    }
  }

  render() {
    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <ImageBackground source={require(bgImage)} resizeMode='cover' style={styles.bgImage}>
            <View style={styles.innerContainer}>

            {this.state.error ? <View style={styles.errorContainer}><Text style={styles.errorMessage}> Username or Password is incorrect </Text></View> : null}

              <View style={styles.content}>

                {/* Logo */}
                <View style={styles.alignItemCenter}>
                  <Image
                    source={require('../../assets/logo/logo.png')}
                    style={styles.logo}
                  />
                </View>

                {/* username and Password */}
                <View style={styles.alignItemCenter}>
                  <View style={styles.inputPart}> 
                    <Text style={styles.text}>
                      Username
                    </Text>
                    <TextInput
                      style={styles.input}
                      value={this.state.username}
                      onChangeText={(val) => {this.setState({username: val})}}  
                    />
                  </View>
                  <View style={styles.inputPart}> 
                    <Text style={styles.text}>
                      Password
                    </Text>
                    <TextInput
                      style={styles.input}
                      secureTextEntry={true}
                      value={this.state.password}
                      onChangeText={(val) => {this.setState({password: val})}}  
                    />
                  </View>
                  
                  {/* Remember Me and Forgot Password */}
                  <View style={(styles.spaceBetween, styles.row)}>
                    <CheckBox
                      title='Remember Me'
                      checkedColor='green'
                      containerStyle={{ backgroundColor: 'undefined', borderWidth:'0', padding:0, margin:0 }}
                      textStyle={{ color:'white', fontSize:12, fontWeight:'normal' }}
                      checked={this.state.remember}
                      onPress={() => {this.setState({remember: !this.state.remember})}}
                      style={styles.checkbox}
                    />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                      <Text style={styles.forgotPassword}>Forgot Password?</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Login Button */}
                <View style={styles.alignItemCenter}>
                  {/* Make button gray when not all inputs are filled out, orange when filled out */}
                  { this.state.username == '' || this.state.password == '' ?
                  <TouchableOpacity style={styles.loginButtonGray} disabled={true}>
                    <Text style={styles.loginButtonText}>LOG IN</Text>
                  </TouchableOpacity>
                  :
                  <TouchableOpacity style={styles.loginButtonOrange} onPress={() => { this.logIn() }}>
                    <Text style={styles.loginButtonText}>LOG IN</Text>
                  </TouchableOpacity>
                  }
                </View>

                {/* Login with */}
                <View style={styles.alignItemCenter}>
                  <Text style={styles.loginWithText}> or login with </Text>
                  <View style={styles.row}>
                    <TouchableOpacity onPress={() => alert('Login w/ google')}>
                      <Image
                        source={require('../../assets/socials/google.png')}
                        style={styles.socials}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert('Login w/ facebook')}>
                      <Image
                        source={require('../../assets/socials/facebook.png')}
                        style={styles.socials}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert('Login w/ fingerprint')}>  
                      <Image
                        source={require('../../assets/socials/fingerprint.png')}
                        style={styles.socials}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Sign Up */}
                <View style={styles.alignItemCenter}>
                  <View style={styles.signUpContainer}>
                    <View style={styles.row}>
                      <Text style={styles.signUpText}>
                        Don't have an account? {" "}
                      </Text>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('IndivSignUp1')}>
                        <Text style={styles.underline}>
                          Sign Up
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
  },
  bgImage: {
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
    alignItems: 'center'
  },
  logo: {
    height: 50,
    width: 240,
    marginBottom: '15%',
  },
  inputPart: {
    margin: 5,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  text: {
    fontSize: 15,
    paddingLeft: 8,
    paddingBottom: 3,
    color: 'white'
  }, 
  input: {
    fontSize: 15,
    height: 50,
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 25,
    backgroundColor: 'white'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',    
  },
  spaceBetween: {
    justifyContent:'space-between',
  },
  forgotPassword: {
    fontStyle: 'italic',
    fontSize: 12,
    color: 'white',
    paddingLeft: 30
  }, 
  loginButtonGray: {
    marginTop: '5%',
    height: 50,
    width: '70%',
    borderRadius: 25,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 6},
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
  loginButtonOrange: {
    marginTop: '5%',
    height: 50,
    width: '70%',
    borderRadius: 25,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'rgb(223,131,68)',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 6},
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight:'bold'
  },
  loginWithText: {
    color: 'white',
    fontSize: 12,
    marginTop: '15%',
    marginBottom: '3%'
  },
  socials: {
    margin: 8,
    height: 25,
    width: 25
  },
  signUpContainer: {
    marginTop: '13%',
    alignItems: 'center',
    justifyContent:'center',

  },
  signUpText: {
    color: 'white',
    fontSize: 14,
  },
  underline: {
    color: 'white',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  errorContainer:{
    width: '100%',
    backgroundColor: '#ffcdd2',
    marginTop: Constants.statusBarHeight
  },
  errorMessage:{
    textAlign: 'center',
    padding: 10,
    color: '#d32f2f'
  }
})