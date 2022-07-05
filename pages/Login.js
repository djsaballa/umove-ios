import React, { Component }  from 'react';
import { StyleSheet, View, ImageBackground, Image, Text, TextInput,  TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';

const bgImage = '../assets/bg-image.png';

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
      <View style={styles.container}>
        <ImageBackground source={require(bgImage)} resizeMode='cover' style={styles.bgImage}>
          <View style={styles.innerContainer}>
            <View style={styles.content}>

              {/* Logo */}
              <View style={styles.alignItemCenter}>
                <Image
                  source={require('../assets/logo/logo2-shadow.png')}
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
                  <TouchableOpacity onPress={() => alert('forgot password')}>
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Login Button */}
              <View style={styles.alignItemCenter}>
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
                      source={require('../assets/socials/google.png')}
                      style={styles.socials}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => alert('Login w/ facebook')}>
                    <Image
                      source={require('../assets/socials/facebook.png')}
                      style={styles.socials}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => alert('Login w/ twitter')}>  
                    <Image
                      source={require('../assets/socials/twitter.png')}
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
    backgroundColor: 'rgba(0,0,0, 0.50)',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  alignItemCenter: {
    alignItems: 'center'
  },
  logo: {
    height: 40,
    width: 250,
    marginBottom: 60,
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
    marginTop: 15,
    height: 50,
    width: '70%',
    borderRadius: 25,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'gray'
  },
  loginButtonOrange: {
    marginTop: 15,
    height: 50,
    width: '70%',
    borderRadius: 25,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'rgb(223,131,68)'
  },
  loginButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight:'bold'
  },
  loginWithText: {
    color: 'white',
    fontSize: 12,
    marginTop: 50,
    marginBottom: 12
  },
  socials: {
    margin: 8,
    height: 25,
    width: 25
  },
  signUpContainer: {
    marginTop: 50,
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