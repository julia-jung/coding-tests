/**
 * Write two function returning factorial for given number input
 * Implement one using recursion and other with iteration
 */

// O(n)
function Recursivefactorial(num: number) {
  // base case
  if (num <= 1) return num;

  return num * Recursivefactorial(num - 1);
}

// O(n)
function IterativeFactorial(num: number) {
  let result = num;

  while (num > 1) {
    result *= --num;
  }

  return result;
}

// 5! = 5 * 4! = 5 * (4 * 3!)
console.log(Recursivefactorial(5));
console.log(IterativeFactorial(5));
