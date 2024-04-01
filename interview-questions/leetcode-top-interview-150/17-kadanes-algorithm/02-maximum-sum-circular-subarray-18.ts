/**
 * Given a circular integer array nums of length n, return the maximum possible sum of a non-empty subarray of nums.
 * A circular array means the end of the array connects to the beginning of the array.
 * Formally, the next element of nums[i] is nums[(i + 1) % n] and the previous element of nums[i] is nums[(i - 1 + n) % n].
 * A subarray may only include each element of the fixed buffer nums at most once.
 * Formally, for a subarray nums[i], nums[i + 1], ..., nums[j], there does not exist i <= k1, k2 <= j with k1 % n == k2 % n.
 */

// Input: nums = [1,-2,3,-2] -> Output: 3
// Input: nums = [5,-3,5] -> Output: 10
// Input: nums = [-3,-2,-3] -> Output: -2

function maxSubarraySumCircular(nums: number[]): number {
  // case 1. max Subarray is not circular -> we can get this same as maxSubarray without circular
  // case 2. max Subarray is circular(take a part of head and tail)
  //  -> equal to the total sum minus minimum subarray sum
  // output => Math.max(case1, case2)

  let total = nums[0];
  let currentMax = nums[0];
  let maxSum = currentMax;
  let currentMin = nums[0];
  let minSum = currentMin;

  for (let i = 1; i < nums.length; i++) {
    total += nums[i];

    currentMax = Math.max(nums[i], currentMax + nums[i]);
    maxSum = Math.max(currentMax, maxSum);

    currentMin = Math.min(nums[i], currentMin + nums[i]);
    minSum = Math.min(currentMin, minSum);
  }
  // if all numbers are negative
  // maxSum will be the largest num itself (which is smaller than 0)
  // and minSum will be same with the total
  // so Math.max(maxSum, 0) will be always 0
  // but the actual outcome should be the maxSum(the largest number)
  return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum;
}
