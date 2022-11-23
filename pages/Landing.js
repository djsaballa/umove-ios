import React, { Component }  from 'react';
import { StyleSheet, View, ImageBackground, Image } from 'react-native';
import { EventRegister } from 'react-native-event-listeners'

import { CustomerApi } from '../api/customer'; 
import { getStorage, setStorage } from '../api/helper/storage';

const bgImage = '../assets/bg-image.jpg';

export default class Landing extends Component {  
  constructor() {
    super();
    
    this.state = { 
      username: '',
      password: '', 
      user: {},
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
          this.customerTypeRouting(res);
        }
      }
    } else {
      await setStorage('loginInfo', null)
      setTimeout(() => {
        this.props.navigation.navigate('Start1')
      }, 1000);
    }
  }

  async customerTypeRouting(res) {
    await setStorage('user', res)
    let user = await getStorage('user')
    this.setState({user})
    let customerType = this.state.user.customer_type
    if(customerType == 'Individual') {
      this.props.navigation.navigate('IndivDashboard')
    } else if (customerType == 'Corporate') {
      this.props.navigation.navigate('CorpDashboard');
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

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.content}>

            {/* Logo */}
            <View style={styles.alignItemCenter}>
              <Image
                source={require('../assets/logo/logo-primary.png')}
                style={styles.logo}
              />
            </View>

          </View>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    backgroundColor: 'rgb(238, 241, 217)',
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
    height: 90,
    width: '80%',
  },
})