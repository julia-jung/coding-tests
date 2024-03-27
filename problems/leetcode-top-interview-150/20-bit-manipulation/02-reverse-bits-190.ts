/** ⭐
 * Reverse bits of a given 32 bits unsigned integer.
 * Note:
 * Note that in some languages, such as Java, there is no unsigned integer type.
 * In this case, both input and output will be given as a signed integer type.
 * They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
 * In Java, the compiler represents the signed integers using 2's complement notation.
 * Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.
 */

reverseBits(43261596); // 43261596(00000010100101000001111010011100) -> 964176192 (00111001011110000010100101000000)
reverseBits(4294967293); // 4294967293(11111111111111111111111111111101) -> 3221225471 (10111111111111111111111111111111)

// Solution 1: 2진수로 변환하여 뒤집고 다시 10진수로 변환
function reverseBits(n: number): number {
  let reversed = '';

  while (reversed.length < 32) {
    reversed += (n % 2).toString();
    n = Math.trunc(n / 2);
  }
  console.log(reversed);

  let result = 0;
  for (let i = reversed.length - 1; i >= 0; i--) {
    result += Number(reversed[i]) * 2 ** (reversed.length - 1 - i);
  }
  return result;
}

// Solution 2: shifting operator 이용
function reverseBits2(n: number): number {
  let result = 0;

  for (let i = 0; i < 32; i++) {
    result <<= 1; // result = result << 1; 왼쪽으로 한자리씩 시프트하여 포인터를 마지막 자리로 고정해둔다
    result |= n & 1; // result = result | (n & 1); n의 마지막 자리가 1이면 result에 1을 더한다
    n >>>= 1; // n = n >> 1; n의 마지막 자리는 이미 계산했기 때문에 버린다
  }

  return result >>> 0;
}
