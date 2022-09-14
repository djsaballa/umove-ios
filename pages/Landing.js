import React, { Component }  from 'react';
import { StyleSheet, View, ImageBackground, Image } from 'react-native';
import { EventRegister } from 'react-native-event-listeners'

import { CustomerApi } from '../api/customer'; 
import { getStorage, setStorage } from '../api/helper/storage';

const bgImage = '../assets/bg-image.png';

export default class Landing extends Component {  
  constructor() {
    super();
    
    this.state = { 
      username: '',
      password: '', 
      remember: false,
      error: false,
    };
  }

  async componentDidMount() {
    this.init();
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
  
  async init() {
    let remember = await getStorage('remember');
    if(remember) {
      this.setState({remember});
      let loginInfo = await getStorage('loginInfo');
      if(loginInfo) {
        this.setState({username: loginInfo[0]})
        this.setState({password: loginInfo[1]})
        let [res, err] = await CustomerApi.login(loginInfo[0], loginInfo[1]);
        if(err) {
          this.setState({ error: true });
        }
        if(res) {
          await setStorage('user', res)
          this.props.navigation.navigate('Dashboard');
        }
      }
    } else {
      await setStorage('loginInfo', null)
      setTimeout(() => {
        this.props.navigation.navigate('Start')
        }, 1000);
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
    return(
      <View style={styles.container}>
        <ImageBackground source={require(bgImage)} resizeMode='cover' style={styles.image}>
          <View style={styles.innerContainer}>
            <View style={styles.content}>

              {/* Logo */}
              <View style={styles.alignItemCenter}>
                <Image
                  source={require('../assets/logo/logo.png')}
                  style={styles.logo}
                />
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
})