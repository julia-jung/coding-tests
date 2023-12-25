## 온다(ONDA) 코딩 과제 (2019)

온다 도미토리 시스템에서는 침대별로 예약을 받을 수 있게 되어 있다.
그런데 시스템에선 예약이 들어온 순서대로 첫번째 침대부터 배정하다보니 입실일과 숙박일에 따라 실제로는 예약이 가능하지만 시스템 상으로는 예약이 불가능하게 보이는 경우가 있다.

예 : 3개의 침대가 아래처럼 예약이 있는 경우 2번째 날에 2박을 예약할 수가 없지만, ㉡과 ㉢ 예약의 침대를 바꿔주면 2번째 날부터 Bed3는 2박의 예약을 받을 수가 있게 된다.
(㉠㉠은 2박을 의미하며, ㉠㉡㉢㉣㉤ 순으로 예약이 들어왔다고 가정한다)
1일 2일 3일
Bed1 ㉠ ㉠ ㉣
Bed2 ㉡ ㉤
Bed3 ㉢ ㉢

아래 주어진 배열의 순서대로 예약이 들어온다고 했을 경우 배치를 최적화하라.
입력 parameter는 순서대로 "총 침대 수", "예약 배열"이다.
예약배열의 date 는 입실일을 의미한다. 예) date 3은 3일
예약배열의 nights 는 박수를 의미한다. 예) nights 2는 2박을 의미

```
1. test case1

- input : 3, [
  { id: 1, date: 1, nights: 2 },
  { id: 2, date: 1, nights: 1 },
  { id: 3, date: 1, nights: 2 },
  { id: 4, date: 3, nights: 1 },
  { id: 5, date: 3, nights: 1 },
  { id: 6, date: 2, nights: 2 }
  ]

2. test case2

- input : 4, [
  { id: 1, date: 1, nights: 2 },
  { id: 2, date: 1, nights: 1 },
  { id: 3, date: 3, nights: 2 },
  { id: 4, date: 1, nights: 2 },
  { id: 5, date: 4, nights: 1 },
  { id: 6, date: 3, nights: 1 },
  { id: 7, date: 2, nights: 3 },
  { id: 8, date: 1, nights: 2 },
  { id: 9, date: 4, nights: 1 }
  ]
```
