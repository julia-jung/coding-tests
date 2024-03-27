/** ⭐⭐
 * Given an integer n, return the number of trailing zeroes in n!.
 * Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.
 */

trailingZeroes(3); // -> Output: 0
trailingZeroes(5); // -> Output: 1
trailingZeroes(0); // -> Output: 0
trailingZeroes(30); // -> Output: 7

function trailingZeroes(n: number): number {
  // all trailing zero is from (factor 5) * 2
  // but some numbers have serveral 5 factos (25 => two 5 factors, 125 => three 5 factors)
  return n < 5 ? 0 : Math.floor(n / 5) + trailingZeroes(Math.floor(n / 5));
}

// 10 -> 2 + f(2) = 2 + 0 = 2 (2*5, 10)
// 30 -> 6 + f(6) = 6 + 1 + f(1) = 6 + 1 + 0 = 7 (2*5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60)
// 60 -> 12 + f(12) = 12 + 2 + f(2) = 12 + 2 + 0 = 14
// 150 -> 30 + f(30) = 30 + 6 + f(6) = 30 + 6 + 1 + f(1) = 37
