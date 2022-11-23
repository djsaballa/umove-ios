import React, { Component }  from 'react';
import { StyleSheet, StatusBar, View, Text, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";

import { FetchApi } from '../../../../api/fetch';
import { BookingApi } from '../../../../api/booking';
import { getStorage, setStorage } from '../../../../api/helper/storage';

export default class CorpExclusive5 extends Component {  
  constructor(props) {
    super(props);
    
    this.state = { 
      booking: {},
      computeRates: {},
      driver: {},
      vehicle: {}
    };
  }

  async componentDidMount() {
    this.init();
    }

  async init() {
    let computeRates = await getStorage('computeRates');
    this.setState({ computeRates })

    let driverInfo = this.state.computeRates.driver
    let vehicleInfo = this.state.computeRates.vehicle
    let driver = {
      'profileImage': driverInfo.user.user_profile.profile_image,
      'firstName': driverInfo.user.user_profile.first_name,
      'middleName': driverInfo.user.user_profile.middle_name,
      'lastName': driverInfo.user.user_profile.last_name,
      'mobileNumber': driverInfo.user.user_profile.mobile_number,
      'email': driverInfo.user.user_profile.email
    }
    let vehicle = {
      'vehicleImage': vehicleInfo.vehicle_image[0].image,
      'vehicleMake': vehicleInfo.vehicle_template.vehicle_make,
      'vehicleModel': vehicleInfo.vehicle_template.vehicle_model,
      'vehicleYear': vehicleInfo.vehicle_template.vehicle_year,
      'plateNumber': vehicleInfo.plate_number,
      'vehicleColor': vehicleInfo.vehicle_color
    }
    
    this.setState({ driver }, () => { this.setState({ vehicle }) })
  }

  render() {
    let driver = this.state.driver;
    let vehicle = this.state.vehicle;

    return(
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        {/* Header for Booking Summary */}
        <View style={[styles.header, styles.row]}>
          <TouchableOpacity style={styles.arrowContainer} onPress={() => { this.props.navigation.navigate('CorpExclusive4') }}>
            <Image
              source={require('../../../../assets/icons/arrow-back.png')}
              style={styles.headerArrow}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Booking Summary</Text>
        </View>

        {/* Booking Summary Content */}
        <View style={styles.innerContent}>

          {/* Driver and Vehicle Information */}
          <View style={styles.contentContainer1}>
            <View style={[styles.alignItemCenter, styles.part1Padding, styles.borderPart2]}>
              <View style={[styles.alignItemCenter]}>
                <View>
                  <Text style={styles.labelText}>Driver Information</Text>
                </View>
              </View>
            </View>
            <View style={[styles.alignItemCenter, styles.part1Padding]}>
              <View>
                <Image 
                  source={{uri:driver.profileImage}}
                  style={styles.image}
                />
              </View>
            </View>
            <View style={[styles.row, styles.justifyContentSpaceBetween, styles.part1Padding]}>
              <View>
                <Text style={styles.contentText}>Name:</Text>
              </View>
              <View>
                <Text style={styles.contentText}>{driver.firstName + ' ' + driver.middleName + ' ' + driver.lastName}</Text>
              </View>
            </View>
            <View style={[styles.row, styles.justifyContentSpaceBetween, styles.part1Padding]}>
              <View>
                <Text style={styles.contentText}>Mobile Number:</Text>
              </View>
              <View>
                <Text style={styles.contentText}>{driver.mobileNumber}</Text>
              </View>
            </View>
            <View style={[styles.row, styles.justifyContentSpaceBetween, styles.part1Padding]}>
              <View>
                <Text style={styles.contentText}>Email:</Text>
              </View>
              <View>
                <Text style={styles.contentText}>{driver.email}</Text>
              </View>
            </View>
          </View>

          <View style={styles.contentContainer2}>
            <View style={[styles.alignItemCenter, styles.part1Padding, styles.borderPart2]}>
              <View style={[styles.alignItemCenter]}>
                <Text style={styles.labelText}>Vehicle Information </Text>
              </View>
            </View>
            <View style={[styles.alignItemCenter, styles.part1Padding]}>
              <View>
                <Image 
                  source={{uri:vehicle.vehicleImage}}
                  style={styles.image}
                />
              </View>
            </View>
            <View style={[styles.row, styles.justifyContentSpaceBetween, styles.part1Padding]}>
              <View>
                <Text style={styles.contentText}>Vehicle:</Text>
              </View>
              <View>
                <Text style={styles.contentText}>{vehicle.vehicleMake + ' ' + vehicle.vehicleModel + ' ' + vehicle.vehicleYear}</Text>
              </View>
            </View>
            <View style={[styles.row, styles.justifyContentSpaceBetween, styles.part1Padding]}>
              <View>
                <Text style={styles.contentText}>Plate Number:</Text>
              </View>
              <View>
                <Text style={styles.contentText}>{vehicle.plateNumber}</Text>
              </View>
            </View>
            <View style={[styles.row, styles.justifyContentSpaceBetween, styles.part1Padding]}>
              <View>
                <Text style={styles.contentText}>Vehicle Color:</Text>
              </View>
              <View>
                <Text style={styles.contentText}>{vehicle.vehicleColor}</Text>
              </View>
            </View>
          </View>
          
        </View>

        <View style={styles.alignItemCenter}>
          {/* Book Button */}
          <TouchableOpacity style={styles.bookButtonOrange} onPress={() => {
            this.props.navigation.navigate('CorpExclusive6')
          }}>
            <Text style={styles.buttonText}> CONFIRM </Text>
          </TouchableOpacity>
        </View>
            
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'rgb(238, 241, 217)',
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
    fontSize: 18,
    marginBottom: '3%'
  },
  image: {
    height: 100,
    width: 100,
    marginTop: '3%',
    marginBottom: '3%',
    resizeMode: 'center'
  },
  alignItemCenter: {
    alignItems: 'center',
    zIndex: 0
  },
  row: {
    flexDirection: 'row',
  },
  justifyContentSpaceBetween: {
    justifyContent: 'space-between'
  },
  contentContainer1: {
    backgroundColor: 'rgb(28, 32, 38)',
    marginTop: '6%',
    marginRight: '3%',
    marginLeft: '3%',
    marginBottom: '3%',
    paddingTop: '3%',
    paddingRight: '5%',
    paddingLeft: '5%',
    paddingBottom: '5%',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 6},
    shadowOpacity: 0.7,
    shadowRadius: 3,
  },
  contentContainer2: {
    backgroundColor: 'rgb(28, 32, 38)',
    margin: '3%',
    padding: '5%',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 6},
    shadowOpacity: 0.7,
    shadowRadius: 3,
  },
  contentText: {
    color: 'white'
  },
  contentSubText: {
    color: 'white',
    fontSize: 11
  },
  contextAddressText: {
    color: 'white',
    marginTop: 15,
  },
  contextPaymentText1: {
    color: 'white',
    marginTop: 10,
    marginBottom: 40,
    paddingLeft: 10
  },
  contextPaymentText2: {
    color: 'white',
    marginTop: 10,
    paddingLeft: 10
  },
  part1Padding: {
    marginBottom: '3%'
  },
  part2Padding: {
    marginBottom: '3%'
  },
  borderPart2: {
    borderBottomWidth: 2,
    borderBottomColor: 'rgb(38, 43, 52)'
  },
  bookButtonOrange: {
    marginTop: '3%',
    height: 50,
    width: '70%',
    borderRadius: 5,
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