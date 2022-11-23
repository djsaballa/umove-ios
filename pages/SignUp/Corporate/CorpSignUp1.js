import React, { Component }  from 'react';
import { StyleSheet, View, ImageBackground, Image, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';

import { CustomerApi } from '../../../api/customer';
import { getStorage, setStorage } from '../../../api/helper/storage';

export default class CorpSignUp1 extends Component { 
  constructor() {
    super();
    
    this.state = { 
      register: {
        customerType: 'Corporate',
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
        companyName: '',
        companyType: '',
        companyEmail: '',
        companyMobileNumber: '',
        companyAddress: '',
        officeAddress: '',
        officeRegion: '',
        officeProvince: '',
        officeCity: '',
        officeBarangay: '',
        officeZipcode: '',
        password: '',
        confirmPassword: '', 
        bir: null,
        dti: null,
        validId: null
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

    let res = await CustomerApi.corporateSignup()
    this.setState({message: res}, async () => {
      let response = this.state.message;
      if(response.message.email) {
        this.setState({error1: true})
      } else if(response.message.username) {
        this.setState({error2: true})
      } else if(response.message.mobile_number) {
        this.setState({error3: true})
      } else {
      this.props.navigation.navigate('CorpSignUp2')
      }
    })
  }

  render() {
    let register = this.state.register;
    return(
      <View style={styles.container}>
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
                    source={require('../../../assets/logo/logo-primary.png')}
                    style={styles.logo}
                  />
                  <Text style={styles.signUpHeader}>Sign Up</Text>
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
                      placeholder='Optional' 
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
                  { register.firstName == '' || register.lastName == '' || register.username == '' || register.email == '' || register.mobileNumber == ''  ?
                  <TouchableOpacity style={styles.signUpButtonGray} disabled={true}>
                    <Text style={styles.signUpButtonText}>NEXT</Text>
                  </TouchableOpacity>
                  :
                  <TouchableOpacity style={styles.signUpButtonOrange} onPress={() => this.register() }>
                    <Text style={styles.signUpButtonText}>NEXT</Text>
                  </TouchableOpacity>
                  }
                </View>

                {/* Login with */}
                <View style={styles.alignItemCenter}>
                  <Text style={styles.signUpWithText}> or Sign Up with </Text>
                  <View style={styles.row}>
                    <TouchableOpacity onPress={() => alert('Sign Up w/ google')}>
                      <Image
                        source={require('../../../assets/socials/google.png')}
                        style={styles.socials}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert('Sign Up w/ facebook')}>
                      <Image
                        source={require('../../../assets/socials/facebook.png')}
                        style={styles.socials}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert('Sign Up w/ apple')}>  
                      <Image
                        source={require('../../../assets/socials/apple.png')}
                        style={styles.socials}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert('Sign Up w/ fingerprint')}>  
                      <Image
                        source={require('../../../assets/socials/fingerprint.png')}
                        style={styles.socials}
                      />
                    </TouchableOpacity>
                  </View>
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
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    backgroundColor: 'rgb(238, 241, 217)', 
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
    height: 70,
    width: 250,
    marginTop: '8%',
  },
  signUpHeader: {
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: 'black',
    marginTop: '4%',
    marginBottom: '4%',
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
    color: 'black'
  }, 
  input: {
    fontSize: 15,
    height: 40,
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 25,
    borderColor: 'rgb(223,131,68)',
    borderWidth: 1,
    backgroundColor: 'white'
  },
  signUpButtonGray: {
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
  signUpButtonOrange: {
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
  signUpButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight:'bold'
  },
  signUpWithText: {
    color: 'black',
    fontSize: 12,
    marginTop: '8%',
    marginBottom: '2%'
  },
  socials: {
    margin: 8,
    height: 25,
    width: 25
  },
  loginContainer: {
    marginTop: '2%',
    alignItems: 'center',
    justifyContent:'center',
  },
  row: {
    flexDirection: 'row',
  },
  loginText: {
    color: 'black',
    fontSize: 14,
  },
  underline: {
    color: 'black',
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