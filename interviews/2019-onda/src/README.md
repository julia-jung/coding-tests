### 코드설명

DormitoryBookingManager 클래스: 도미토리 예약 관리자 객체를 생성하기 위한 클래스

1. 침대개수와 예약 배열 정보를 담고있는 Dormitory 타입의 객체를 이용해 new DormitoryBookingManager 객체 생성

2. DormitoryBookingManager constructor 안에서 private member인 bookings(예약 배열)와 beds(도미토리 침대 배열)를 초기화

- bookings 배열은 최적화를 위해 날짜순으로 정렬을 바꾸고
- Dormitory 객체가 가지고있는 bedCount만큼 beds 배열에 아이템을 생성하고 각 날짜별 inventory를 모두 available=true로 셋팅

3. 객체가 생성되면 setBedsForBooking() 예약최적화 함수를 호출하여 각 예약에 가능한 침대를 배치

- bookings 배열에서 하나씩 꺼내어 투숙기간동안 inventories배열의 available이 모두 true인 bed를 찾는다.
- 예약 가능한 bed가 존재하면 booking.bedId에 찾은 침대번호를 저장하고 해당하는 날짜의 모든 inventory.available를 false로 업데이트 한다.
- 만약 가능한 bed를 찾지못하면 예약최적화를 종료하고 error를 throw한다

4. getBookings() 메소드로 최적화된 bookings를 확인
