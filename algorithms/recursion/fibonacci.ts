/**
 * Fibonacchi Sequence: 0,1,1,2,3,5,8,13,21,34,55, 89, 144, ...
 *  -> previous 2 numbers always equals the next number
 *
 * Q: Given a number N return the index value of the Fibonacci sequence
 */

// Exponential O(2^n) -> It's might be more readable but not ideal in Time complexity
function fibonacciRecursive(index: number): number {
  if (index < 2) return index;

  return fibonacciRecursive(index - 1) + fibonacciRecursive(index - 2);
}

// Linear O(n)
function fibonacciIterative(index: number): number {
  if (index < 2) return index;

  let first = 0;
  let second = 1;
  for (let i = 2; i < index; i++) {
    const cur = first + second;
    first = second;
    second = cur;
  }
  return first + second;
}

console.log(fibonacciRecursive(12)); // 8
console.log(fibonacciIterative(12)); // 8
