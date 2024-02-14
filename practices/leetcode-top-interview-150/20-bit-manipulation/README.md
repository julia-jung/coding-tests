## Signed & Unsigned Integer

### Signed Int(정수)

: 양수, 음수, 0을 모두 표현할 수 있다.

- 첫 번째 비트는 부호 비트(0: 양수, 1: 음수)로 사용된다. 따라서 첫번째 비트를 제외한 나머지 7자리가 값을 결정한다.
- 1 byte(=8 bit)는 -128(`10000000`)부터 +127(`01111111`)까지의 숫자를 표현할 수 있다.

#### 음수 표현법

- 컴퓨터에서는 음수를 2의 보수의 형태로 나타내는데 어떤 수의 보수(complement)를 취한 후 1을 더해서 표현한다.
- 예를들어 -3을 singed integer로 표현하면 `11111101`이 되는데
  1. 먼저 3을 2진수로 나타내고 (`00000011`)
  2. 비트반전을 해서 1의 보수를 구한다 (`11111100`)
  3. 여기에 1을 더해서 2의 보수를 구할 수 있다 (`11111101`)

### Unsigned Int(자연수, 0)

: 양수와 0만 표현할 수 있다.

- 부호 비트가 없기 때문에 모든 비트를 숫자의 표현에 사용한다.
- 1 byte(=8 bit)는 0(`00000000`)에서 +255(`11111111`)까지의 숫자를 표현할 수 있다.

### [Hamming weight](https://en.wikipedia.org/wiki/Hamming_weight)

: The Hamming weight of a string is the number of symbols that are different from the zero-symbol of the alphabet used. It is thus equivalent to the Hamming distance from the all-zero string of the same length.

## Bit Operators

### Bit Logical Operators

- AND (`a & b`) : return 1 when both of them are 1
- OR (`a | b`) : return 1 when either of them is 1
- XOR (`a ^ b`) : return 1 when only one of them are 1
- NOT (`~ a`) : invert all the bits

### Bit Shift Operators

- Left Shift (`a << b`) : shift `a` to the left with amount of `b` and fill in the empty bits on the right with `0`
  - result = a \* 2^(b)
- Arithmetic Right Shift (`a >> b`) : shift `a` to the right with amount of `b` and fill in the empty bits on the left with maximum bit value
  - result = a / 2^(b)
- Logical Right Shift (`a >>> b`) : shift `a` to the right with amount of `b` and fill in the empty bits on the left with `0`
  - if `a` is positive, result = a / 2^(b)
  - if `a` is negative, result is not a / 2^(b)

## Bit Manipulation

- get `i`th bit -> `x & (1 << i)`
- set `i`th bit -> `x | (1 << i)`
- clear `i`th bit -> `x & (~(1 << i))`

```
// given the number 44(00101100)
// get 6th bit
x & (1 << 6); // 00101100 & 00100000 = 00100000
// set 6th bit
x | (1 << 6); // 00101100 | 00100000 = 00101100
// clear 6th bit
x & (~(1 << 6)) // 00101100 & 11011111 = 00001100
```

### XOR example

```
// Given numbers of array, find the lonely element which appears only once in the array unlike others which appear twice.
function findLonely(arr: number[]) {
  let result = 0;
  for (const item of arr) {
    result ^= item;
  }
  return result;
}

```
