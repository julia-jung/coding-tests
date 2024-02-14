/** ⭐
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */


// Solution 1: using map with key of num and value of index then check while looping
function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [i, map.get(diff)];
    }
    map.set(nums[i], i);
  }
}

twoSum([2, 7, 11, 15], 9); // [0, 1]
twoSum([3, 2, 4], 6); // [1, 2]
twoSum([3, 3], 6); // [0, 1]

// Solution 2: first build [i, num] map then check looping map
function twoSum2(nums: number[], target: number): number[] {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(i, target - nums[i]);
  }

  for (const [i, v] of map) {
    const j = nums.findIndex((num, idx) => idx !== i && num === v);
    if (j >= 0) {
      return [i, j];
    }
  }
}