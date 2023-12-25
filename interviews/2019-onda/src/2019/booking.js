const bookingOptimizer = (maxBed, bookings) => {
  //들어온 예약배열의 최소date, 최대date 구하기
  var minDate = 31;
  var maxDate = 0;
  bookings.forEach((booking) => {
    const endDate = booking.date + booking.nights - 1;
    if (booking.date < minDate) {
      minDate = booking.date;
    }
    if (endDate > maxDate) {
      maxDate = booking.date;
    }
  });

  //침대별로 배열생성, 초기값 0으로 세팅
  var beds = [];
  for (var i = 0; i < maxBed; i++) {
    beds[i] = [];
    for (var j = 0; j < maxDate; j++) {
      beds[i][j] = 0;
    }
  }

  //date 순서대로 bookings배열에서 꺼내어 예약
  const optimized = [];
  for (var i = minDate; i <= maxDate; i++) {
    const dateBookings = bookings.filter((booking) => booking.date === i);

    for (var b = 0; b < dateBookings.length; b++) {
      optimized.push(dateBookings[b]);
      const st = dateBookings[b].date - 1;
      const end = st + dateBookings[b].nights - 1;

      for (var j = 0; j < beds.length; j++) {
        var available = true;
        for (var d = st; d <= end; d++) {
          if (beds[j][d]) {
            //이미 예약번호가 들어있으면
            available = false; //예약불가로 세팅
            dateBookings[b].bed = 0;
            break;
          }
        }

        //예약 가능한 경우
        if (available) {
          dateBookings[b].bed = j + 1; //예약 객체에 bed 값 저장

          for (var d = st; d <= end; d++) {
            beds[j][d] = dateBookings[b].id; //침대 배열에 예약번호 저장
          }
          break;
        }
      }
    }
  }
  console.log(beds);
  return optimized;
};

module.exports = bookingOptimizer;
