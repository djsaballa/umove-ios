import React, { Component }  from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Image, Modal, TouchableWithoutFeedback } from 'react-native';
import { EventRegister } from 'react-native-event-listeners'

import { AuthenticationApi } from '../api/authentication'; 
import { getStorage, setStorage } from '../api/helper/storage';

const bgImage = '../assets/bg-image.png';

export default class Start extends Component {  
  constructor() {
    super();
    
    this.state = { 
      username: '',
      password: '', 
      remember: false,
      error: false,
      data: [],
      modalVisible: false
    };
  }

  async componentDidMount() {
    this.loggedOut();
  }

  componentWillUnmount() {
    EventRegister.removeEventListener(this.listener)
  }

  async componentDidUpdate() {
    if(this.state.remember || !this.state.remember) {
      await setStorage('remember', JSON.stringify(this.state.remember));
    }
  }
  
  async loggedOut() {
    if (!this.listener) {
      this.listener = EventRegister.addEventListener('logout', (data) => {
        this.setState({username: ''})
        this.setState({password: ''})
        this.setState({remember: false})
      });
    }
  }
  
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { modalVisible } = this.state;
    return(
      <View style={styles.container}>
        <ImageBackground source={require(bgImage)} resizeMode='cover' style={styles.image}>
          <View style={styles.innerContainer}>
            <View style={styles.content}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => this.setState({modalVisible: false}) }
            >
              <TouchableWithoutFeedback onPress={() => this.setState({modalVisible: false}) }>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.modalText}>Register as:</Text>
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

              {/* Logo */}
              <View style={styles.alignItemCenter}>
                <Image
                  source={require('../assets/logo/logo.png')}
                  style={styles.logo}
                />
              </View>

              {/* Buttons */}
              <View style={styles.alignItemCenter}>
                <TouchableOpacity style={styles.quickQuotationButton} onPress={() => this.props.navigation.navigate('QuickQuotation1')}>
                  <Text style={styles.buttonText}>Quick Quotation</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.alignItemCenter}>
                <View style={styles.row}>
                  <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Login</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.signupButton} onPress={() => this.setModalVisible(true)}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                  </TouchableOpacity>
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
    alignItems: 'center',
  },
  logo: {
    height: 50,
    width: 240,
    marginBottom: '15%',
  },
  row: {
    marginTop: '15%',
    flexDirection: 'row',
    alignItems: 'center',    
  },
  modalRow: {
    marginTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',    
  },
  quickQuotationButton: {
    marginTop: '35%',
    height: 50,
    width: '55%',
    borderRadius: 10,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'rgb(223,131,68)',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 6},
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
  loginButton: {
    height: 50,
    width: '35%',
    borderRadius: 10,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'rgb(223,131,68)',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 6},
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
  signupButton: {
    marginLeft: '8%',
    height: 50,
    width: '35%',
    borderRadius: 10,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'rgb(223,131,68)',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 6},
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight:'bold'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
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