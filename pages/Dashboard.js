import React, { Component }  from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { EventRegister } from 'react-native-event-listeners'
import Constants from 'expo-constants';

import { AuthenticationApi } from '../api/authentication'; 
import { getStorage, setStorage } from '../api/helper/storage';

const bgImage = '../assets/bg-image.png';

export default class QuickQuotation4 extends Component {  
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
    await AuthenticationApi.logout(user.refresh);
    this.props.navigation.navigate('Login');
    EventRegister.emit('logout', true);
  }

  render() {
    return(
      <View style={styles.container}>
        <ImageBackground source={require(bgImage)} resizeMode='cover' style={styles.image}>
          <View style={styles.innerContainer}>
            <View style={styles.header}>
              <View style={styles.headerSpacing}>
                <Image
                  source={require('../assets/logo/logo.png')}
                  style={styles.logo}
                />
                {/* Button */}
                <TouchableOpacity style={styles.logOutButton} onPress={() => this.logOut() }>
                  <Text style={styles.buttonText}>Log Out</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.content}>
              <View style={styles.flexEnd}>
                <View style={styles.balance}>
                  <View style={styles.balanceContainer}>
                    <Text style={styles.balanceText}>
                      Balance
                    </Text>
                  </View>
                  <View style={styles.moneyContainer}>
                    <View style={styles.symbol}>
                      <Text style={styles.moneyText}>
                        ₱ 
                      </Text>
                    </View>
                    <View style={styles.value}>
                      <Text style={styles.moneyText}>
                        {this.state.balance}
                      </Text>
                    </View>
                  </View>
                </View> 
              </View>
              <View style={styles.textContatiner}>
                <View style={styles.bigTextContainer}>
                  <Text style={styles.bigText}>
                    Send anything fast.
                  </Text>
                </View>
                <View style={styles.smallTextContainer}>
                  <Text style={styles.smallText}>
                    There is no transfer, leading to the destination, real-time monitoring, first compensation guarantee and peace of mind.
                  </Text>
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
    backgroundColor: 'rgb(29, 32, 39)', 
    shadowColor: '#171717',
    shadowOffset: {height: 5},
    shadowOpacity: 0.3,
  },
  headerSpacing: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logo: {
    height: 20,
    width: 100,
    marginTop: '2%',
    marginBottom: '3%',
  },
  logOutButton: {
    height: 28,
    width: '17%',
    borderRadius: 10,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'rgb(223,131,68)',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 6},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    marginLeft: '19%',
    marginRight: '2%',
    marginBottom: '1%',
  },
  buttonText: {
    color: 'white',
    fontSize: 13,
    fontWeight:'bold'
  },
  content: {
    flex: 1,
    
  },
  alignItemCenter: {
    alignItems: 'center',
  },
  flexEnd: {
    alignItems: 'flex-end',
  }, 
  balance: {
    width: '60%',
    height: 100,
    marginTop: '25%',
    marginRight: '10%',
    marginBottom: '20%',
    justifyContent: 'space-evenly',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 15
  },
  balanceContainer: {
    alignItems: 'center'
  },
  moneyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  balanceText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '300'
  },
  moneyText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '100'
  },
  textContatiner: {
    marginLeft: '10%',
  },
  bigTextContainer: {
    width: '35%'
  },
  bigText: {
    color: 'white',
    fontSize: 35,
    fontWeight: '100',
    lineHeight: 50
  },
  smallTextContainer: {
    width: '55%'
  },
  smallText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '100'
  }
})