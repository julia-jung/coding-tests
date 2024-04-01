/** ⭐⭐
 * There is an integer array nums sorted in ascending order (with distinct values).
 * Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length)
 * such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
 * For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
 * Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums,
 * or -1 if it is not in nums.
 * You must write an algorithm with O(log n) runtime complexity.
 */

// Input: nums = [4,5,6,7,0,1,2], target = 0 -> Output: 4
// Input: nums = [4,5,6,7,0,1,2], target = 3 -> Output: -1
// Input: nums = [1], target = 0 -> Output: -1

// binary search
function search(nums: number[], target: number): number {
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }

  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const mid = start + Math.floor((end - start) / 2);

    if (nums[mid] === target) return mid;

    // at least one part is ordered
    // so check the cases, and see if the target is in the ordered part

    // if the left part is ordered
    if (nums[mid] >= nums[start]) {
      // and the target is in the left part
      if (target < nums[mid] && target >= nums[start]) {
        // drop the right part
        end = mid;
      } else {
        // otherwise drop the left part
        start = mid + 1;
      }
    }

    // if the right part is ordered
    if (nums[mid] <= nums[end]) {
      // and the target is in the right part
      if (target > nums[mid] && target <= nums[end]) {
        // then drop the left part
        start = mid + 1;
      } else {
        // otherwise drop the right part
        end = mid;
      }
    }
  }
  return nums[start] === target ? start : -1;
}

function search2(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = start + Math.trunc((end - start) / 2);
    let num = nums[mid];
    // if both mid and target are on the same side of nums[0], take the mid
    if (target < nums[0] !== nums[mid] < nums[0]) {
      // if target is on the right part and mid is in the left part
      // drop the left part making them into -INFINITY
      // if target is on the left part but the mid is in the right part
      // drop the right part making them into INFINITY
      num = target < nums[0] ? -Number.MAX_VALUE : Number.MAX_VALUE;
    }

    if (num < target) {
      start = mid + 1;
    } else if (num > target) {
      end = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

function searchFailed(nums: number[], target: number): number {
  if (nums.length === 1) return nums[0] === target ? 0 : -1;

  let k = 0;
  // 1. find the k
  while (k < nums.length - 1 && nums[k] < nums[k + 1]) k++;
  // 2. rebuild nums if there were rotation

  if (k === 0) {
    // means nums is reversed
    nums = nums.reverse();
  } else if (k < nums.length - 1) {
    nums = [...nums.slice(nums.length - k), ...nums.slice(0, nums.length - k)];
  } else {
    // if k === nums.length - 1, means there were no rotation
    k++;
  }
  console.log(k, nums);

  // 3. do the binary search
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = start + Math.trunc((end - start) / 2);

    if (nums[mid] === target) {
      // if mid is greater than k, means it is in the left part
      // else it is in the right part
      return mid >= k ? mid - k : mid + (nums.length - k);
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}
