import React, { Component }  from 'react';
import { StyleSheet, View, Modal, TouchableWithoutFeedback, Text, TouchableOpacity, Image } from 'react-native';
import Svg, { Circle, Ellipse } from 'react-native-svg';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native'

import { getStorage, setStorage } from '../../api/helper/storage';

let deviceWidth = Dimensions.get('window').width

export default class Start2 extends Component {  
  constructor() {
    super();
    
    this.state = { 
      chooseMove: '',
      modalVisible: false
    };
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { modalVisible } = this.state;
    return(
      <View style={styles.container}>
        
        {/* Sign Up Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => this.setState({modalVisible: false}) }
        >
          <TouchableWithoutFeedback onPress={() => this.setState({modalVisible: false}) }>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Sign Up as:</Text>
                <View style={styles.modalRow}>
                  <TouchableOpacity
                    style={[styles.button, styles.modalButton]}
                    onPress={() => this.setState({modalVisible: false}, () => {
                      this.props.navigation.navigate('IndivSignUp1')
                  })}>
                    <Text style={styles.textStyle}>Individual</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.button, styles.modalButton]}
                    onPress={() => this.setState({modalVisible: false}, () => {
                      this.props.navigation.navigate('CorpSignUp1')
                  })}>                        
                    <Text style={styles.textStyle}>Corporate</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        <View style={styles.content}>
          <View style={styles.topHalf}>
            {/* Welcome */}
            <View style={styles.alignItemCenter}>
              <Text style={styles.welcomeText}>Welcome !</Text>
            </View>
            {/* Logo */}
            <View style={styles.alignItemCenter}>
              <Image
                source={require('../../assets/logo/logo-primary.png')}
                style={styles.logo}
              />
            </View>
            {/* Delivery Package Icon */}
            <View style={styles.alignItemCenter}>
              <Image 
                source={require('../../assets/start/box-mail.png')}
                style={styles.boxMail}
              />
            </View>
          </View>

          {/* Curved Botom */}
          <Svg height="8%" width="100%">
            <Circle 
              cx={deviceWidth / 2}
              cy={`-${898 - Constants.statusBarHeight + 2}`}
              r="898"
              fill="rgb(238, 241, 217)" 
            />
          </Svg>

          <View style={styles.alignItemCenter}>
            <Text style={styles.chooseText}>
              Choose how you make your move:
            </Text>
            <View>
              <View style={styles.row}>
                <View>
                  <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('QuickQuotation1')}>
                      <Image 
                        source={require('../../assets/start/quickquote.png')}
                        style={styles.quickQuoteButton}
                      />
                    <Text style={styles.buttonText}>Quick Quotation</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Login')}>
                      <Image 
                        source={require('../../assets/start/login.png')}
                        style={styles.loginButton}
                      />
                    <Text style={styles.buttonText}>Log In</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          {/* Sign Up */}
          <View style={styles.alignItemCenter}>
            <View style={styles.signUpContainer}>
              <View style={styles.row}>
                <Text style={styles.signUpText}>
                  Don't have an account? {" "}
                </Text>
                <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                  <Text style={styles.underline}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Buttons */}
          {/* <View style={styles.alignItemCenter}>
            <View style={styles.row}>
              <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.quickQuoteButton} onPress={() => this.props.navigation.navigate('QuickQuotation1')}>
                <Text style={styles.buttonText}>Quick Quote</Text>
              </TouchableOpacity>
            </View>
          </View> */}

        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  content: {
    flex: 1,
    backgroundColor: 'rgb(81, 79, 80)',
  },
  alignItemCenter: {
    alignItems: 'center',
  },
  topHalf: {
    paddingTop: '20%',
    backgroundColor: 'rgb(238, 241, 217)'
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: 'bold'
  },
  logo: {
    height: 90,
    width: '80%',
    marginTop: '5%'
  },
  boxMail: {
    height: 160,
    width: '50%',
    marginTop: '5%'
  },
  chooseText: {
    color: 'white',
    fontSize: 16,
    fontWeight:'700',
    letterSpacing: 1.5
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: '10%'
  },
  buttonContainer: {
    alignItems: 'center',
    margin: '5%'
  },
  quickQuoteButton: {
    height: 130,
    width: 130
  },
  loginButton: {
    height: 130,
    width: 130,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  signUpContainer: {
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: 'rgb(223,131,68)',
    borderWidth: 1,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalRow: {
    marginTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',    
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 5
  },
  modalButton: {
    backgroundColor: "rgb(223,131,68)",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    fontWeight: 'bold'
  }
})