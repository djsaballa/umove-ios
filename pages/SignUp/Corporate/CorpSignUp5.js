import React, { Component }  from 'react';
import { StyleSheet, View, ImageBackground, Image, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';
import * as DocumentPicker from 'expo-document-picker'

import { getStorage, setStorage } from '../../../api/helper/storage';

const bgImage = '../../../assets/bg-image.png';

export default class CorpSignUp5 extends Component {  
  constructor(props) {
    super(props);
    
    this.state = { 
      register: {},
    };
  }

  async componentDidMount() {
    this.init();
  }

  async init() {
    let register = await getStorage('register')
    this.setState({register})
  }

  async signUp() {
      let register = this.state.register;
      await setStorage('register', register);
      this.props.navigation.navigate('CorpSignUp6')
  }

  async selectBIRFile() {
    let register = this.state.register
    try {
      const response = await DocumentPicker.getDocumentAsync();
      if(register.bir !== null) {
        if(response.type == 'cancel') {
          console.log(response.type);
        } else {
          register.bir = response
          this.setState({register});
        }
      } else {
        if(response.type == 'cancel') {
          register.bir = null
          this.setState({register})
        } else {
          register.bir = response
          this.setState({register});
        }
      }
    } catch (err) {
      register.bir = null
      this.setState({register})
    }
  }

  async selectDTIFile() {
    let register = this.state.register
    try {
      const response = await DocumentPicker.getDocumentAsync();
      if(register.dti !== null) {
        if(response.type == 'cancel') {
          console.log(response.type);
        } else {
          register.dti = response
          this.setState({register});
        }
      } else {
        if(response.type == 'cancel') {
          register.dti = null
          this.setState({register})
        } else {
          register.dti = response
          this.setState({register});
        }
      }
    } catch (err) {
      register.dti = null
      this.setState({register})
    }
  }

  async selectValidId() {
    let register = this.state.register
    try {
      const response = await DocumentPicker.getDocumentAsync();
      if(register.validId !== null) {
        if(response.type == 'cancel') {
          console.log(response.type);
        } else {
          register.validId = response
          this.setState({register});
        }
      } else {
        if(response.type == 'cancel') {
          register.validId = null
          this.setState({register})
        } else {
          register.validId = response
          this.setState({register});
        }
      }
    } catch (err) {
      register.validId = null
      this.setState({register})
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
                    <View style={[styles.alignItemCenter]}>
                      <Text style={styles.headerText}>
                        Document Upload
                      </Text>
                    </View>

                    {/* BIR */}
                    <View style={[styles.uploadContainer]}>
                      <Text style={styles.text}>
                        BIR Cert. of Registration (Form 2303):
                      </Text>
                      <TouchableOpacity style={[styles.uploadButton]} onPress={() => this.selectBIRFile()}>
                        <View style={styles.uploadFileName}>
                          { register.bir == null ?
                            <Text style={styles.uploadFileNameText}>  Upload File </Text>
                          :
                            <Text numberOfLines={1} style={styles.uploadFileNameText}> {register.bir.name} </Text>
                          }
                        </View>
                        <View style={styles.uploadButtonColor}>
                          <Text style={styles.uploadButtonText}>Upload</Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    {/* DTI */}
                    <View style={[styles.uploadContainer, styles.marginTop]}>
                      <Text style={styles.text}>
                        DTI / SEC
                      </Text>
                      <TouchableOpacity style={[styles.uploadButton]} onPress={() => this.selectDTIFile()}>
                        <View style={styles.uploadFileName}>
                          { register.dti == null ?
                            <Text style={styles.uploadFileNameText}>  Upload File </Text>
                          :
                            <Text numberOfLines={1} style={styles.uploadFileNameText}> {register.dti.name} </Text>
                          }
                        </View>
                        <View style={styles.uploadButtonColor}>
                          <Text style={styles.uploadButtonText}>Upload</Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    {/* Valid ID */}
                    <View style={[styles.uploadContainer, styles.marginTop]}>
                      <Text style={styles.text}>
                        Valid ID (UMID, Driver's License, Passport)
                      </Text>
                      <TouchableOpacity style={[styles.uploadButton]} onPress={() => this.selectValidId()}>
                        <View style={styles.uploadFileName}>
                          { register.validId == null ?
                            <Text style={styles.uploadFileNameText}>  Upload File </Text>
                          :
                            <Text numberOfLines={1} style={styles.uploadFileNameText}> {register.validId.name} </Text>
                          }
                        </View>
                        <View style={styles.uploadButtonColor}>
                          <Text style={styles.uploadButtonText}>Upload</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.alignItemCenter}>
                  {/* Next Button */}
                    {/* Make button gray when not all inputs are filled out, orange when filled out */}
                    { register.bir == null || register.dti == null || register.validId == null ?
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
    marginTop: Constants.statusBarHeight,
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
  headerText: {
    fontSize: 18,
    color: 'white',
    marginBottom: '10%',
    fontWeight: 'bold'
  }, 
  marginTop: {
    marginTop: '8%'
  },
  uploadContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  uploadButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: '35%',
    marginTop: '5%',
    marginBottom: '7%',
  },
  uploadFileName: {
    backgroundColor: 'rgb(222, 223, 228)',
    width: '60%',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#676767',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  uploadFileNameText: {
    paddingLeft: 5,
    color: 'rgb(132, 134, 148)'
  },
  uploadButtonColor: {
    backgroundColor: 'rgb(223,131,68)',
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#676767',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  uploadButtonText: {
    color: 'white'
  },
  text: {
    fontSize: 15,
    color: 'rgb(132, 134, 148)',
    marginTop: '7%'
  },
  nextButtonGray: {
    height: 50,
    width: '100%',
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
    height: 50,
    width: '100%',
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