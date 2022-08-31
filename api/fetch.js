import { Request } from './helper/http'
import { getStorage } from './helper/storage';

var request = new Request;

export default class FetchApi {
  static async login(username, password) {
    return request.get(`login`, { username, password });
  }

  static async logout() {
    const user = await getStorage('user');
    request = new Request(null, user.token);

    return request.post('logout');
  }

  static verifyOTP(username, otp) {
    
    return request.post('verify', { username, otp });
  }
}