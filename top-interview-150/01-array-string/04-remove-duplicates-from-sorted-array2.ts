/** ⭐⭐
 * Given an integer array nums sorted in non-decreasing order, 
 * remove some duplicates in-place such that each unique element appears at most twice. 
 * The relative order of the elements should be kept the same.
 * if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result.
 * Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 */

// Solution 1: similar with 03
function removeDoubleDuplicates(nums: number[]): number {
  let k = 0;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[k] || nums[i] !== nums[k - 1]) {
      nums[++k] = nums[i];
    }
  }

  return k + 1;
};


// Solution 2: if nums are not sorted non-decreasing order
function removeDoubleDuplicates2(nums: number[]): number {
  let k = 0;
  for (let i = 2; i < nums.length; i++) {
    let duplicates = 0;
    for (let j = k; j >= 0; j--) {
      if (nums[j] === nums[i]) duplicates++;
    }
    if (duplicates < 2) {
      nums[++k] = nums[i];
    }
  }

  return k + 1;
};