import { Request } from './helper/http'
import { getStorage, setStorage } from './helper/storage';

var request = new Request;

export class AuthenticationApi {
  static login(username, password) {
    return request.post('customers/login', { username, password });
  }

  static async logout(refresh) {
    await setStorage('user', null);
    await setStorage('remember', null)
    await setStorage('loginInfo', null);
    return request.post('logout', {refresh});
  }

  // NOT USED
  static verifyOTP(username, otp) {
    return request.post('verify', { username, otp });
  }
}