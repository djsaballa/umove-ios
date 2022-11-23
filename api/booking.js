import { Request } from './helper/http'
import { getStorage, setStorage } from './helper/storage';

var request = new Request;

export class BookingApi {
  static async corporateExclusive() {
    let booking = await getStorage('booking')
    const user = await getStorage('user');
    request = new Request(null, user.access);

    let bookingDetails = 
    {
      "booking_type": booking.bookingType,
      "vehicle_type": booking.vehicleType,
      "pickup_time": booking.pickupDate.replaceAll('/', '-') + ' ' + booking.pickupTime,
      "booking_routes": [
        {
          "shipper": booking.pickupName,
          "origin_address": booking.pickupStreetAddress,
          "origin_region": booking.pickupRegion,
          "origin_province": booking.pickupProvince,
          "origin_city": booking.pickupCity,
          "origin_barangay": booking.pickupBarangay,
          "origin_zip_code": booking.pickupZipcode,
          "receiver": booking.dropoffName,
          "destination_address": booking.dropoffStreetAddress,
          "destination_region": booking.dropoffRegion,
          "destination_province": booking.dropoffProvince,
          "destination_city": booking.dropoffCity,
          "destination_barangay": booking.dropoffBarangay,
          "destination_zip_code": booking.dropoffZipcode,
          "distance": '100'
        }
      ],
      "booking_items": [
        {
          "subcategory": booking.productSubcategory,
          "uom": booking.packagingType,
          "length": booking.length,
          "width": booking.width,
          "height": booking.height,
          "weight": booking.weight,
          "quantity": booking.quantity
        }
      ]
    }

    let booking_type = bookingDetails.booking_type;
    let vehicle_type = bookingDetails.vehicle_type;
    let pickup_time = bookingDetails.pickup_time;
    let booking_routes = bookingDetails.booking_routes;
    let booking_items = bookingDetails.booking_items;
    
    return request.post('bookings/book_delivery', {request, booking_type, vehicle_type, pickup_time, booking_routes, booking_items});
  }

  static async computeRates() {
    let bookingConfirmation = await getStorage('bookingConfirmation', bookingConfirmation)

    const user = await getStorage('user');
    request = new Request(null, user.access);
    let booking_number = bookingConfirmation.booking_number

    return request.post('bookings/compute_rates', {request, booking_number});
  }
}