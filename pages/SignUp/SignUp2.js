import React, { Component }  from 'react';
import { StyleSheet, View, ImageBackground, Image, Text, TextInput, TouchableOpacity } from 'react-native';

const bgImage = '../../assets/bg-image.png';

export default class SignUp2 extends Component {  
  constructor() {
    super();
    
    this.state = { 
      password: '',
      confirmPassword: '', 
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
                    Pasword
                  </Text>
                  <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={(val) => {this.setState({password: val})}}  
                  />
                </View>
                <View style={styles.inputPart}> 
                  <Text style={styles.text}>
                    Confirm Password
                  </Text>
                  <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={(val) => {this.setState({confirmPassword: val})}}  
                  />
                </View>
              </View>

              {/* Terms and Conditions & Privacy Policy */}
              <View style={styles.alignItemCenter}>
                <View style={styles.conditionsContainer}>
                  <View style={styles.row}>
                    <Text style={styles.conditionsText}>
                      By clicking Continue, you agree to our 
                    </Text>
                      <TouchableOpacity onPress={() => alert('Terms and Conditions')}>
                        <Text style={styles.underline}>
                          {" "} Terms and Conditions {" "}
                        </Text>
                      </TouchableOpacity>
                      <Text style={styles.conditionsText}>
                       and that you have read our 
                      </Text>
                      <TouchableOpacity onPress={() => alert('Privacy Policy')}>
                        <Text style={styles.underline}>
                          {" "} Privacy Policy
                        </Text>
                      </TouchableOpacity>
                    <Text style={styles.conditionsText}>
                      .
                    </Text>
                  </View>
                </View>
              </View>

              {/* Continue Button */}
              <View style={styles.alignItemCenter}>
                { this.state.password == '' || this.state.confirmPassword == ''  ?
                <TouchableOpacity style={styles.signUpButtonGray} disabled={true}>
                  <Text style={styles.signUpButtonText}>CONTINUE</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.signUpButtonOrange} onPress={() => this.props.navigation.navigate('SignUp3')}>
                  <Text style={styles.signUpButtonText}>CONTINUE</Text>
                </TouchableOpacity>
                }
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
  conditionsContainer: {
    marginTop: '30%',
    justifyContent:'center',
    marginBottom: '1%',
  },
  row: {
    flexDirection: 'row',
    justifyContent:'center',
    flexWrap: 'wrap',
  },
  conditionsText: {
    color: 'white',
    fontSize: 10,
    alignItems: 'center',
  },
  underline: {
    color: 'white',
    fontSize: 10,
    textDecorationLine: 'underline',
  },
  signUpButtonGray: {
    marginTop: '4%',
    height: 50,
    width: '70%',
    borderRadius: 25,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'gray'
  },
  signUpButtonOrange: {
    marginTop: '4%',
    height: 50,
    width: '70%',
    borderRadius: 25,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'rgb(223,131,68)'
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight:'bold'
  },
})