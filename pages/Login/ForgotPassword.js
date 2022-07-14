import React, { Component }  from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Image, TextInput } from 'react-native';

const bgImage = '../../assets/bg-image.png';

export default class ForgotPassword extends Component {  
  constructor() {
    super();
    
    this.state = { 
      email: ''
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

              {/* Email Address Input */}
              <View style={styles.alignItemCenter}>
                <View style={styles.inputPart}> 
                  <Text style={styles.label}>
                    Forgot Your Password?
                  </Text>
                  <Text style={styles.text}>
                    Enter your registered email below to receive password reset instruction
                  </Text>
                  <View style={styles.email}>
                    <Text style={styles.emailText}>
                      Email Address
                    </Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={(val) => {this.setState({email: val})}}  
                    />
                  </View>
                </View>
              </View>

              {/* Send Button */}
              <View style={styles.alignItemCenter}>
                { this.state.email == ''  ?
                <TouchableOpacity style={styles.sendButtonGray} disabled={true}>
                  <Text style={styles.sendButtonText}>SEND</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.sendButtonOrange} onPress={() => alert('SENT')}>
                  <Text style={styles.sendButtonText}>SEND</Text>
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
  input: {
    fontSize: 15,
    height: 50,
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 25,
    backgroundColor: 'white'
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
  email: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  emailText: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    marginBottom: 10
  },
  row: {
    flexDirection: 'row',
  },
  sendButtonGray: {
    marginTop: '40%',
    height: 50,
    width: '70%',
    borderRadius: 25,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'gray'
  },
  sendButtonOrange: {
    marginTop: '40%',
    height: 50,
    width: '70%',
    borderRadius: 25,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'rgb(223,131,68)'
  },
  sendButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight:'bold'
  },
})