/** ⭐
 * Given a sorted array of distinct integers and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 * You must write an algorithm with O(log n) runtime complexity.
 */

searchInsert([1, 3, 5, 6], 5); // 2
searchInsert([1, 3, 5, 6], 2); // 1
searchInsert([1, 3, 5, 6], 7); // 4

// Solution 1: Binary search with two pointer starting from first and last index comparing the target with mid
function searchInsert(nums: number[], target: number): number {
  if (nums.length < 1) return 0;

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.trunc((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      // the index should be greater than current mid
      left = mid + 1;
    } else {
      right = mid; // the index shoud be less than current mid
    }
  }

  return nums[left] < target ? left + 1 : left;
}

// Solution 2: not binary search but just iterating the array
function searchInsert2(nums: number[], target: number): number {
  let i = 0;
  while (i < nums.length && target > nums[i]) i++;

  return i;
}
