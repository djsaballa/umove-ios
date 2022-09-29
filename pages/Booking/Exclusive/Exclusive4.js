import React, { Component }  from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Keyboard, Image } from 'react-native';
import Constants from 'expo-constants';
import ModalSelector from 'react-native-modal-selector-searchable'

import { FetchApi } from '../../../api/fetch';
import { getStorage, setStorage } from '../../../api/helper/storage';

export default class Exclusive4 extends Component {  
  constructor(props) {
    super(props);
    
    this.state = { 
      booking: {},
      
    };
  }

  async componentDidMount() {
    this.init();
  }

  async init() {
    let booking = await getStorage('booking');
    this.setState({ booking })
  }

  async booking() {
    let booking = this.state.booking;
    await setStorage('booking', booking)
  }

  render() {
    let booking = this.state.booking;
    return(
      <View style={styles.container}>

        {/* Header for Booking Summary */}
        <View style={[styles.header, styles.row]}>
          <TouchableOpacity style={styles.arrowContainer} onPress={() => { this.props.navigation.navigate('Exclusive3') }}>
            <Image
              source={require('../../../assets/icons/arrow-back.png')}
              style={styles.headerArrow}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Booking Summary</Text>
        </View>

        

        <View style={styles.alignItemCenter}>
          {/* Next Button */}
            {/* Make button gray when not all inputs are filled out, orange when filled out */}
          { booking.pickupDate == '' || booking.pickupTime == '' || booking.pickupStreetAddress == '' || booking.pickupBarangay == '' || booking.pickupCity == '' || booking.pickupProvince == '' || booking.pickupRegion == '' || booking.pickupZipcode == '' ?
          <TouchableOpacity style={styles.nextButtonGray} disabled={true}>
            <Text style={styles.buttonText}> NEXT </Text>
          </TouchableOpacity>
          :
          <TouchableOpacity style={styles.nextButtonOrange} onPress={() => {
            this.booking();
            this.props.navigation.navigate('Exclusive3')
          }}>
            <Text style={styles.buttonText}> NEXT </Text>
          </TouchableOpacity>
          }
        </View>
            
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'rgb(38, 43, 52)',
  },
  header: {
    width: '100%',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'rgb(29, 32, 39)', 
    shadowColor: '#171717',
    shadowOffset: {height: 5},
    shadowOpacity: 0.3,
    alignItems: 'center',
    zIndex: 1
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    marginTop: '5%',
    marginBottom: '5%',
  },
  arrowContainer: {
    marginLeft: '3%',
    marginRight: '24%'
  },
  headerArrow: {
    width: 12,
    height: 20,
  },
  labelContainer: {
    marginTop: '7%',
    marginBottom: '3%',
    marginLeft: '6%'
  },
  labelText: {
    color: 'white',
    fontSize: 15
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignItemCenter: {
    alignItems: 'center',
    zIndex: 0
  },
  row: {
    flexDirection: 'row',
  },
  nextButtonGray: {
    marginTop: '5%',
    marginBottom: '15%',
    height: 50,
    width: '90%',
    borderRadius: 25,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 6},
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
  nextButtonOrange: {
    marginTop: '5%',
    marginBottom: '15%',
    height: 50,
    width: '90%',
    borderRadius: 25,
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
    fontSize: 15,
    fontWeight:'bold'
  },
})