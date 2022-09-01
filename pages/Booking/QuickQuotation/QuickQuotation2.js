import React, { Component }  from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import ModalSelector from 'react-native-modal-selector-searchable'

const barangayList = [
  { key: 0, section: true, label: 'Select Barangay' },
  { key: 1, label: 'Barangay 1' },
  { key: 2, label: 'Barangay 2' },
  { key: 3, label: 'Barangay 3' },
  { key: 4, label: 'Barangay 4' },
  { key: 5, label: 'Barangay 5' },
  { key: 6, label: 'Barangay 6' },
  { key: 7, label: 'Barangay 7' },
  { key: 8, label: 'Barangay 8' },
  { key: 9, label: 'Barangay 9' },
  { key: 10, label: 'Barangay 10' },
  { key: 11, label: 'Barangay 11' },
  { key: 12, label: 'Barangay 12' },
  { key: 13, label: 'Barangay 13' },
  { key: 14, label: 'Barangay 14' },
  { key: 15, label: 'Barangay 15' },
  { key: 16, label: 'Barangay 16' },
  { key: 17, label: 'Barangay 17' },
  { key: 18, label: 'Barangay 18' },
  { key: 19, label: 'Barangay 19' },
  { key: 20, label: 'Barangay 20' },
  { key: 21, label: 'Barangay 21' },
];

const cityList = [
  { key: 0, section: true, label: 'Select City' },
  { key: 1, label: 'City 1' },
  { key: 2, label: 'City 2' },
  { key: 3, label: 'City 3' },
  { key: 4, label: 'City 4' },
  { key: 5, label: 'City 5' },
  { key: 6, label: 'City 6' },
  { key: 7, label: 'City 7' },
  { key: 8, label: 'City 8' },
  { key: 9, label: 'City 9' },
  { key: 10, label: 'City 10' },
  { key: 11, label: 'City 11' },
  { key: 12, label: 'City 12' },
  { key: 13, label: 'City 13' },
  { key: 14, label: 'City 14' },
  { key: 15, label: 'City 15' },
  { key: 16, label: 'City 16' },
  { key: 17, label: 'City 17' },
  { key: 18, label: 'City 18' },
  { key: 19, label: 'City 19' },
  { key: 20, label: 'City 20' },
  { key: 21, label: 'City 21' },
];

const provinceList = [
  { key: 0, section: true, label: 'Select Province' },
  { key: 1, label: 'Province 1' },
  { key: 2, label: 'Province 2' },
  { key: 3, label: 'Province 3' },
  { key: 4, label: 'Province 4' },
  { key: 5, label: 'Province 5' },
  { key: 6, label: 'Province 6' },
  { key: 7, label: 'Province 7' },
  { key: 8, label: 'Province 8' },
  { key: 9, label: 'Province 9' },
  { key: 10, label: 'Province 10' },
  { key: 11, label: 'Province 11' },
  { key: 12, label: 'Province 12' },
  { key: 13, label: 'Province 13' },
  { key: 14, label: 'Province 14' },
  { key: 15, label: 'Province 15' },
  { key: 16, label: 'Province 16' },
  { key: 17, label: 'Province 17' },
  { key: 18, label: 'Province 18' },
  { key: 19, label: 'Province 19' },
  { key: 20, label: 'Province 20' },
  { key: 21, label: 'Province 21' },
];


export default class QuickQuotation2 extends Component {  
  constructor(props) {
    super(props);
    
    this.state = { 
      date: '',
      time: '',
      contactPerson: '',
      mobileNumber: '',
      streetAddress: '',
      barangay: '',
      city: '',
      province: '',
      zipcode: '',
      landmark: '',
    };
  }

  render() {
    return(
      <View style={styles.container}>

        {/* Header for Delivery Address */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Delivery Address</Text>
        </View>

        <ScrollView>
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}> Pick Up Details </Text>
          </View>
          {/* Date and Time */}
          <View style={[styles.inputContainer, styles.row, styles.marginTop]}>
            <TextInput
              style={styles.dateInput}
              onChangeText={(date) => {this.setState({date})}}
              placeholder='March 22, 2022'
              placeholderTextColor={'#C3C3C3'}
            />
            <TextInput
              style={styles.timeInput}
              onChangeText={(time) => {this.setState({time})}}
              placeholder='ASAP'
              placeholderTextColor={'#C3C3C3'}
            />
          </View>
          <View style={styles.inputContainer}>
            {/* Contact Person */}
            <TextInput
              style={[styles.fullWidthInput, styles.marginTop]}
              onChangeText={(contactPerson) => {this.setState({contactPerson})}}
              placeholder='Contact Person'
              placeholderTextColor={'#C3C3C3'}
            />
            {/* Mobile Number */}
            <TextInput
              style={[styles.fullWidthInput, styles.marginTop]}
              onChangeText={(mobileNumber) => {this.setState({mobileNumber})}}
              placeholder='Mobile Number'
              placeholderTextColor={'#C3C3C3'}
            />
            {/* Street Address */}
            <TextInput
              style={[styles.fullWidthInput, styles.marginTop]}
              onChangeText={(streetAddress) => {this.setState({streetAddress})}}
              placeholder='Street Address'
              placeholderTextColor={'#C3C3C3'}
            />
          </View>
          {/* Barangay and City */}
          <View style={[styles.inputContainer, styles.marginTop, styles.row]}>
            {/* Barangay */}
            <ModalSelector
              data={barangayList}
              initValue="Barangay"
              onChange={(barangay) => {this.setState({barangay:barangay.label})}}
              searchText={'Search'}
              cancelText={'Cancel'}
              style={styles.barangayInput}
              initValueTextStyle={styles.initValueTextStyle}
              searchStyle={styles.searchStyle}
              selectStyle={styles.selectStyle1}
              selectTextStyle={styles.selectTextStyle}
              sectionTextStyle={styles.sectionTextStyle}
              cancelStyle={styles.cancelStyle}
              cancelTextStyle={styles.cancelTextStyle}
              overlayStyle={styles.overlayStyle}
            />
            {/* City */}
            <ModalSelector
              data={cityList}
              initValue="City"
              onChange={(city) => {this.setState({city:city.label})}}
              searchText={'Search'}
              cancelText={'Cancel'}
              style={styles.cityInput}
              initValueTextStyle={styles.initValueTextStyle}
              searchStyle={styles.searchStyle}
              selectStyle={styles.selectStyle1}
              selectTextStyle={styles.selectTextStyle}
              sectionTextStyle={styles.sectionTextStyle}
              cancelStyle={styles.cancelStyle}
              cancelTextStyle={styles.cancelTextStyle}
              overlayStyle={styles.overlayStyle}
            />
          </View>
          {/* Province and ZIP Code */}
          <View style={[styles.inputContainer, styles.marginTop, styles.row]}>
            {/* Province */}
            <ModalSelector
              data={provinceList}
              initValue="Province"
              onChange={(province) => {this.setState({province:province.label})}}
              searchText={'Search'}
              cancelText={'Cancel'}
              style={styles.provinceInput}
              initValueTextStyle={styles.initValueTextStyle}
              searchStyle={styles.searchStyle}
              selectStyle={styles.selectStyle2}
              selectTextStyle={styles.selectTextStyle}
              sectionTextStyle={styles.sectionTextStyle}
              cancelStyle={styles.cancelStyle}
              cancelTextStyle={styles.cancelTextStyle}
              overlayStyle={styles.overlayStyle}
              touchableActiveOpacity={styles.touchableActiveOpacity}
            />
            {/* ZIP Code */}
            <TextInput
                style={[styles.zipInput]}
                onChangeText={(zipcode) => {this.setState({zipcode})}}
                placeholder='ZIP Code'
                placeholderTextColor={'#C3C3C3'}
                keyboardType='number-pad'
                returnKeyType='done'
              />
          </View>
          <View style={styles.inputContainer}>
            {/* Landmarks */}
            <TextInput
              style={[styles.fullWidthInput, styles.marginTop]}
              onChangeText={(landmark) => {this.setState({landmark})}}
              placeholder='Landmarks (Optional)'
              placeholderTextColor={'#C3C3C3'}
            />
          </View>

          <View style={styles.alignItemCenter}>
          {/* Next Button */}
            {/* Make button gray when not all inputs are filled out, orange when filled out */}
            { this.state.date == '' || this.state.time == '' || this.state.contactPerson == '' || this.state.mobileNumber == '' || this.state.streetAddress == '' || this.state.barangay == '' || this.state.city == '' || this.state.province == '' || this.state.zipcode == '' || this.state.landmark == '' ?
            <TouchableOpacity style={styles.nextButtonGray} disabled={true}>
              <Text style={styles.buttonText}> NEXT </Text>
            </TouchableOpacity>
            :
            <TouchableOpacity style={styles.nextButtonOrange} onPress={() => alert('Next')}>
              <Text style={styles.buttonText}> NEXT </Text>
            </TouchableOpacity>
            }
          </View>
          
        </ScrollView>
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
    alignItems: 'center'
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    marginTop: '5%',
    marginBottom: '5%',
  },
  labelContainer: {
    marginTop: '5%',
    marginLeft: '6%'
  },
  labelText: {
    color: 'white',
    fontSize: 15
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0
  },
  alignItemCenter: {
    alignItems: 'center',
    zIndex: 0
  },
  row: {
    flexDirection: 'row',
  },
  marginTop: {
    marginTop: '3%'
  },
  marginRight: {
    marginRight: '2%'
  },
  dateInput: {
    backgroundColor: 'white',
    width: '59%',
    marginRight: 7,
    height: 50,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    paddingLeft: '5%'
  },
  timeInput: {
    backgroundColor: 'white',
    width: '29%',
    height: 50,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    textAlign: 'center'
  },
  fullWidthInput: {
    backgroundColor: 'white',
    width: '90%',
    height: 50,
    borderRadius: 25,
    paddingLeft: '5%'
  },
  zipInput: {
    backgroundColor: 'white',
    width: '30%',
    height: 50,
    borderRadius: 25,
    textAlign: 'center',
    marginLeft: '3%'
  },
  barangayInput: {
    width: '43%',
  },
  cityInput: {
    width: '43%',
    marginLeft: '3%'
  },
  provinceInput: {
    width: '56%',
  },
  initValueTextStyle: {
    fontSize: 14,
    color: "#C3C3C3"
  },
  searchStyle: {
    borderColor: 'black',
    height: 40,
    marginTop: '5%'
  },
  selectStyle1: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    borderRadius: 25,
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: '10%'
  },
  selectStyle2: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    borderRadius: 25,
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: '8%'
  },
  selectTextStyle: {
    fontSize: 14,
    color: 'black'
  },
  sectionTextStyle: {
    fontSize: 18,
    fontWeight: '500'
  },
  cancelStyle: {
    justifyContent: 'center',
    height: 50,
  },
  cancelTextStyle: {
    color: 'red',
    fontSize: 16,
    fontWeight: '500'
  },
  overlayStyle: {
    flex: 1, 
    marginTop: Constants.statusBarHeight,
    padding: '5%', 
    justifyContent: 'center', 
    backgroundColor: 'rgba(0,0,0,0.7)' 
  },
  nextButtonGray: {
    marginTop: '5%',
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