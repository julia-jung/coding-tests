/** ⭐
 * Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array 
 * such that nums[i] == nums[j] and abs(i - j) <= k.
 */

containsNearbyDuplicate([1, 2, 3, 1], 3); // true
containsNearbyDuplicate([1, 0, 1, 1], 1); // true
containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2); // false

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const j = map.get(nums[i]);
      if (Math.abs(i - j) <= k) return true;
    }
    map.set(nums[i], i);
  }
  return false;
};
