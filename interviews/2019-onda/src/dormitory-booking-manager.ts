import { DormitoryBed, DormitoryBooking, Dormitory } from "./dormitory.interface";

export class DormitoryBookingManager {
  private bookings: DormitoryBooking[] = [];
  private beds: DormitoryBed[] = [];
  
  constructor(private readonly dormitory: Dormitory) {
    // 예약 최적화 위해 date 순서로 예약 정렬
    this.bookings = dormitory.bookings.sort((a, b) => a.date - b.date);
    this.beds = Array.from({ length: dormitory.bedCount }, (v, i) => ({
      id: i + 1,
      inventories: [
        { date: 1, available: true },
        { date: 2, available: true },
        { date: 3, available: true },
        { date: 4, available: true },
      ],
    }));
  }
  
  // 예약 침대 배정 함수
  public setBedsForBookings(): this {
    for (const booking of this.bookings) {
      const startDate = booking.date;
      const endDate = booking.date + booking.nights - 1;

      const availableBed = this.beds.find(bed => bed.inventories.every(iv =>
        (iv.date < startDate || iv.date > endDate) || (iv.available && !iv.bookingId)
      ));
      if (!availableBed) {
        throw Error(`Unavailbale to book for booking ${booking.id}.`);
      }

      booking.bedId = availableBed.id;
      for (const iv of availableBed.inventories) {
        if (iv.date >= startDate && iv.date <= endDate) {
          iv.available = false;
          iv.bookingId = booking.id;
        }
      }
    }
    
    return this;
  }
  
  public getBookings(): DormitoryBooking[] {
    // id 순서로 재정렬
    this.bookings.sort((a, b) => a.id - b.id);
    console.log(this.bookings);
    return this.bookings;
  }
}