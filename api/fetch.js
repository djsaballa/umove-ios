import { Request } from './helper/http'

var request = new Request;

export class FetchApi {
  static async companyTypes() {
    return request.get('companies/types');
  }

  static async regions() {
    return request.get('regions');
  }

  static async provinces(regionCode) {
    return request.get('provinces/' + regionCode);
  }

  static async cities(provinceCode) {
    return request.get('cities/' + provinceCode);
  }

  static async barangays(cityCode) {
    return request.get('barangays/' + cityCode);
  }
}