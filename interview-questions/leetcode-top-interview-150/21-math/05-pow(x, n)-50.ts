/** ⭐⭐
 * Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
 */

myPow(2.0, 10); // Output: 1024.00000
myPow(2.1, 3); // Output: 9.26100
myPow(2.0, -2); // Output: 0.25000 (Explanation: 2-2 = 1/22 = 1/4 = 0.25)

function myPow(x: number, n: number): number {
  const isNegativePower = n < 0;
  n = Math.abs(n);

  let result = 1;
  while (n > 0) {
    if (n % 2 === 1) result *= x;

    // x^8 = (x^2)^3 = (x * x) * (x * x) * (x * x)
    x *= x;
    n = Math.floor(n / 2);
  }

  return isNegativePower ? 1 / result : result;
}

function myPow2(x: number, n: number): number {
  // return x ** n;
  if (n === 0) return 1;

  if (n < 0) {
    // to handle Number.MIN_VALUE
    return (1 / x) * myPow(1 / x, -(n + 1));
  }

  return n % 2 === 0
    ? myPow(x * x, Math.trunc(n / 2))
    : x * myPow(x * x, Math.trunc(n / 2));
}
