import React, { Component }  from 'react';
import { StyleSheet, View, ImageBackground, Image, Text, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';

// import OTP Input View
import OTPInputView from '@twotalltotems/react-native-otp-input'

const bgImage = '../../../assets/bg-image.jpg';

export default class CorpSignUp7 extends Component {  
  constructor() {
    super();
    
    this.state = { 
      otpCode: ''
    };
  }

  render() {
    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <ImageBackground source={require(bgImage)} resizeMode='cover' style={styles.image}>
            <View style={styles.innerContainer}>
              <View style={styles.content}>

                {/* Logo */}
                <View style={styles.alignItemCenter}>
                  <Image
                    source={require('../../../assets/logo/logo.png')}
                    style={styles.logo}
                  />
                </View>

                {/* OTP Verification input */}
                <View style={styles.alignItemCenter}>
                  <View style={styles.inputPart}> 
                    <Text style={styles.label}>
                      OTP Verification
                    </Text>
                    <Text style={styles.text}>
                      Please enter verification code sent to *mobile number*
                    </Text>
                    <View>
                      <OTPInputView 
                        style={{width: '70%', height: 60}}
                        pinCount={6} 
                        codeInputFieldStyle={styles.codeInputFieldStyle}
                        onCodeFilled={(code) => {this.setState({otpCode: code})}}
                      />
                    </View>
                  </View>
                </View>

                {/* Resend Code */}
                <View style={styles.alignItemCenter}>
                  <View style={styles.resendCodeContainer}>
                    <View style={styles.row}>
                      <Text style={styles.resendCodeText}>
                        Didn't receive the verification code? {" "}
                      </Text>
                      <TouchableOpacity onPress={() => alert('Resend OTP')}>
                          <Text style={styles.underline}>
                            Resend
                          </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                {/* Verify Button */}
                <View style={styles.alignItemCenter}>
                  {/* Make button gray when not all inputs are filled out, orange when filled out */}
                  { this.state.otpCode == ''  ?
                  <TouchableOpacity style={styles.signUpButtonGray} disabled={true}>
                    <Text style={styles.signUpButtonText}>VERIFY</Text>
                  </TouchableOpacity>
                  :
                  <TouchableOpacity style={styles.signUpButtonOrange} onPress={() => alert('Verify')}>
                    <Text style={styles.signUpButtonText}>VERIFY</Text>
                  </TouchableOpacity>
                  }
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
    marginTop: 10,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  codeInputFieldStyle: {
    backgroundColor: 'white',
    color: 'black',
    width: 30,
    height: 30,
    margin: 7,
    textDecorationLine: 'underline',
    textDecorationColor: 'rgb(223,131,68)'
  },
  label: {
    color: 'white',
    fontSize: 18,
    fontWeight:'bold',
    marginBottom: 30
  },
  text: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    marginBottom: 30
  }, 
  resendCodeContainer: {
    marginTop: '15%',
    alignItems: 'center',
    justifyContent:'center',
  },
  row: {
    flexDirection: 'row',
  },
  resendCodeText: {
    color: 'white',
    fontSize: 10,
  },
  underline: {
    color: 'white',
    fontSize: 11,
    textDecorationLine: 'underline'
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
})