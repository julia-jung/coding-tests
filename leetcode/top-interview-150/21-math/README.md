### BigInt

: `Number` primitive type이 가질 수 있는 최대값인 **2^53 -1** 보다 큰 정수를 표현할 수 있는 JS 내장객체

- 정수 리터럴 뒤에 `n`을 붙이거나 함수 `BigInt()` 를 호출해서 생성

```js
typeof 1n === 'bigint'; // true
typeof BigInt('1') === 'bigint'; // true
```

- `BigInt`는 연산에서 `Number`와 혼합해서 사용할수 없으므로 먼저 같은 자료형으로 변환해야 한다.
- `BigInt`가 `Number`로 바뀌면 정확한 값을 잃을 수 있다.
