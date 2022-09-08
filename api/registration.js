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
    // formdata.append('user[user_profile][profile_image]', {uri: img.uri, name: img.name, type: img.type);
    
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
    formdata.append('corporate[company_name]', register.companyName)
    formdata.append('corporate[company_address]', register.companyAddress)
    formdata.append('corporate[company_mobile_number]', register.companyMobileNumber)
    formdata.append('corporate[company_email]', register.companyEmail)
    formdata.append('corporate[office_address]', register.officeAddress)
    formdata.append('corporate[office_region]', register.officeRegion)
    formdata.append('corporate[office_province]', register.officeProvince)
    formdata.append('corporate[office_city]', register.officeCity)
    formdata.append('corporate[office_barangay]', register.officeBarangay)
    formdata.append('corporate[office_zip_code]', register.officeZipcode)
    formdata.append('corporate[company_logo]', '')
    formdata.append('corporate[company_requirement][bir]', {uri: register.bir.uri, name: register.bir.name, type: register.bir.mimeType })
    formdata.append('corporate[company_requirement][dti]', {uri: register.dti.uri, name: register.dti.name, type: register.dti.mimeType })
    formdata.append('valid_id', {uri: register.validId.uri, name: register.validId.name, type: register.validId.mimeType })
    
    console.log('Request: ' + API_URL)
    console.log(formdata)
    
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
}