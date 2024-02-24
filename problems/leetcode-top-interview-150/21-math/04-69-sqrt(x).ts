/** ⭐
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
 * You must not use any built-in exponent function or operator.
 * For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 */

// Solution 1: iterate from 1 until find the root or first root having larger than x
function mySqrt(x: number): number {
  if (x <= 1) return x;

  let r = 1;
  while (r <= x) {
    if (r ** 2 === x) return r;
    if (r ** 2 > x) return r - 1;
    r++;
  }
};

// Solution 2: binary search
function mySqrt2(x: number): number {
  if (x === 0 || x === 1 ) return x; 

  let left = 1;
  let right = x;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    
    if (mid ** 2 === x) {
      return mid;
    } else if ((mid ** 2) < x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left - 1;
};

// Solution 3: using Math.sqrt
function mySqrt3(x: number): number {
  return Math.floor(Math.sqrt(x));
}

