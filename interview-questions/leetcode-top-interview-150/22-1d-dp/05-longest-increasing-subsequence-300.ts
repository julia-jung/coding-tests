/** ⭐⭐
 * Given an integer array nums, return the length of the longest strictly increasing subsequence.
 *
 * A subsequence is an array that can be derived from another array by deleting some or no elements
 * without changing the order of the remaining elements.
 */

lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]); // 4 ([2,3,7,101])
lengthOfLIS([0, 1, 0, 3, 2, 3]); // 4 ([0,1,2,3])
lengthOfLIS([7, 7, 7, 7, 7, 7, 7]); // 1 ([7])

// Bottom Up
// Time complexity: O(N^2) / Space complexity: O(N)
function lengthOfLIS(nums: number[]): number {
  const cache = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    let max = Number.MIN_VALUE;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) max = Math.max(max, cache[j]);
    }
    cache[i] = max + 1;
  }
  return Math.max(...cache);
}

function lengthOfLIS2(nums: number[]): number {
  const cache = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) cache[i] = Math.max(cache[i], cache[j] + 1);
    }
  }
  return Math.max(...cache);
}
