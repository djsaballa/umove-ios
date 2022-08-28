import React, { Component }  from 'react';
import { StyleSheet, View, ImageBackground, Image, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { CheckBox } from 'react-native-elements';

const bgImage = '../../assets/bg-image.png';

export default class Login extends Component {  
  constructor() {
    super();
    
    this.state = { 
      email: '',
      password: '', 
      checkbox: false
    };
  }

  render() {
    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <ImageBackground source={require(bgImage)} resizeMode='cover' style={styles.bgImage}>
            <View style={styles.innerContainer}>
              <View style={styles.content}>

                {/* Logo */}
                <View style={styles.alignItemCenter}>
                  <Image
                    source={require('../../assets/logo/logo.png')}
                    style={styles.logo}
                  />
                </View>

                {/* Email and Password */}
                <View style={styles.alignItemCenter}>
                  <View style={styles.inputPart}> 
                    <Text style={styles.text}>
                      Email Address
                    </Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={(val) => {this.setState({email: val})}}  
                    />
                  </View>
                  <View style={styles.inputPart}> 
                    <Text style={styles.text}>
                      Password
                    </Text>
                    <TextInput
                      style={styles.input}
                      secureTextEntry={true}
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
                      checked={this.state.checkbox}
                      onPress={() => {this.setState({checkbox: !this.state.checkbox})}}
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
                  { this.state.email == '' || this.state.password == '' ?
                  <TouchableOpacity style={styles.loginButtonGray} disabled={true}>
                    <Text style={styles.loginButtonText}>LOG IN</Text>
                  </TouchableOpacity>
                  :
                  <TouchableOpacity style={styles.loginButtonOrange} onPress={() => alert('Logged In')}>
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
                        source={require('../../assets/icon/google.png')}
                        style={styles.socials}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert('Login w/ facebook')}>
                      <Image
                        source={require('../../assets/icon/facebook.png')}
                        style={styles.socials}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert('Login w/ fingerprint')}>  
                      <Image
                        source={require('../../assets/icon/fingerprint.png')}
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
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp1')}>
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
    fontSize: 12,
  },
  underline: {
    color: 'white',
    fontSize: 12,
    textDecorationLine: 'underline',
  }
})