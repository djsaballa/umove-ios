import React, { Component }  from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';

const bgImage = '../../assets/bg-image.jpg';

export default class QuickQuotation4 extends Component {  
  constructor() {
    super();
    
    this.state = { 
      amount: '00.00',
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

              {/* Amount */}
              <View style={styles.amountContainer}>
                <View style={styles.placeholder}>
                  <View style={styles.amountLabelContainer}>
                    <Text style={styles.amountLabelText}>AMOUNT</Text>
                  </View>
                  <View style={[styles.priceContainer]}>
                    <View>
                      <Text style={styles.amountText}>
                        ₱
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.amountText}>
                        {this.state.amount}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* Note */}
              <View style={styles.alignItemCenter}>
                <View style={styles.noteContainer}>
                    <Text style={styles.noteText}>  
                      Note : Here's the quick quotation
                      based on the cargo details, pick
                      up and delivery address provided. If
                      you want greater value, we offer
                      shared ride options that can
                      provide cheaper delivery rate by
                      Sharing the delivery space and
                      cost with other customers headed
                      on the same destination
                    </Text>
                  </View>
              </View>

              <View style={styles.alignItemCenter}>
                <View style={styles.row}>
                  <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Login</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.signupButton} onPress={() => this.props.navigation.navigate('Start')}>
                    <Text style={styles.buttonText}>Cancel</Text>
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
    flexDirection: 'row',
  },
  placeholder: {
    width: '60%',
    height: 100,
    marginBottom: '20%',
    justifyContent: 'space-evenly',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 15
  },
  amountContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  amountLabelContainer: {
    alignItems: 'center'
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  amountLabelText: {
    color: 'white',
    fontSize: 20,
    fontWeight:'bold',
  },
  amountText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '300'
  },
  noteContainer: {
    width: '70%',
    marginBottom: '25%'
  },
  noteText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'justify'
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