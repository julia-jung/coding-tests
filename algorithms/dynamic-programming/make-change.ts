/** Given coins array and money, find how many ways the money can be changed with coins */
function findWaysOfMakingChange(coins: number[], money: number) {
  const memo = new Map();
  return function makeChange(
    coins: number[],
    money: number,
    index: number
  ): number {
    if (money === 0) return 1;
    if (index >= coins.length) return 0;

    // return momoized value
    const key = money + '-' + index;
    if (memo.has(key)) {
      return memo.get(key);
    }

    let changedAmount = 0;
    let ways = 0;
    while (changedAmount <= money) {
      ways += makeChange(coins, money - changedAmount, index + 1);
      changedAmount += coins[index];
    }

    // memoization
    memo.set(key, ways);

    return ways;
  };
}
