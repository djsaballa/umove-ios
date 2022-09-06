import { getStorage, setStorage } from '../api/helper/storage';

const API_URL = 'http://18.140.182.54/api/customers/register';

export class RegistrationApi {
  static async individual() {
    let register = await getStorage('register');
    let formdata = new FormData();

    formdata.append('customer_type', register.customerType);
    formdata.append('user[username]', register.username);
    formdata.append('user[password]', register.password);
    formdata.append('user[password2]', register.confirmPassword);
    formdata.append('user[user_profile][first_name]', register.firstName);
    formdata.append('user[user_profile][middle_name]', register.middleName);
    formdata.append('user[user_profile][last_name]', register.lastName);
    formdata.append('user[user_profile][mobile_number]', register.mobileNumber);
    formdata.append('user[user_profile][email]', register.email);
    formdata.append('user[user_profile][address]', register.streetAddress);
    formdata.append('user[user_profile][region]', register.region);
    formdata.append('user[user_profile][province]', register.province);
    formdata.append('user[user_profile][city]', register.city);
    formdata.append('user[user_profile][barangay]', register.barangay);
    formdata.append('user[user_profile][zip_code]', register.zipcode);
    // formdata.append('user[user_profile][profile_image]', {uri: img.uri, name: img.name, type: register.);
    
    console.log('Request: ' + API_URL)
    
    let res = await fetch(API_URL ,{
      method: 'POST',
      headers: {
              Accept: 'application/json',
              "Content-Type": "multipart/form-data",
          },
      body: formdata
    });
    return res.json()
  }

  static async corporate() {
    
    return request.post('customers/register');
  }
}