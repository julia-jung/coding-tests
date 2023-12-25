import { fourBedDormitory, threeBedDormitory } from "./dormitory";
import { DormitoryBookingManager } from "./dormitory-booking-manager";

// Test 1
new DormitoryBookingManager(threeBedDormitory).setBedsForBookings().getBookings();

// Test 2
new DormitoryBookingManager(fourBedDormitory).setBedsForBookings().getBookings();