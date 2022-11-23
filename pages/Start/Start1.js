import React, { Component }  from 'react';
import { StyleSheet, View, Modal, TouchableWithoutFeedback, Text, TouchableOpacity, Image } from 'react-native';
import Svg, { Circle, Ellipse } from 'react-native-svg';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native'

import { getStorage, setStorage } from '../../api/helper/storage';

let deviceWidth = Dimensions.get('window').width

export default class Start1 extends Component {  
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
            <View style={styles.alignItemCenter}>
              <View style={styles.row}>
                <TouchableOpacity style={styles.vehicleContainer} onPress={() => {this.setState({chooseMove: 'ship'})}}>
                  { this.state.chooseMove == '' || this.state.chooseMove == 'ship' ?
                    <Image 
                      source={require('../../assets/start/ship.png')}
                      style={styles.ship}
                    />
                  :
                    <Image 
                      source={require('../../assets/start/ship.png')}
                      style={styles.ship2}
                    />
                  }
                </TouchableOpacity>
                <TouchableOpacity style={styles.vehicleContainer} onPress={() => {this.setState({chooseMove: 'truck'})}}>
                  { this.state.chooseMove == '' || this.state.chooseMove == 'truck' ?
                    <Image 
                      source={require('../../assets/start/truck.png')}
                      style={styles.truck}
                    />
                  :
                    <Image 
                      source={require('../../assets/start/truck.png')}
                      style={styles.truck2}
                    />
                  }
                </TouchableOpacity>
              </View>
              <View style={[styles.alignItemCenter, styles.row]}>
                <TouchableOpacity style={styles.vehicleContainer} onPress={() => {this.setState({chooseMove: 'motor'})}}>
                  { this.state.chooseMove == '' || this.state.chooseMove == 'motor' ?
                    <Image 
                      source={require('../../assets/start/ride-motor.png')}
                      style={styles.rideMotor}
                    />
                  : 
                    <Image 
                      source={require('../../assets/start/ride-motor.png')}
                      style={styles.rideMotor2}
                    />
                  }
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Login Button */}
          <View style={styles.alignItemCenter}>
            {/* Make button gray when not all inputs are filled out, orange when filled out */}
            { this.state.chooseMove == '' ?
            <TouchableOpacity style={styles.continueButtonGray} disabled={true}>
              <Text style={styles.continueButtonText}>CONTINUE</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity style={styles.continueButtonOrange} onPress={() => this.props.navigation.navigate('Start2')}>
              <Text style={styles.continueButtonText}>CONTINUE</Text>
            </TouchableOpacity>
            }
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
    marginTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',    
  },
  vehicleContainer: {
    width: '45%'
  },
  ship: {
    height: 70,
    width: '90%',
  },
  ship2: {
    height: 70,
    width: '90%',
    opacity: .5
  },
  truck: {
    height: 86,
    width: '90%',
    marginLeft: '5%',
  },
  truck2: {
    height: 86,
    width: '90%',
    marginLeft: '5%',
    opacity: .5
  },
  rideMotor: {
    height: 95,
    width: '60%',
    marginLeft: '15%',
  },
  rideMotor2: {
    height: 95,
    width: '60%',
    marginLeft: '15%',
    opacity: .5
  },
  continueButtonGray: {
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
  continueButtonOrange: {
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
  continueButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight:'bold',
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