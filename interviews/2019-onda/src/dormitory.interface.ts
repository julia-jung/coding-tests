
export interface Dormitory {
  id: number;
  bedCount: number;
  bookings: DormitoryBooking[];
}

export interface DormitoryBooking {
  id: number;
  date: number; // 숙박일
  nights: number; // 숙박 기간
  bedId?: number; // 배정받은 침대 번호
}

export interface DormitoryBed {
  id: number;
  inventories: Inventory[];
}

export interface Inventory {
  date: number;
  available: boolean; // 예약가능여부
  bookingId?: number; // 배정된 예약 아이디
}