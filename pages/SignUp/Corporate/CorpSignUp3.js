import React, { Component }  from 'react';
import { StyleSheet, View, ImageBackground, Image, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';
import ModalSelector from 'react-native-modal-selector-searchable'

import { FetchApi }  from '../../../api/fetch'
import { getStorage, setStorage } from '../../../api/helper/storage';

const bgImage = '../../../assets/bg-image.png';

export default class CorpSignUp3 extends Component {  
  constructor(props) {
    super(props);
    
    this.state = { 
      register: {
        customerType: '',
        firstName: '',
        middleName: '',
        lastName: '',
        username: '',
        email: '',
        mobileNumber: '',
        streetAddress: '',
        region: '',
        province: '',
        city: '',
        barangay: '',
        zipcode: '',
        companyName: '',
        companyType: '',
        companyEmail: '',
        companyMobileNumber: '',
        companyAddress: '',
        officeAddress: '',
        officeRegion: '',
        officeProvince: '',
        officeCity: '',
        officeBarangay: '',
        officeZipcode: '',
        password: '',
        confirmPassword: '', 
      },
      companyTypeList: [],
    };
  }

  async componentDidMount() {
    this.init();
    this.loadComapnyType();
  }

  async init() {
    let register = await getStorage('register')
    this.setState({register})
  }

  async signUp() {
      let register = this.state.register;
      await setStorage('register', register);
      this.props.navigation.navigate('CorpSignUp4')
    }

  async loadComapnyType() {
    let [companyTypeList, err] = await FetchApi.companyTypes()
    if(companyTypeList) {
      this.setState({companyTypeList})
    } 
    if(err) {
      console.log(err)
    }
  }
  render() {
    let register = this.state.register;
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
                      source={require('../../../assets/logo/logo.png')}
                      style={styles.logo}
                    />
                  </View>

                  <View style={[styles.inputContainer]}>
                    {/* Header */}
                    <Text style={styles.text}>
                      Company Profile
                    </Text>
                    
                    {/* Company Name */}
                    <TextInput
                      style={[styles.fullWidthInput]}
                      onChangeText={(val) => {
                        register.companyName = val;
                        this.setState({register})
                      }}
                      placeholder='Company Name'
                      placeholderTextColor={'#808080'}
                    />
                  </View>

                  {/* Company Email */}
                  <View style={[styles.inputContainer, styles.marginTop]}>                    
                    <TextInput
                      style={[styles.fullWidthInput]}
                      keyboardType='email-address'
                      onChangeText={(val) => {
                        register.companyEmail = val;
                        this.setState({register})
                      }}
                      placeholder='Company Email Address'
                      placeholderTextColor={'#808080'}
                    />
                  </View>

                  {/* Company Mobile Number */}
                  <View style={[styles.inputContainer, styles.marginTop]}>                    
                    <TextInput
                      style={[styles.fullWidthInput]}
                      keyboardType='number-pad'
                      onChangeText={(val) => {
                        register.companyMobileNumber = val;
                        this.setState({register})
                      }}
                      placeholder='Company Mobile Number'
                      placeholderTextColor={'#808080'}
                      maxLength={11}
                    />
                  </View>

                  {/* Company Address */}
                  <View style={[styles.inputContainer, styles.marginTop]}>                    
                    <TextInput
                      style={[styles.fullWidthInput]}
                      onChangeText={(val) => {
                        register.companyAddress = val;
                        this.setState({register})
                      }}
                      placeholder='Building Name, Block, Lot, Street'
                      placeholderTextColor={'#808080'}
                    />
                  </View>

                  {/* Company Type */}
                  <View style={[styles.inputContainer, styles.marginTop, styles.row]}>
                    <ModalSelector
                      data={this.state.companyTypeList}
                      keyExtractor= {companyType => companyType.id}
                      labelExtractor= {companyType => companyType.type_name}
                      initValue="Select Company Type"
                      onChange={(companyType) => {
                        register.companyType = companyType.id;
                        this.setState({register});
                      }} 
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
                  </View>

                  {/* Next Button */}
                  <View style={styles.alignItemCenter}>
                    {/* Make button gray when not all inputs are filled out, orange when filled out */}
                    { register.companyName == '' || register.companyType == '' || register.companyEmail == '' || register.companyMobileNumber == '' || register.companyAddress == '' ?
                    <TouchableOpacity style={styles.nextButtonGray} disabled={true}>
                      <Text style={styles.buttonText}> NEXT </Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.nextButtonOrange} onPress={() => this.signUp() }>
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
    marginBottom: '15%',
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
  text: {
    fontSize: 18,
    color: 'white',
    marginBottom: '5%',
    fontWeight: 'bold'
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
    marginTop: '15%',
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