import React, { Component }  from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { EventRegister } from 'react-native-event-listeners'
import Constants from 'expo-constants';

import { CustomerApi } from '../../api/customer'; 
import { getStorage, setStorage } from '../../api/helper/storage';

const bgImage = '../../assets/bg-image.jpg';

export default class Calendar extends Component {  
  constructor() {
    super();
    
    this.state = { 
      balance: '00.00',
      user: []
    };
  }

  async componentDidMount() {
    this.init();
  }
  
  async init() {
    let user = await getStorage('user');
    this.setState({user})
  }

  async logOut() {
    let user = await getStorage('user');
    await CustomerApi.logout(user.refresh);
    this.props.navigation.navigate('Login');
    EventRegister.emit('logout', true);
  }

  render() {
    return(
      <View style={styles.container}>
        <ImageBackground source={require(bgImage)} resizeMode='cover' style={styles.image}>
          <View style={styles.innerContainer}>

            {/* Header */}
            <View style={styles.header}>
              <View style={styles.headerSpacing}>
                {/* Side Menu Bar */}
                <TouchableOpacity onPress={() => { alert('Side Menu') }}>
                  <Image 
                    source={require('../../assets/icons/sideMenu.png')}
                    style={styles.sideMenuIcon}
                  />
                </TouchableOpacity>
                {/* Logo */}
                <Image
                  source={require('../../assets/logo/logo.png')}
                  style={styles.logo}
                />
                {/* Headset Icon */}
                <TouchableOpacity onPress={() => { alert('Headset') }}>
                  <Image 
                    source={require('../../assets/icons/headset.png')}
                    style={styles.headsetIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.content}>

              {/* Placeholder */}
              <View style={styles.alignItemCenter}>
                <View style={styles.placeholder}>
                  <View style={styles.placeholderContainer}>
                    <Text style={styles.placeholderText}>
                      Calendar
                    </Text>
                  </View>
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
  header: {
    width: '100%',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#1B2027', 
    shadowColor: '#171717',
    shadowOffset: {height: 5},
    shadowOpacity: 0.3,
  },
  headerSpacing: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    height: 20,
    width: 100,
    marginTop: '2%',
    marginBottom: '3%',
  },
  sideMenuIcon: {
    height: 23,
    width: 20,
    marginLeft: 15
  },
  headsetIcon: {
    height: 20,
    width: 20,
    marginRight: 15
  },
  content: {
    flex: 1,
    justifyContent: 'center'
  },
  alignItemCenter: {
    alignItems: 'center',
  },
  placeholder: {
    width: '60%',
    height: 100,
    marginBottom: '20%',
    justifyContent: 'space-evenly',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 15
  },
  placeholderContainer: {
    alignItems: 'center'
  },
  placeholderText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '300'
  },
})