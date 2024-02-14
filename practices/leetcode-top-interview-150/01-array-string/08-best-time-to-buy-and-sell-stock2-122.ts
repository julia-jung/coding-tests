/** ⭐⭐
 * You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
 * On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. 
 * However, you can buy it then immediately sell it on the same day.
 * Find and return the maximum profit you can achieve.
 */

// Solution 1
// This works only because we can buy and immediately sell it on the same day
function maxProfit(prices: number[]): number {
  let profit = 0;
  let buy = prices[0];

  for (const price of prices) {
    if (price > buy) {
      profit += price - buy;
    }
    buy = price;
  }

  return profit;
};


// Solution 2
// Find the smallest consecutive price from start to buy then find the biggest consecutive price from it to sell
// In that way, array can be splited with several sub-ranges to buy and sell
// Buy at first valley and sell at the next peak and repeat it till the end
function maxProfit2(prices: number[]): number {
  let profit = 0;
  let i = 0;

  while (i < prices.length) {
    // find next local(consecutive) minimum 
    while (i < prices.length - 1 && prices[i + 1] <= prices[i]) i++;
    let min = prices[i];

    // find next local(consecutive) maximum
    while (i < prices.length - 1 && prices[i + 1] > prices[i]) i++;
    let max = prices[i];

    profit += max - min;
    i++;
  }

  return profit;
};

maxProfit([7, 1, 5, 3, 6, 4]); // first valley(1), first peak(5), second valley(3), second peak(6)
maxProfit([1, 2, 3, 4, 5]); // valley(1), peak(5)
maxProfit([7, 6, 4, 3, 1]); // no peak after valley(1)