/** ⭐⭐
 * A peak element is an element that is strictly greater than its neighbors.
 * Given a 0-indexed integer array nums, find a peak element, and return its index.
 * If the array contains multiple peaks, return the index to any of the peaks.
 * You may imagine that nums[-1] = nums[n] = -∞. In other words,
 * an element is always considered to be strictly greater than a neighbor that is outside the array.
 * You must write an algorithm that runs in O(log n) time.
 */

// Input: nums = [1,2,3,1] -> Output: 2
// Input: nums = [1,2,1,3,5,6,4] -> Output: 5

// binary search
function findPeakElement(nums: number[]): number {
  if (nums.length === 1) return 0; // single element

  if (nums[0] > nums[1]) return 0; // first element is peak
  if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1; // last element is peak

  let left = 1;
  let right = nums.length - 2;

  while (left <= right) {
    const mid = left + Math.trunc((right - left) / 2);

    if (nums[mid] < nums[mid - 1]) {
      // peak is on the left side of the mid
      right = mid - 1;
    } else if (nums[mid] < nums[mid + 1]) {
      // peak is on the right side of the mid
      left = mid + 1;
    } else {
      // mid is peak
      return mid;
    }
  }
}

// searching from both end, return whichever peak find first
function findPeakElement2(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left + 1] > nums[left]) {
      left++;
    } else {
      return left;
    }
    if (nums[right - 1] > nums[right]) {
      right--;
    } else {
      return right;
    }
  }

  return left;
}
