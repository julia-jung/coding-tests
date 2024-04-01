/** ⭐⭐
 * Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray
 *  [subarray: A subarray is a contiguous non-empty sequence of elements within an array.]
 * whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
 */

minSubArrayLen(7, [2, 3, 1, 2, 4, 3]); // 2 ([4, 3])
minSubArrayLen(4, [1, 4, 4]); // 1 ([4])
minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]); // 0

function minSubArrayLen(target: number, nums: number[]): number {
  let i = 0;
  let j = 0;
  let sum = 0;
  let count = Number.MAX_VALUE;

  // starting from 0
  while (j < nums.length) {
    // add up until it gets bigger than target
    sum += nums[j++];
    // if the j reaches to the point that sum gets bigger than target
    while (sum >= target) {
      // update count how many was added up to the sum (update with min value)
      count = Math.min(count, j - i);
      // subtract ith index value from sum
      sum -= nums[i++];
    }
  }

  return count === Number.MAX_VALUE ? 0 : count;
}

// Time Limit Exceeded (Time complexity: O(n^2))
function minSubArrayLenFailed(target: number, nums: number[]): number {
  const sums = [nums[0]]; // sums from 0 index until it's position in nums array
  let count = Number.MAX_VALUE;

  for (let i = 1; i < nums.length; i++) {
    sums[i] = sums[i - 1] + nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      const sum = sums[j] - sums[i] + nums[i];
      if (sum >= target) {
        count = Math.min(count, j - i + 1);
        break;
      }
    }
  }

  return count === Number.MAX_VALUE ? 0 : count;
}

function minSubArrayLenWrong(target: number, nums: number[]): number {
  nums.sort((a, b) => a - b);
  console.log(nums);
  if (target < nums[0]) return 0;

  let remain = target;
  let count = 0;

  let i = nums.length - 1;
  while (i >= 0 && remain > 0) {
    remain -= nums[i--];
    count++;
  }

  return remain > 0 ? 0 : count;
}
