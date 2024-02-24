/** ⭐⭐
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 */

productExceptSelf([1, 2, 3, 4]); // [24,12,8,6]
productExceptSelf([-1, 1, 0, -3, 3]); // [0,0,9,0,0]

function productExceptSelf(nums: number[]): number[] {
  const result = [1];
  // In first loop: set the result array with the product of all elements before self
  // the the last element have the exact value that we want (product of all other than self)
  for (let i = 0; i < nums.length - 1; i++) {
    result[i + 1] = result[i] * nums[i];
  }
  
  // In second loop: to the each element in result array, product the value of product of all elements after self
  let product = 1;
  for (let i = nums.length - 1; i > 0; i--) {
    product *= nums[i];
    result[i - 1] *= product;
  }

  return result;
};