/** ⭐
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 */

singleNumber([2, 2, 1]); // 1
singleNumber([4, 1, 2, 1, 2]); // 4
singleNumber([1]); // 1

// Solution 1: Using XOR(commutative. 교환법칙 성립)
function singleNumber(nums: number[]): number {
  // if nums = [2, 1, 4, 5, 2, 4, 1];
  let result = 0;
  for (const num of nums) {
    result ^= num;
    // this makes in result => 0 ^ 2 ^ 1 ^ 4 ^ 5 ^ 2 ^ 4 ^ 1
    // because XOR is commutive we can re-arrange like this => 0 ^ (2 ^ 2) ^ (1 ^ 1) ^ (4 ^ 4) ^ 5
    // XOR returns 0 if two numbers are same => 0 ^ 0 ^ 0 ^ 0 ^ 5 => 5
  }

  return result;
}

function singleNumber2(nums: number[]): number {
  let i = 0;
  let j = nums.length;
  while (i < j) {
    let k = i + 1;

    while (nums[i] !== nums[k] && k < j) k++;
    if (k === j) return nums[i];
    const temp = nums[--j];
    nums[j] = nums[k];
    nums[k] = temp;
    i++;
  }

  return nums[i];
}
