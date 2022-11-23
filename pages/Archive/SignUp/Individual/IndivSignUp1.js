import React, { Component }  from 'react';
import { StyleSheet, View, ImageBackground, Image, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';

import { CustomerApi } from '../../../api/customer';
import { getStorage, setStorage } from '../../../api/helper/storage';

const bgImage = '../../../assets/bg-image.jpg';

export default class IndivSignUp1 extends Component { 
  constructor() {
    super();
    
    this.state = { 
      register: {
        customerType: 'Individual',
        firstName: '',
        middleName: '',
        lastName: '',
        username: '',
        email: '',
        mobileNumber: '',
        streetAddress: '',
        region: '',
        province: '',
        city: '',
        barangay: '',
        zipcode: '',
        password: '',
        confirmPassword: '', 
      },
      error1: false,
      error2: false,
      error3: false,
      message: []
    };
  }

  async componentDidMount() {
    await setStorage('register', null)
  }

  async register() {
    let register = this.state.register;
    await setStorage('register', register)

    let res = await CustomerApi.individualSignup()
    this.setState({message: res}, async () => {
      let response = this.state.message;
      if(response.message.email) {
        this.setState({error1: true})
      } else if(response.message.username) {
        this.setState({error2: true})
      } else if(response.message.mobile_number) {
        this.setState({error3: true})
      } else {
      this.props.navigation.navigate('IndivSignUp2')
      }
    })
  }

  render() {
    let register = this.state.register;
    return(
      <View style={styles.container}>
        <ImageBackground source={require(bgImage)} resizeMode='cover' style={styles.image}>
          <View style={styles.innerContainer}>

          {this.state.error1 ? <View style={styles.errorContainer}><Text style={styles.errorMessage}> Email has already been taken, please use a different Email.  </Text></View> : null}
          {this.state.error2 ? <View style={styles.errorContainer}><Text style={styles.errorMessage}> Username has already been taken, please use a different Username.  </Text></View> : null}
          {this.state.error3 ? <View style={styles.errorContainer}><Text style={styles.errorMessage}> Mobile Number has already been taken, please use a different Mobile Number.   </Text></View> : null}

            <View style={styles.content}>

              <KeyboardAvoidingView behavior='padding'>
                <ScrollView>
                  {/* Logo */}
                  <View style={styles.alignItemCenter}>
                    <Image
                      source={require('../../../assets/logo/logo.png')}
                      style={styles.logo}
                    />
                  </View>

                  {/* Sign Up input */}
                  <View style={styles.alignItemCenter}>
                    <View style={styles.inputPart}> 
                      <Text style={styles.text}>
                        First Name
                      </Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={(val) => {
                          register.firstName = val;
                          this.setState({register})
                        }} 
                      />
                    </View>
                    <View style={styles.inputPart}> 
                      <Text style={styles.text}>
                        Middle Name 
                      </Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={(val) => {
                          register.middleName = val;
                          this.setState({register})
                        }}  
                      />
                    </View>
                    <View style={styles.inputPart}> 
                      <Text style={styles.text}>
                        Last Name 
                      </Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={(val) => {
                          register.lastName = val;
                          this.setState({register})
                        }}                        
                      />
                    </View>
                    <View style={styles.inputPart}> 
                      <Text style={styles.text}>
                        Username 
                      </Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={(val) => {
                          register.username = val;
                          this.setState({register})
                        }}    
                      />
                    </View>
                    <View style={styles.inputPart}> 
                      <Text style={styles.text}>
                        Email Address 
                      </Text>
                      <TextInput
                        style={styles.input}
                        keyboardType='email-address'
                        onChangeText={(val) => {
                          register.email = val;
                          this.setState({register})
                        }}                        
                      />
                    </View>
                    <View style={styles.inputPart}> 
                      <Text style={styles.text}>
                        Mobile Number 
                      </Text>
                      <TextInput
                        style={styles.input}
                        keyboardType='number-pad'           
                        onChangeText={(val) => {
                          register.mobileNumber = val;
                          this.setState({register})
                        }}
                        maxLength={11}
                      />
                    </View>
                  </View>

                  {/* Next Button */}
                  <View style={styles.alignItemCenter}>
                    {/* Make button gray when not all inputs are filled out, orange when filled out */}
                    { register.firstName == '' || register.middleName == '' || register.lastName == '' || register.username == '' || register.email == '' || register.mobileNumber == ''  ?
                    <TouchableOpacity style={styles.signUpButtonGray} disabled={true}>
                      <Text style={styles.signUpButtonText}>NEXT</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.signUpButtonOrange} onPress={() => this.register() }>
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
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login') }>
                            <Text style={styles.underline}>
                              Log In
                            </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </KeyboardAvoidingView>

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
    marginBottom: '10%',
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
    marginTop: '10%',
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
    marginTop: '10%',
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