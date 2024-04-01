/** ⭐⭐
 * You are given an integer array nums. You are initially positioned at the array's first index, 
 * and each element in the array represents your maximum jump length at that position.
 * Return true if you can reach the last index, or false otherwise.
 */

canJump([2, 3, 1, 1, 4]); // true
canJump([3, 2, 1, 0, 4]); // false

function canJump(nums: number[]): boolean {
  // 1. iterating through the array
  // 2. update the furthest reachable index
  // 3. if we end up being further than the reachable index
  // 4. that means we can not reach to the index where we are at, so return false
  // 5. otherwise(when we reach the end of the array) return true
  let reachable = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > reachable) return false;
    reachable = Math.max(reachable, i + nums[i]);
  }
  return true; 
}