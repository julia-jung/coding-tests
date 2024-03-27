function rangeBitwiseAnd(left: number, right: number): number {
  // Bitwise-AND of any two numbers will always produce a number less than or equal to the smaller number.
  while (left < right) {
    right = right & (right - 1);
  }

  return left & right;
}

function rangeBitwiseAnd2(left: number, right: number): number {
  // last bit of (odd number & even number) is 0.
  // when m != n, There is at least an odd number and an even number, so the last bit position result is 0.

  let count = 0;
  while (left < right) {
    left >>= 1;
    right >>= 1;
    count++;
  }

  return left << count;
}

function rangeBitwiseAnd3(left: number, right: number): number {
  if (left === right) return left;
  //5 & 6 & 7
  //101 & 110 & 111
  //= 100 = 4

  // 9 - 2 = 7
  // 1001, 1000, 0111, 0110, 0101, 0100, 0011, 0010
  // const diff = right - left; // 2
  // const d = Math.trunc(diff / 2);
  // return 2 ** (d + 1);

  let result = left;
  while (left <= right) {
    result &= left & right;
    if (result === 0) return result;
    left++;
    right--;
  }
  return result;
}
