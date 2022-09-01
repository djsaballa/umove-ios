import React, { Component }  from 'react';
import { StyleSheet, View, ImageBackground, Image, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';
import ModalSelector from 'react-native-modal-selector-searchable'

import { FetchApi }  from '../../api/fetch'
import { getStorage, setStorage } from '../../api/helper/storage';

const bgImage = '../../assets/bg-image.png';

export default class SignUp2 extends Component {  
  constructor(props) {
    super(props);
    
    this.state = { 
      regionList: [],
      provinceList: [],
      cityList: [],
      barangayList: [],
      streetAddress: '',
      region: '',
      province: '',
      city: '',
      barangay: '',
      zipcode: '',
    };
  }

  async componentDidMount() {
    //this.loadCompanyType()
    this.loadRegion()
  }

  // async loadCompanyType() {
  //   let [companyTypes, err] = await FetchApi.companyTypes()
  //   if(companyTypes) {
  //     this.setState({companyTypes})
  //   }
  // }

  async loadRegion() {
    let [regionList, err] = await FetchApi.regions()
    if(regionList) {
      this.setState({regionList})
    } 
    if(err) {
      console.log(err)
    }
  }

  async loadProvince(regionCode) {
    let [provinceList, err] = await FetchApi.provinces(regionCode)
    if(provinceList) {
      this.setState({provinceList})
    } 
    if(err) {
      console.log(err)
    }
  }

  async loadCity(provinceCode) {
    let [cityList, err] = await FetchApi.cities(provinceCode)
    if(cityList) {
      this.setState({cityList})
    } 
    if(err) {
      console.log(err)
    }
  }

  async loadBarangay(cityCode) {
    let [barangayList, err] = await FetchApi.barangays(cityCode)
    if(barangayList) {
      this.setState({barangayList})
    }
    if(err) {
      console.log(err)
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <ImageBackground source={require(bgImage)} resizeMode='cover' style={styles.image}>
          <View style={styles.innerContainer}>
            <View style={styles.content}>

              <KeyboardAvoidingView behavior='padding'>
                <ScrollView>
                  {/* Logo */}
                  <View style={styles.alignItemCenter}>
                    <Image
                      source={require('../../assets/logo/logo.png')}
                      style={styles.logo}
                    />
                  </View>

                  <View style={[styles.inputContainer, styles.row, styles.marginTop]}>
                    {/* Street Address */}
                    <TextInput
                      style={[styles.fullWidthInput, styles.marginTop]}
                      onChangeText={(streetAddress) => {this.setState({streetAddress})}}
                      placeholder='House No., Lot, Street'
                      placeholderTextColor={'#808080'}
                    />
                  </View>
                  
                  {/* Region and Zip Code */}
                  <View style={[styles.inputContainer, styles.marginTop, styles.row]}>
                    {/* Region */}
                    <ModalSelector
                      data={this.state.regionList}
                      keyExtractor= {region => region.code}
                      labelExtractor= {region => region.name}
                      initValue="Select Region"
                      onChange={(region) => {this.setState({region:region.name}, async () => {
                        await this.loadProvince(region.code);
                      })}}
                      searchText={'Search'}
                      cancelText={'Cancel'}
                      style={styles.regionInput}
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
                        placeholderTextColor={'#808080'}                        
                        keyboardType='number-pad'
                        returnKeyType='done'
                      />
                  </View>

                  {/* Province */}
                  <View style={[styles.inputContainer, styles.marginTop, styles.row]}>
                    { this.state.region !== '' ? 
                      <ModalSelector
                        data={this.state.provinceList}
                        keyExtractor= {province => province.code}
                        labelExtractor= {province => province.name}
                        initValue="Select Province"
                        onChange={(province) => {this.setState({province:province.name}, async () => {
                          await this.loadCity(province.code);
                        })}}
                        searchText={'Search'}
                        cancelText={'Cancel'}
                        style={styles.fullWidthInput}
                        initValueTextStyle={styles.initValueTextStyle}
                        searchStyle={styles.searchStyle}
                        selectStyle={styles.selectStyle1}
                        selectTextStyle={styles.selectTextStyle}
                        sectionTextStyle={styles.sectionTextStyle}
                        cancelStyle={styles.cancelStyle}
                        cancelTextStyle={styles.cancelTextStyle}
                        overlayStyle={styles.overlayStyle}
                        touchableActiveOpacity={styles.touchableActiveOpacity}
                      />
                      :
                      <ModalSelector
                        disabled={true}
                        data={this.state.provinceList}
                        initValue="Select Province"
                        searchText={'Search'}
                        cancelText={'Cancel'}
                        style={styles.disabledFullWidthInput}
                        initValueTextStyle={styles.initValueTextStyle}
                        searchStyle={styles.searchStyle}
                        selectStyle={styles.disabledSelectStyle}
                        selectTextStyle={styles.selectTextStyle}
                        sectionTextStyle={styles.sectionTextStyle}
                        cancelStyle={styles.cancelStyle}
                        cancelTextStyle={styles.cancelTextStyle}
                        overlayStyle={styles.overlayStyle}
                        touchableActiveOpacity={styles.touchableActiveOpacity}
                      />
                    }
                  </View>

                  {/* City */}
                  <View style={[styles.inputContainer, styles.marginTop]}>
                    { this.state.province !== '' ?
                      <ModalSelector
                        data={this.state.cityList}
                        keyExtractor= {city => city.code}
                        labelExtractor= {city => city.name}
                        initValue="Select City"
                        onChange={(city) => {this.setState({city:city.name}, async () => {
                          await this.loadBarangay(city.code);
                        })}}
                        searchText={'Search'}
                        cancelText={'Cancel'}
                        style={styles.fullWidthInput}
                        initValueTextStyle={styles.initValueTextStyle}
                        searchStyle={styles.searchStyle}
                        selectStyle={styles.selectStyle1}
                        selectTextStyle={styles.selectTextStyle}
                        sectionTextStyle={styles.sectionTextStyle}
                        cancelStyle={styles.cancelStyle}
                        cancelTextStyle={styles.cancelTextStyle}
                        overlayStyle={styles.overlayStyle}
                      />
                      :
                      <ModalSelector
                        disabled={true}
                        initValue="Select City"
                        searchText={'Search'}
                        cancelText={'Cancel'}
                        style={styles.disabledFullWidthInput}
                        initValueTextStyle={styles.initValueTextStyle}
                        searchStyle={styles.searchStyle}
                        selectStyle={styles.disabledSelectStyle}
                        selectTextStyle={styles.selectTextStyle}
                        sectionTextStyle={styles.sectionTextStyle}
                        cancelStyle={styles.cancelStyle}
                        cancelTextStyle={styles.cancelTextStyle}
                        overlayStyle={styles.overlayStyle}
                        touchableActiveOpacity={styles.touchableActiveOpacity}
                      />
                    }
                  </View>

                  {/* Barangay */}
                  <View style={[styles.inputContainer, styles.marginTop]}>
                    { this.state.city !== '' ? 
                      <ModalSelector
                        data={this.state.barangayList}
                        keyExtractor= {barangay => barangay.code}
                        labelExtractor= {barangay => barangay.name}
                        initValue="Select Barangay"
                        onChange={(barangay) => {this.setState({barangay:barangay.name})}}
                        searchText={'Search'}
                        cancelText={'Cancel'}
                        style={styles.fullWidthInput}
                        initValueTextStyle={styles.initValueTextStyle}
                        searchStyle={styles.searchStyle}
                        selectStyle={styles.selectStyle1}
                        selectTextStyle={styles.selectTextStyle}
                        sectionTextStyle={styles.sectionTextStyle}
                        cancelStyle={styles.cancelStyle}
                        cancelTextStyle={styles.cancelTextStyle}
                        overlayStyle={styles.overlayStyle}
                      />
                      :
                      <ModalSelector
                        disabled={true}
                        initValue="Select Barangay"
                        searchText={'Search'}
                        cancelText={'Cancel'}
                        style={styles.disabledFullWidthInput}
                        initValueTextStyle={styles.initValueTextStyle}
                        searchStyle={styles.searchStyle}
                        selectStyle={styles.disabledSelectStyle}
                        selectTextStyle={styles.selectTextStyle}
                        sectionTextStyle={styles.sectionTextStyle}
                        cancelStyle={styles.cancelStyle}
                        cancelTextStyle={styles.cancelTextStyle}
                        overlayStyle={styles.overlayStyle}
                        touchableActiveOpacity={styles.touchableActiveOpacity}
                      />
                    }
                  </View>

                  <View style={styles.alignItemCenter}>
                  {/* Next Button */}
                    {/* Make button gray when not all inputs are filled out, orange when filled out */}
                    { this.state.streetAddress == '' || this.state.region == 0 || this.state.province == '' || this.state.city == '' || this.state.barangay == '' || this.state.zipcode == '' ?
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
              </KeyboardAvoidingView>

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
    marginTop: Constants.statusBarHeight
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  alignItemCenter: {
    alignItems: 'center'
  },
  logo: {
    height: 50,
    width: 240,
    marginTop: '25%',
    marginBottom: '10%',
  },
  row: {
    flexDirection: 'row',
  },
  marginTop: {
    marginTop: '6%'
  },
    inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullWidthInput: {
    backgroundColor: 'white',
    width: '90%',
    height: 50,
    borderRadius: 25,
    paddingLeft: '5%'
  },
  regionInput: {
    width: '62%',
  },
  zipInput: {
    backgroundColor: 'white',
    width: '25%',
    height: 50,
    borderRadius: 25,
    textAlign: 'center',
    marginLeft: '3%'
  },
  initValueTextStyle: {
    fontSize: 14,
    color: "#808080"
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
  },
  selectStyle2: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    borderRadius: 25,
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: '10%'
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
  disabledFullWidthInput: {
    backgroundColor: 'rgb(222, 223, 228)',
    width: '90%',
    height: 50,
    borderRadius: 25,
    paddingLeft: '5%'
  },
  disabledSelectStyle: {
    backgroundColor: 'rgb(222, 223, 228)',
    width: '100%',
    height: 50,
    borderRadius: 25,
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  nextButtonGray: {
    marginTop: '15%',
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
  nextButtonOrange: {
    marginTop: '10%',
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
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight:'bold'
  },
})