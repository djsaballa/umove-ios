import { Request } from "./helper/http"

var request = new Request;

export default class RegistrationApi {
  static async individual() {
    
    return request.post('customers/register', {  });
  }

  static async corporate() {
    
    return request.post('customers/register', {  });
  }
}