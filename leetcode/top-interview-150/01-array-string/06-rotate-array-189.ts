/**
 Do not return anything, modify nums in-place instead.
 */

// Solution 1
function rotate(nums: number[], k: number): void {
  k %= nums.length; // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts
  function reverse(nums: number[], start: number, end: number): void {
    while (start < end) {
      const temp = nums[start];
      nums[start++] = nums[end];
      nums[end--] = temp;
    }
  }
  reverse(nums, 0, nums.length - 1); // reverse the whole array
  reverse(nums, 0, k - 1); // reserve first part before k from start
  reverse(nums, k, nums.length - 1); // reverse second part from k till the end
};



 // Solution 2
function rotate2(nums: number[], k: number): void {
  const temp = [];
  k %= nums.length;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i >= nums.length - k) {
      temp.push(nums[i]);
    }
    nums[i] = i >= k ? nums[i - k] : temp.shift();
  }
};

// Solution 3
function rotate3(nums: number[], k: number): void {
  for(var i = 0; i < k; i++) {
    nums.unshift(nums.pop())
  }
};

rotate([1,2,3,4,5,6,7], 3); // [5,6,7,1,2,3,4]
rotate([1,2,3,4,5,6,7,8], 3); // [6,7,8,1,2,3,4,5]
rotate([-1,-100,3,99], 2); // [3,99,-1,-100]
rotate([1,2], 2); // [1,2]
rotate([1,2], 3); // [2,1]