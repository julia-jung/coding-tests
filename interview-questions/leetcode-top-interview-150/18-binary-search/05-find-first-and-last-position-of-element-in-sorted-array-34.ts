/** ⭐⭐
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
 * If target is not found in the array, return [-1, -1].
 * You must write an algorithm with O(log n) runtime complexity.
 */

// Input: nums = [5,7,7,8,8,10], target = 8 -> Output: [3,4]
// Input: nums = [5,7,7,8,8,10], target = 6 -> Output: [-1,-1]
// Input: nums = [], target = 0 -> Output: [-1,-1]

// 왼쪽과 오른쪽 따로 찾기
function searchRange(nums: number[], target: number): number[] {
  return [findLeftBound(nums, target), findRightBound(nums, target)];

  function findLeftBound(nums: number[], target: number) {
    let left = 0;
    let right = nums.length - 1;
    let index = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        index = mid;
        // even though we find the target,
        // to find left bound, keep search with the left part of the mid
        right = mid - 1;
      } else if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return index;
  }

  function findRightBound(nums: number[], target: number) {
    let left = 0;
    let right = nums.length - 1;
    let index = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        index = mid;
        // even though we find the target,
        // to find right bound, keep search with the right part of the mid
        left = mid + 1;
      } else if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return index;
  }
}

// 이중 while문
function searchRange2(nums: number[], target: number): number[] {
  if (nums.length === 0) return [-1, -1];

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.trunc((right - left) / 2);

    let start = mid;
    let end = mid;
    while (start > 0 && nums[start - 1] === nums[mid]) start--;
    while (end < nums.length - 1 && nums[end + 1] === nums[mid]) end++;

    if (nums[mid] < target) {
      left = end + 1;
    } else if (nums[mid] > target) {
      right = start - 1;
    } else {
      return [start, end];
    }
  }
  return [-1, -1];
}

// 먼저 binary search 하고나서 while문으로 boundary 찾기
function searchRange3(nums: number[], target: number): number[] {
  if (nums.length === 0) return [-1, -1];

  const mid = binarySearch(nums, target);

  if (mid < 0) return [-1, -1];

  let start = mid;
  let end = mid;
  while (start > 0 && nums[start - 1] === target) start--;
  while (end < nums.length - 1 && nums[end + 1] === target) end++;

  return [start, end];

  function binarySearch(nums: number[], target: number) {
    let left = 0;
    let right = nums.length - 1;
    let mid = -1;

    while (left <= right) {
      mid = left + Math.trunc((right - left) / 2);

      if (nums[mid] < target) {
        left = mid + 1;
      } else if (nums[mid] > target) {
        right = mid - 1;
      } else {
        return mid;
      }
    }
    return -1;
  }
}
