/** ⭐
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */

// Solution 1: while loop iterating with index
function maxProfit(prices: number[]): number {
  let profit = 0;
  if (prices.length <= 1) return profit;

  let buy = 0;
  let sell = 1;

  while(sell < prices.length) {
    const currentProfit = prices[sell] - prices[buy]; 
    if (currentProfit > 0) {
      profit = Math.max(profit, currentProfit);
    } else {
      buy = sell;
    }
    sell++;
  }

  return profit;
};

maxProfit([7,1,5,3,6,4]); //5
maxProfit([7,6,4,3,1]); //0

// Solution 2: For-of loop iterating items
function maxProfit2(prices: number[]): number {
  let profit = 0;
  if (prices.length <= 1) return profit;

  let buy = prices[0];
  for (const price of prices) {
    if (price > buy) {
      profit = Math.max(profit, price - buy);
    } else {
      buy = price;
    }
  }

  return profit;
};

// Failed 1: Tried to find min from the first half and max from the last half
// but both min and max could be in the same part
function maxProfitFailed1(prices: number[]): number {
  let min = prices[0];
  let max = prices[prices.length - 1];

  for (let i = 1; i < prices.length - 1; i++) {
    if (i < Math.ceil(prices.length / 2) && prices[i] < min) {
      min = prices[i];
    } 
    if (i >= Math.floor(prices.length / 2) && prices[i] > max) {
      max = prices[i];
    }
  }
  return Math.max(max - min, 0);
};

// Failed 2: Timed out
function maxProfitFailed2(prices: number[]): number {
  let profit = 0;

  for(let i = 0; i < prices.length - 1; i++) {
    for (let j = prices.length - 1; j >= i; j--) {
      const currentProfit = prices[j] - prices[i];
      if (currentProfit > profit) {
        profit = currentProfit;
      }
    }
  }
  return profit;
};
