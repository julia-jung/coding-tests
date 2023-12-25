import { Dormitory } from "./dormitory.interface";

export const threeBedDormitory: Dormitory = {
  id: 1,
  bedCount: 3,
  bookings: [
    { id: 1, date: 1, nights: 2 },
    { id: 2, date: 1, nights: 1 },
    { id: 3, date: 1, nights: 2 },
    { id: 4, date: 3, nights: 1 },
    { id: 5, date: 3, nights: 1 },
    { id: 6, date: 2, nights: 2 }
  ],
}

export const fourBedDormitory: Dormitory = {
  id: 2,
  bedCount: 4,
  bookings: [
    { id: 1, date: 1, nights: 2 },
    { id: 2, date: 1, nights: 1 },
    { id: 3, date: 3, nights: 2 },
    { id: 4, date: 1, nights: 2 },
    { id: 5, date: 4, nights: 1 },
    { id: 6, date: 3, nights: 1 },
    { id: 7, date: 2, nights: 3 },
    { id: 8, date: 1, nights: 2 },
    { id: 9, date: 4, nights: 1 }
  ],
}