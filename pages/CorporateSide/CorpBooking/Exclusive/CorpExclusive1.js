import React, { Component }  from 'react';
import { StatusBar, StyleSheet, View, Text, TextInput, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Constants from 'expo-constants';
import DropDownPicker from 'react-native-dropdown-picker';

import { FetchApi } from '../../../../api/fetch';
import { getStorage, setStorage } from '../../../../api/helper/storage';

var deviceWidth = Dimensions.get('window').width

export default class CorpExclusive1 extends Component {  
  constructor(props) {
    super(props);
    
    this.state = { 
      booking: {
        bookingType: 'Exclusive',
        vehicleType: '2',
        typeOfGood: '',
        productCategory: '',
        productSubcategory: '',
        packagingType: '',
        quantity: 0,
        width: '',
        length: '',
        weight: '',
        height: '',
        pickupName: '',
        pickupStreetAddress: '',
        pickupDate: '',
        pickupTime: '',
        pickupRegion: '',
        pickupProvince: '',
        pickupCity: '',
        pickupBarangay: '',
        pickupZipcode: '',
        pickupLandmark: '',
        pickupSpecialInstructions: '',
        dropoffName: '',
        dropoffStreetAddress: '',
        dropoffRegion: '',
        dropoffProvince: '',
        dropoffCity: '',
        dropoffBarangay: '',
        dropoffZipcode: '',
        dropoffLandmark: '',
        dropoffSpecialInstructions: '',
        paymentAddress: 'pickup',
        signature: 'true',
      },
      typeValue: '',
      typeOpen: false,
      typeItems: [],
      categoryValue: '',
      categoryOpen: false,
      categoryItems: [],
      subcategoryValue: '',
      subcategoryOpen: false,
      subcategoryItems: [],
      packagingTypeValue: '',
      packagingOpen: false,
      packagingItems: [],    
    };
  }

  async componentDidMount() {
    await setStorage('booking', null)
    this.loadType();
    this.loadPackaging();
  }

  async booking() {
    let booking = this.state.booking;
    await setStorage('booking', booking)
  }

  async loadType() {
    let [typeItems, err] = await FetchApi.typesOfGoods()
    if(typeItems) {
      this.setState({typeItems})
    } 
    if(err) {
      console.log(err)
    }
  }

  async loadCategory(productType) {
    let [categoryItems, err] = await FetchApi.productCategories(productType)
    if(categoryItems) {
      this.setState({categoryItems})
    }
    if(err) {
      console.log(err)
    }
  }

  async loadSubcategory(productCategory) {
    let [subcategoryItems, err] = await FetchApi.productSubcategories(productCategory)
    if(subcategoryItems) {
      this.setState({subcategoryItems})
    }
    if(err) {
      console.log(err)
    }
  }

  async loadPackaging() {
    let [packagingItems, err] = await FetchApi.packagingTypes()
    if(packagingItems) {
      this.setState({packagingItems})
    } 
    if(err) {
      console.log(err)
    }
  }

  plusQuantity = () => {
    let booking = this.state.booking;
    booking.quantity += 1
    this.setState({ booking });
  }

  minusQuantity = () => {
    let booking = this.state.booking;
    booking.quantity -= 1
    this.setState({ booking });
  }

  render() {
    let booking = this.state.booking;
    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
        <StatusBar barStyle="light-content" />

          {/* Header for Quick Quotation */}
          <View style={[styles.header, styles.justifyContent]}>
            <Text style={styles.label}>Exclusive Booking</Text>
          </View>

            {/* Dropdown for Type of Goods */}
            <View style={styles.dropDownContainer3}>
              <DropDownPicker
                placeholder="Select Type of Goods"
                placeholderStyle={styles.placeholderStyle}
                style={styles.typeDropdownStyle}
                containerStyle={styles.typeDropdownContainerStyle}
                schema={{
                  label: 'type_name',
                  value: 'id'
                }}              
                open={this.state.typeOpen} 
                items={this.state.typeItems}
                value={this.state.typeValue}
                setOpen={() => {this.setState({typeOpen: !this.state.typeOpen})}}
                setValue={(callback) => {this.setState(state => ({
                  typeValue: callback(state.typeValue)}), () => {
                    booking.typeOfGood = this.state.typeValue;
                    this.setState({ booking }, () => {
                      this.loadCategory(booking.typeOfGood)
                    })
                  })
                }}
                setItems={(callback) => {this.setState(state => ({
                  typeItems: callback(state.typeItems)}))}}
              />
            </View> 

            {/* Dropdown for Category */}
            <View style={styles.dropDownContainer2}>
              { this.state.categoryItems != '' ?
                <DropDownPicker
                  placeholder="Select Product Category"
                  placeholderStyle={styles.placeholderStyle}
                  style={styles.typeDropdownStyle}
                  containerStyle={styles.typeDropdownContainerStyle}
                  schema={{
                    label: 'category_name',
                    value: 'id'
                  }}
                  open={this.state.categoryOpen} 
                  items={this.state.categoryItems}
                  value={this.state.categoryValue}
                  setOpen={() => {this.setState({categoryOpen: !this.state.categoryOpen})}}
                  setValue={(callback) => {this.setState(state => ({
                    categoryValue: callback(state.categoryValue)}), () => {
                      booking.productCategory = this.state.categoryValue;
                      this.setState({ booking }, () => {
                        this.loadSubcategory(booking.productCategory)
                      })
                    })
                  }}
                  setItems={(callback) => {this.setState(state => ({
                    typeItems: callback(state.typeItems)}))}}
                />
              :
                <DropDownPicker
                placeholder="Select Product Category"
                  placeholderStyle={styles.placeholderStyle}
                  style={styles.disabledTypeDropdownStyle}
                  containerStyle={styles.typeDropdownContainerStyle}
                  disabled={true}
                  schema={{
                    label: 'category_name',
                    value: 'id'
                  }}
                  open={this.state.categoryOpen} 
                  items={this.state.categoryItems}
                  value={this.state.categoryValue}
                />
              }
            </View> 

            {/* Dropdown for Subcategory */}
            <View style={styles.dropDownContainer1}>
              { this.state.subcategoryItems != '' ?
                <DropDownPicker
                  placeholder="Select Subcategory"
                  placeholderStyle={styles.placeholderStyle}
                  style={styles.typeDropdownStyle}
                  containerStyle={styles.typeDropdownContainerStyle}
                  schema={{
                    label: 'subcategory_name',
                    value: 'id'
                  }}
                  open={this.state.subcategoryOpen} 
                  items={this.state.subcategoryItems}
                  value={this.state.subcategoryValue}
                  setOpen={() => {this.setState({subcategoryOpen: !this.state.subcategoryOpen})}}
                  setValue={(callback) => {this.setState(state => ({
                    subcategoryValue: callback(state.subcategoryValue)}), () => {
                      booking.productSubcategory = this.state.subcategoryValue;
                      this.setState({ booking })
                    })
                  }}
                  setItems={(callback) => {this.setState(state => ({
                    typeItems: callback(state.typeItems)}))}}
                />
              :
                <DropDownPicker
                  placeholder="Select Subcategory"
                  placeholderStyle={styles.placeholderStyle}
                  style={styles.disabledTypeDropdownStyle}
                  containerStyle={styles.typeDropdownContainerStyle}
                  schema={{
                    label: 'subcategory_name',
                    value: 'id'
                  }}
                  open={this.state.subcategoryOpen} 
                  items={this.state.subcategoryItems}
                  value={this.state.subcategoryValue}
                />
              }
            </View> 
            
            {/* UoM Container */}
            <View style={styles.uomContainer}>
              {/* Quantity */}
              <View style={styles.quantityContainer}>
                <View style={[styles.row, styles.alignItemCenter]}>
                  <Text style={styles.inputLabel}> Quantity </Text>
                  {/* Make minus sign gray when quantity is 0, orange when 1 or more*/}
                  { booking.quantity == 0 ?
                    <TouchableOpacity style={styles.quantityButtonGray} disabled={true}>
                      <Text style={styles.quantityButtonText}> - </Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.quantityButtonOrange} onPress={this.minusQuantity}>
                      <Text style={styles.quantityButtonText}> - </Text>
                    </TouchableOpacity>
                  }
                  {/* Display quantity */}
                  <Text style={styles.quantityText}> {booking.quantity} </Text>
                  {/* Add quantity sign */}
                  <TouchableOpacity style={styles.quantityButtonOrange} onPress={this.plusQuantity}>
                    <Text style={styles.quantityButtonText}> + </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Width and Length */}
              <View style={[styles.inputContainer, styles.row]}>
                {/* weight */}
                <View style={[styles.widthWeight, styles.row]}>
                  <View style={styles.alignItemCenter}>
                    <Text style={styles.inputLabel}>Width</Text>
                  </View>
                  <TextInput
                    style={styles.widthLengthWeightInput}
                    onChangeText={(width) => {
                      booking.width = width;
                      this.setState({ booking })
                    }}
                    placeholder="00.00"
                    placeholderTextColor={'#C3C3C3'}
                    keyboardType='decimal-pad'
                    returnKeyType='done'
                  />
                  <View style={styles.UoM}>
                      <Text style={styles.UoMText}> mm </Text>
                    </View>
                </View>

                {/* length */}
                <View style={[styles.lengthHeight, styles.row]}>
                  <View style={styles.alignItemCenter}>
                    <Text style={styles.inputLabel}>Length</Text>
                  </View>
                  <TextInput
                    style={styles.widthLengthWeightInput}
                    onChangeText={(length) => {
                      booking.length = length;
                      this.setState({ booking })
                    }}
                    placeholder="00.00"
                    placeholderTextColor={'#C3C3C3'}
                    keyboardType='decimal-pad'
                    returnKeyType='done'
                  />
                  <View style={styles.UoM}>
                      <Text style={styles.UoMText}> mm </Text>
                    </View>
                </View>
              </View>

              {/* Weight and Height */}
              <View style={[styles.inputContainer, styles.row]}>
                {/* weight */}
                <View style={[styles.widthWeight, styles.row]}>
                  <View style={styles.alignItemCenter}>
                    <Text style={styles.inputLabel}>Weight</Text>
                  </View>
                    <TextInput
                      style={styles.widthLengthWeightInput}
                      onChangeText={(weight) => {
                        booking.weight = weight;
                        this.setState({ booking })
                      }}
                      placeholder="00.00"
                      placeholderTextColor={'#C3C3C3'}
                      keyboardType='decimal-pad'
                      returnKeyType='done'
                    />
                    <View style={styles.UoM}>
                      <Text style={styles.UoMText}> kg </Text>
                    </View>
                </View>
                <View style={[styles.lengthHeight, styles.row]}>
                  <View style={styles.alignItemCenter}>
                    <Text style={styles.inputLabel}>Height</Text>
                  </View>
                    <TextInput
                      style={styles.widthLengthWeightInput}
                      onChangeText={(height) => {
                        booking.height = height;
                        this.setState({ booking })
                      }}
                      placeholder="00.00"
                      placeholderTextColor={'#C3C3C3'}
                      keyboardType='decimal-pad'
                      returnKeyType='done'
                    />
                    <View style={styles.UoM}>
                      <Text style={styles.UoMText}> mm </Text>
                    </View>
                </View>
              </View>
            </View>

            {/* dropdown for packaging type */}
            <View style={[styles.dropDownContainer, styles.marginBottom]}>
                <DropDownPicker
                  placeholder="Packaging Type"
                  placeholderStyle={styles.placeholderStyle}
                  style={styles.packagingDropdownStyle}
                  containerStyle={styles.packagingDropdownContainerStyle}
                  schema={{
                    label: 'uom_name',
                    value: 'id'
                  }}    
                  open={this.state.packagingOpen} 
                  items={this.state.packagingItems}
                  value={this.state.packagingTypeValue}
                  setOpen={() => {this.setState({packagingOpen: !this.state.packagingOpen})}}
                  setValue={(callback) => {this.setState(state => ({
                    packagingTypeValue: callback(state.packagingTypeValue)}), () => {
                      booking.packagingType = this.state.packagingTypeValue;
                      this.setState({ booking })
                    })
                  }}
                  setItems={(callback) => {this.setState(state => ({
                    packagingItems: callback(state.packagingItems)}))}}
                />
              </View> 
          
          {/* Add Additional Items Button */}
          <View style={styles.alignItemCenter}>
            {/* Make button gray when not all inputs are filled out, orange when filled out */}
            { booking.typeValue == '' || booking.quantity == 0 || booking.width == '' || booking.length == '' || booking.weight == '' || booking.packagingValue == '' ?
            <TouchableOpacity style={styles.addButtonGray} disabled={true}>
              <Text style={styles.buttonText}> Add Additional Item </Text>
            </TouchableOpacity>
            :
            // Leave Disabled for Now
            // <TouchableOpacity style={styles.addButtonOrange} onPress={() => alert('Add Item')}>
            //   <Text style={styles.buttonText}> Add Additional Item </Text>
            // </TouchableOpacity>
            <TouchableOpacity style={styles.addButtonGray} disabled={true}>
              <Text style={styles.buttonText}> Add Additional Items </Text>
            </TouchableOpacity>
            }

          {/* Next Button */}
            {/* Make button gray when not all inputs are filled out, orange when filled out */}
            { booking.typeOfGood == '' || booking.quantity == 0 || booking.width == '' || booking.length == '' || booking.weight == '' || booking.packagingType == '' ?
            <TouchableOpacity style={styles.nextButtonGray} disabled={true}>
              <Text style={styles.buttonText}> NEXT </Text>
            </TouchableOpacity>
            :
            <TouchableOpacity style={styles.nextButtonOrange} onPress={() => {
              this.booking();
              this.props.navigation.navigate('CorpExclusive2')
            }}>
              <Text style={styles.buttonText}> NEXT </Text>
            </TouchableOpacity>
            }
          </View>
        </View>
      </TouchableWithoutFeedback>
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
    marginBottom: '8%'
  },
  label: {
    color: 'white',
    fontSize: 20,
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '9%',
  },
  alignItemCenter: {
    alignItems: 'center',
    zIndex: 0
  },
  row: {
    flexDirection: 'row',
  },
  dropDownContainer: {
    alignItems: 'center',
    zIndex: 1
  },
  dropDownContainer1: {
    alignItems: 'center',
    zIndex: 1,
  },
  dropDownContainer2: {
    alignItems: 'center',
    zIndex: 2,
    marginBottom: '5%'
  },
  dropDownContainer3: {
    alignItems: 'center',
    zIndex: 3,
    marginBottom: '5%'
  },
  marginBottom: {
    marginBottom: '20%',
  },
  typeDropdownStyle: {
    paddingLeft: 20,
    borderRadius: 5,
  },
  disabledTypeDropdownStyle: {
    paddingLeft: 20,
    borderRadius: 5,
    backgroundColor: 'rgb(222, 223, 228)'
  },
  typeDropdownContainerStyle: {
    width: '90%',
  },
  placeholderStyle: {
    color: '#C3C3C3'
  },
  inputContainer: {
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0
  },
  inputLabel: {
    fontSize: 15,
    color: 'black',
    paddingRight: '3%'
  },
  uomContainer: {
    borderWidth: 1,
    borderRadius: 5,
    margin: '5%',
    padding: '5%'
  },
  UoM: {
    backgroundColor: 'white',
    height: 40,
    justifyContent: 'center',
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    borderWidth: 1,
    borderColor: 'rgb(223,131,68)',
    borderLeftWidth: 0,
    padding: 2
  },
  UoMText: {
    color: '#C3C3C3'
  },
  quantityContainer: {
    zIndex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    paddingRight: 5,
    paddingLeft: 5
  },
  quantityButtonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  quantityButtonOrange: {
    backgroundColor: 'rgb(223,131,68)',
    height: 23,
    width: 23,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  quantityButtonGray: {
    backgroundColor: 'gray',
    height: 23,
    width: 23,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  widthWeight: {
    alignItems: 'center'
  },
  lengthHeight: {
    alignItems: 'center',
    marginLeft: '3%',
  },
  widthLengthWeightInput: {
    backgroundColor: 'white',
    width: 80,
    height: 40,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,    
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'rgb(223,131,68)',
    borderRightColor: '#707070'
 },
  packagingDropdownStyle: {
    borderRadius: 5,
    paddingLeft: 20,
  },
  packagingDropdownContainerStyle: {
    width: '90%',
  },
  addButtonGray: {
    marginTop: '5%',
    height: 50,
    width: '90%',
    borderRadius: 7,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 6},
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
  addButtonOrange: {
    marginTop: '5%',
    height: 50,
    width: '90%',
    borderRadius: 7,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'rgb(223,131,68)',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 6},
    shadowOpacity: 0.9,
    shadowRadius: 3,
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