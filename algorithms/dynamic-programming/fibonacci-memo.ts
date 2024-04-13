const num = 35;
console.log('For index ', num, ', Fibonacci number is: ');
let calculation = 0;
// Time complexity: O(2^n)
// Space complexity: O(1)
function fibonacci(n: number): number {
  if (n < 2) return n;
  calculation++;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(num));
console.log('Without cache: ', calculation, ' calculations');

/** Memoization */
let calculationWithMemo = 0;
// Time complexity: O(n)
// Space complexity: O(n)
function fibonacciMemo() {
  let cache = {};
  return function fib(n: number) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) return n;
      calculationWithMemo++;
      cache[n] = fib(n - 1) + fib(n - 2);
      return cache[n];
    }
  };
}

const fibMemo = fibonacciMemo();
console.log(fibMemo(num));
console.log('Without cache: ', calculationWithMemo, ' calculations');

/** Bottom Up */
let calculationBottomUp = 0;
// Time complexity: O(n)
// Space complexity: O(n)
function fibonacciBottomUp(n: number) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    calculationBottomUp++;
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
}

console.log(fibonacciBottomUp(num));
console.log('Bottom Up: ', calculationBottomUp, ' calculations');
