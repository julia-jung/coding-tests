/** ⭐
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times. 
 * You may assume that the majority element always exists in the array.
 */

// Solution 1: Moore Voting Algorithm
// If there is a majority element in an array, it will always remain in the lead, even after encountering other elements.
function majorityElement(nums: number[]): number {
  let count = 0;
  let candidate = nums[0];

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += (num === candidate) ? 1 : -1;
  }

  return candidate;
}

majorityElement([3, 2, 3]); //3
majorityElement([2,2,1,1,1,2,2]); //2

// Solution 2: sorting
// If an element occurs more than n/2 times in the array, it will always occupy the middle position when the array is sorted. 
function majorityElement2(nums: number[]): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  return nums[Math.trunc(n / 2)];
}

// Solution 3: using hasmap
function majorityElement3(nums: number[]): number {
  if (nums.length <= 1) return nums[0];

  const hashmap = {};
  let major = 0;
  for (const num of nums) {
    if (hashmap.hasOwnProperty(num)) {
      if (++hashmap[num] > nums.length / 2) { 
        major = num;
      } 
    } else {
      hashmap[num] = 1;
    }
  }

  return major;
};
