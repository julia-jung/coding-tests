/** ⭐⭐
 * You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
 * Return the fewest number of coins that you need to make up that amount.
 * If that amount of money cannot be made up by any combination of the coins, return -1.
 * You may assume that you have an infinite number of each kind of coin.
 */

coinChange([1, 2, 5], 11); // 3 (5+5+1)
coinChange([2], 3); // -1
coinChange([1], 0); // 0

// Recursive solution
// Time complexity: O(N * M) / Space complexity: O(M)
function coinChange(coins: number[], amount: number): number {
  if (amount === 0) return 0;
  const memo = new Map<number, number>();

  return helper(amount);

  function helper(remain: number) {
    if (remain === 0) return 0;
    if (remain < 0) return -1;
    if (memo.has(remain)) return memo.get(remain);

    let minCount = Number.MAX_VALUE;
    for (const coin of coins) {
      const count = helper(remain - coin);
      if (count >= 0) {
        minCount = Math.min(minCount, count + 1);
      }
    }
    memo.set(remain, minCount === Number.MAX_VALUE ? -1 : minCount);
    return memo.get(remain);
  }
}

// Bottom Up solution
// Time complexity: O(N*M) (N: length of coins array)
// Space complexity: O(M) (M: amount)
function coinChange2(coins: number[], amount: number): number {
  if (amount === 0) return 0;

  const cache = new Array(amount + 1).fill(Number.MAX_VALUE);
  cache[0] = 0; // for 0 amount, 0 coins is used

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      cache[i] = Math.min(cache[i], cache[i - coin] + 1);
    }
  }
  return cache[amount] === Number.MAX_VALUE ? -1 : cache[amount];
}
