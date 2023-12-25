### 코드설명

예약 배치 최적화 함수 : src 폴더/booking.js의 bookingOptimizer함수
(index.js파일은 db연결과 test를 위한 router 연결 소스입니다.)

bookingOptimizer함수는 침대 갯수, 새로들어온 예약을 포함한 총 예약 배열을 parameter로 전달받아,

1. 먼저, 예약 배열의 각 예약 객체를 확인하여, minDate, maxDate를 찾는다.
   -> case1의 경우 minDate: 1, maxDate: 3
   -> case2의 경우 minDate: 1, maxDate: 4

2. 침대별로 배열을 생성하여, maxDate까지 각 인덱스의 값을 0으로 초기화.
   -> case1의 경우 beds = [[0,0,0], [0,0,0], [0,0,0]]
   -> case2의 경우 beds = [[0,0,0,0], [0,0,0,0], [0,0,0,0]]

3. minDate부터 maxDate까지 순서대로 for문을 돌려서 예약배열에서 date가 동일한 예약객체들을 filter로 추출하여
   각 예약객체를 bed에 배치 -> 예약 순서대로 배치하는 것이 아닌, date 1부터 date순으로 배치하여 최적화

4. bed 배열을 하나씩 검사하여 예약 시작일부터 종료일까지의 index에 0이 아닌 예약 번호가 저장되어 있는지를 확인,
   -> 값이 모두 0이면 예약 가능하므로 해당 bed 배열에 예약 시작일 ~ 종료일까지의 index의 값으로 예약 id 값을 저장하고,
   예약객체에 bed field를 추가하여 bed 번호를 저장.

5. 최적화된 예약배열 return

- test시 return받은 예약객체에 bed 값이 0인 예약 객체가 존재한다면, 최적화가 불가능하다는 뜻이므로 새로운 예약을 db에 저장하지 않고
  에러메시지를 전송한다.
