import React, { Component }  from 'react';
import { StyleSheet, View, ImageBackground, Image, Text, TextInput, TouchableOpacity } from 'react-native';

const bgImage = '../../assets/bg-image.png';

export default class SignUp1 extends Component { 
  constructor() {
    super();
    
    this.state = { 
      lastName: '',
      firstName: '', 
      email: '',
      mobileNumber: ''
    };
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
                  source={require('../../assets/logo/logo.png')}
                  style={styles.logo}
                />
              </View>

              {/* Sign Up input */}
              <View style={styles.alignItemCenter}>
              <View style={styles.inputPart}> 
                  <Text style={styles.text}>
                    Last Name
                  </Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={(val) => {this.setState({lastName: val})}}  
                  />
                </View>
                <View style={styles.inputPart}> 
                  <Text style={styles.text}>
                    First Name
                  </Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={(val) => {this.setState({firstName: val})}}  
                  />
                </View>
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
                    Mobile Number
                  </Text>
                  <TextInput
                    style={styles.input}
                    keyboardType='numbers-and-punctuation'           
                    onChangeText={(val) => {this.setState({mobileNumber: val})}}  
                  />
                </View>
              </View>

              {/* Next Button */}
              <View style={styles.alignItemCenter}>
                {/* Make button gray when not all inputs are filled out, orange when filled out */}
                { this.state.lastName == '' || this.state.firstName == '' || this.state.email == '' || this.state.mobileNumber == ''  ?
                <TouchableOpacity style={styles.signUpButtonGray} disabled={true}>
                  <Text style={styles.signUpButtonText}>NEXT</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.signUpButtonOrange} onPress={() => this.props.navigation.navigate('SignUp2')}>
                  <Text style={styles.signUpButtonText}>NEXT</Text>
                </TouchableOpacity>
                }
              </View>

              {/* Login */}
              <View style={styles.alignItemCenter}>
                <View style={styles.loginContainer}>
                  <View style={styles.row}>
                    <Text style={styles.loginText}>
                      Already have an account? {" "}
                    </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.underline}>
                          Log In
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
  signUpButtonGray: {
    marginTop: '20%',
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
  signUpButtonOrange: {
    marginTop: '20%',
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
  signUpButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight:'bold'
  },
  loginContainer: {
    marginTop: '5%',
    alignItems: 'center',
    justifyContent:'center',
  },
  row: {
    flexDirection: 'row',
  },
  loginText: {
    color: 'white',
    fontSize: 12,
  },
  underline: {
    color: 'white',
    fontSize: 12,
    textDecorationLine: 'underline',
  }
})