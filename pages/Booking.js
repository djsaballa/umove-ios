import React, { Component }  from 'react';
import { StyleSheet, View, ImageBackground, Image, Text, TextInput, TouchableOpacity } from 'react-native';

const bgImage = '../assets/bg-image.png';

export default class Booking extends Component {  
  constructor() {
    super();
    
    this.state = { 
    };
  }

  render() {
    return(
      <View style={styles.container}>
        <ImageBackground source={require(bgImage)} resizeMode='cover' style={styles.image}>
          <View style={styles.innerContainer}>
            <View style={styles.content}>

              {/* Quick Quotation Options */}
              <View style={styles.alignItemCenter}>
                <Text style={styles.label}>Quick Quotation</Text>

                {/* Exclusive */}
                <TouchableOpacity>
                  <View style={styles.truckSection1}>
                    <Image
                      source={require('../assets/quick-quotation/exclusive.png')}
                      style={styles.truckImage1}
                    />
                    <Text style={styles.text}>Exclusive</Text>
                  </View>
                </TouchableOpacity>

                {/* Shared */}
                <TouchableOpacity>
                  <View style={styles.truckSection2}>
                    <Image
                      source={require('../assets/quick-quotation/shared.png')}
                      style={styles.truckImage2}
                    />
                    <Text style={styles.text}>Shared</Text>
                  </View>
                </TouchableOpacity>
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
  label: {
    color: 'white',
    fontSize: 20,
    fontWeight:'bold',
    marginBottom: '15%'
  },
  truckSection1: {
    alignItems: 'center',
    marginBottom: '18%'
  },
  truckSection2: {
    alignItems: 'center',
  },
  truckImage1: {
    height: 135,
    width: 225,
  },
  truckImage2: {
    height: 170,
    width: 235,
  },
  text: {
    color: 'rgb(223,131,68)',
    fontSize: 25
  }
})