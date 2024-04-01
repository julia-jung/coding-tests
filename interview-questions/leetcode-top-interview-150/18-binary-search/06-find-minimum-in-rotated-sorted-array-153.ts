/** ⭐⭐
 * Suppose an array of length n sorted in ascending order is rotated between 1 and n times.
 * For example, the array nums = [0,1,2,4,5,6,7] might become:
 *  - [4,5,6,7,0,1,2] if it was rotated 4 times.
 *  - [0,1,2,4,5,6,7] if it was rotated 7 times.
 *  Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
 *
 * Given the sorted rotated array nums of unique elements, return the minimum element of this array.
 * You must write an algorithm that runs in O(log n) time.
 */

// Input: nums = [3,4,5,1,2] -> Output: 1
// Input: nums = [4,5,6,7,0,1,2] -> Output: 0
// Input: nums = [11,13,15,17] -> Output: 11

// end랑만 비교하면 됨
function findMin(nums: number[]): number {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const mid = start + Math.trunc((end - start) / 2);

    if (nums[mid] > nums[end]) {
      // 3,4,5,6,0,1,2
      // the min number is on the right side
      start = mid + 1;
    } else {
      // 0,1,2,3,4,5,6
      // the min could be the mid number or is on the left side
      end = mid;
    }
  }
  return nums[end];
}

// 첨에 start랑도 비교함
function findMin2(nums: number[]): number {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = start + Math.trunc((end - start) / 2);

    if (nums[mid] < nums[start]) {
      // 5,6,0,1,2,3,4
      // the minimum number is between (start + 1) ~ mid
      start = start + 1;
      end = mid;
    } else {
      if (nums[mid] > nums[end]) {
        // 3,4,5,6,0,1,2
        // the min number is between (mid + 1) ~ end
        start = mid + 1;
      } else {
        // 0,1,2,3,4,5,6
        end = mid - 1;
      }
    }
  }
  return nums[start];
}
