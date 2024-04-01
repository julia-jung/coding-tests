/** ⭐
 * Write a function that takes the binary representation of an unsigned integer and returns the number of '1' bits it has
 * (also known as the Hamming weight).
 * Note:
 *  Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type.
 *  It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
 *  In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.
 */

hammingWeight(11); // (1011) -> Output: 3
hammingWeight(128); // (10000000) -> Output: 1
hammingWeight(2147483645); // (1111111111111111111111111111101) -> Output: 30

// Solution 1: compare with 1 shifting to the right side
function hammingWeight(n: number): number {
  let total = 0;
  while (n > 0) {
    total += n & 1;
    n >>>= 1;
  }
  return total;
}

// Solution 2: transform number into string
function hammingWeight2(n: number): number {
  let count = 0;
  const s = n.toString(2);
  for (const c of s) {
    if (c === '1') count++;
  }
  return count;
}
