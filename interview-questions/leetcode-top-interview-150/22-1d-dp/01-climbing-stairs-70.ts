/** ⭐
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */

climbStairs(3); // 3
climbStairs(4); // 5
climbStairs(5); // 8

// Solution 1: using array of fibonnaci numbers
// Time complexity: O(n) / Space complexity: O(n)
function climbStairs(n: number): number {
  // each item represents the distinct way to get to the each steps (first, second, ..., nth)
  const steps: number[] = [1, 2]; // only one way to get the first step, two ways to get to the second step

  for (let i = 2; i < n; i++) {
    steps[i] = steps[i - 1] + steps[i - 2];
    // [1, 2, 3, 5, 8, 13, ...] -> fibonacci numbers
  }

  return steps[n - 1];
}

// Solution 2: space optimized only using two variables instead using the whole array
// Time complexity: O(n) / Space complexity: O(1)
function climbStairs2(n: number): number {
  if (n <= 2) return n;
  let prev = 1;
  let curr = 2;

  for (let i = 2; i < n; i++) {
    const temp = curr;
    curr = prev + curr;
    prev = temp;
  }

  return curr;
}

// Solution 3: avoid redundant calculation memoizing(using Map)
function climbStairs3(n: number): number {
  const memo: Map<number, number> = new Map();
  return climb(n);

  function climb(n: number): number {
    if (n < 2) return 1;
    if (!memo.has(n)) {
      memo.set(n, climb(n - 1) + climb(n - 2));
    }

    return memo.get(n);
  }
}

// Failed: Time limit exceeded
// this solution has exponential time complexity (O(2^n)) due to redundant calculations.
function climbStairsFailed(n: number): number {
  let result = 0;
  takeSteps(n);

  function takeSteps(n: number) {
    if (n < 2) {
      result++;
    } else {
      takeSteps(n - 1);
      takeSteps(n - 2);
    }
  }
  return result;
}

// Failed: Time limit exceeded
// this solution has exponential time complexity (O(2^n)) due to redundant calculations.
function climbStairsFailed2(n: number): number {
  if (n < 2) return 1;
  return climbStairsFailed2(n - 1) + climbStairsFailed2(n - 2);
}
