import React, { Component }  from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import DropDownPicker from 'react-native-dropdown-picker';

export default class QuickQuotation1 extends Component {  
  constructor(props) {
    super(props);
    
    this.state = { 
      typeOpen: false,
      typeValue: '',
      typeItems: [
        {label: 'Perishable Goods', value: 'perishable goods'},
        {label: 'Dry Goods', value: 'dry goods'},
        {label: 'Equipments', value: 'equipments'},
        {label: 'Liquids', value: 'liquids'},
        {label: 'Livestocks', value: 'livestocks'},

      ],
      quantity: 0,
      width: '',
      length: '',
      weight: '',
      packagingOpen: false,
      packagingValue: '',
      packagingItems: [
        {label: 'Carton', value: 'carton'},
        {label: 'Drum', value: 'drum'},
        {label: 'Crates', value: 'crates'},
        {label: 'Sacks', value: 'sacks'},

      ],    };
  }

  plusQuantity = () => {
    this.setState({ quantity: (this.state.quantity + 1) });
  }

  minusQuantity = () => {
    this.setState({ quantity: (this.state.quantity - 1) });
  }

  render() {
    return(
      <View style={styles.container}>

        {/* Header for Quick Quotation */}
        <View style={styles.header}>
          <Text style={styles.label}>Quick Quotation</Text>
        </View>

        {/* Dropdown for Type of Goods */}
        <View style={styles.dropDownContainer}>
          <DropDownPicker
            placeholder="Types of Good"
            placeholderStyle={styles.typeDropdownPlaceholder}
            style={styles.typeDropdownStyle}
            containerStyle={styles.typeDropdownContainerStyle}
            open={this.state.typeOpen} 
            items={this.state.typeItems}
            value={this.state.typeValue}
            setOpen={() => {this.setState({typeOpen: !this.state.typeOpen})}}
            setValue={(callback) => {this.setState(state => ({
              typeValue: callback(state.typeValue)}))}}
            setItems={(callback) => {this.setState(state => ({
              typeItems: callback(state.typeItems)}))}}
          />
        </View> 

        {/* Quantity */}
        <View style={styles.inputContainer}>
          <View style={styles.row}>
            <Text style={styles.inputLabel}> Quantity </Text>
            {/* Make minus sign gray when quantity is 0, orange when 1 or more*/}
            { this.state.quantity == 0 ?
              <TouchableOpacity style={styles.quantityButtonGray} disabled={true}>
                <Text style={styles.quantityButtonText}> - </Text>
              </TouchableOpacity>
              :
              <TouchableOpacity style={styles.quantityButtonOrange} onPress={this.minusQuantity}>
                <Text style={styles.quantityButtonText}> - </Text>
              </TouchableOpacity>
            }
            {/* Display quantity */}
            <Text style={styles.quantityText}> {this.state.quantity} </Text>
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
            <Text style={styles.widthLabel}> Width </Text>
              <TextInput
                style={styles.widthLengthWeightInput}
                onChangeText={(width) => {this.setState({width})}}
                keyboardType='number-pad'
                returnKeyType='done'
              />
          </View>
          {/* length */}
          <View style={[styles.length, styles.row]}>
            <Text style={styles.inputLabel}> Length </Text>
            <TextInput
                style={styles.widthLengthWeightInput}
                onChangeText={(length) => {this.setState({length})}}
                keyboardType='number-pad'
                returnKeyType='done'
              />
          </View>
        </View>

        {/* Weight and Packaging Type */}
        <View style={[styles.inputContainer, styles.row, styles.marginBottom]}>
          {/* weight */}
          <View style={[styles.widthWeight, styles.row]}>
            <Text style={styles.inputLabel}> Weight </Text>
              <TextInput
                style={styles.widthLengthWeightInput}
                onChangeText={(weight) => {this.setState({weight})}}
                keyboardType='number-pad'
                returnKeyType='done'
              />
          </View>
          {/* dropdown for packaging type */}
          <View style={styles.dropDownContainer}>
            <DropDownPicker
              placeholder="Packaging Type"
              placeholderStyle={styles.typeDropdownPlaceholder}
              style={styles.packagingDropdownStyle}
              containerStyle={styles.packagingDropdownContainerStyle}
              open={this.state.packagingOpen} 
              items={this.state.packagingItems}
              value={this.state.packagingValue}
              setOpen={() => {this.setState({packagingOpen: !this.state.packagingOpen})}}
              setValue={(callback) => {this.setState(state => ({
                packagingValue: callback(state.packagingValue)}))}}
              setItems={(callback) => {this.setState(state => ({
                packagingItems: callback(state.packagingItems)}))}}
            />
          </View> 
        </View>
        
        <View style={styles.alignItemCenter}>
        {/* Add Additional Items Button */}
          {/* Make button gray when not all inputs are filled out, orange when filled out */}
          { this.state.typeValue == '' || this.state.quantity == 0 || this.state.width == '' || this.state.length == '' || this.state.weight == '' || this.state.packagingValue == '' ?
          <TouchableOpacity style={styles.addButtonGray} disabled={true}>
            <Text style={styles.buttonText}> Add Additional Item </Text>
          </TouchableOpacity>
          :
          <TouchableOpacity style={styles.addButtonOrange} onPress={() => alert('Add Item')}>
            <Text style={styles.buttonText}> Add Additional Item </Text>
          </TouchableOpacity>
          }

        {/* Next Button */}
          {/* Make button gray when not all inputs are filled out, orange when filled out */}
          { this.state.typeValue == '' || this.state.quantity == 0 || this.state.width == '' || this.state.length == '' || this.state.weight == '' || this.state.packagingValue == '' ?
          <TouchableOpacity style={styles.nextButtonGray} disabled={true}>
            <Text style={styles.buttonText}> NEXT </Text>
          </TouchableOpacity>
          :
          <TouchableOpacity style={styles.nextButtonOrange} onPress={() => alert('Next')}>
            <Text style={styles.buttonText}> NEXT </Text>
          </TouchableOpacity>
          }
        </View>
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
    zIndex: 1000,
  },
  marginBottom: {
    marginBottom: '65%'
  },
  typeDropdownPlaceholder: {
    color: "grey"
  },
  typeDropdownStyle: {
    paddingLeft: 20,
    borderRadius: 25,
  },
  typeDropdownContainerStyle: {
    width: '90%',
    marginTop: '5%',
  },
  inputContainer: {
    marginTop: '5%',
    marginLeft: '8%',
    zIndex: 0
  },
  inputLabel: {
    fontSize: 13,
    color: 'white',
    paddingRight: 5
  },
  quantityText: {
    fontSize: 15,
    color: 'white',
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
  widthLabel: {
    fontSize: 13,
    color: 'white',
    paddingRight: '3%'
  },
  length: {
    alignItems: 'center',
    marginLeft: '3%',
  },
  widthLengthWeightInput: {
    backgroundColor: 'white',
    width: 110,
    height: 50,
    borderRadius: 25,
    textAlign: 'center'
  },
  packagingDropdownStyle: {
    borderRadius: 25,
  },
  packagingDropdownContainerStyle: {
    marginLeft: 20,
    width: 155,
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
    borderRadius: 25,
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