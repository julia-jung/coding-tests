/**
 * Google Question
 *
 * Given number array, find the first number recurring within the array
 * If there is no recurring number, return undefined
 */

// Time complexity: O(n) / Space complexity: O(n)
function findRecurringElement(nums: number[]): number | undefined {
  let set = new Set();
  for (const num of nums) {
    if (set.has(num)) return num;

    set.add(num);
  }
  return undefined;
}

function findRecurringElement2(nums: number[]): number | undefined {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] === nums[i]) return nums[i];
    }
  }
  return undefined;
}

function findRecurringElement3(nums: number[]): number | undefined {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === nums[i]) return nums[i];
    }
  }
  return undefined;
}

console.log(findRecurringElement2([2, 5, 1, 2, 3, 5, 1, 2, 4])); // 2
console.log(findRecurringElement2([2, 1, 1, 2, 3, 5, 1, 2, 4])); // 1
console.log(findRecurringElement2([2, 3, 4, 5])); // undefined
