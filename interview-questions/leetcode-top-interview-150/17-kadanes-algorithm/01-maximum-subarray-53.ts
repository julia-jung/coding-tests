/** ⭐⭐
 * Given an integer array nums, find the subarray with the largest sum, and return its sum.
 */

// kadane's algorithm
function maxSubArray(nums: number[]): number {
  for (let i = 1; i < nums.length; i++) {
    /**
     * 각각의 인덱스가 가질수 있는 최대 부분합은 이전 인덱스가 가진 부분합에 자신을 더한 값과 자신의 값 자체를 비교하여 더 큰 값이 된다.
     * 각각의 인덱스가 가질 수 있는 최대 부분합을 구하는 방법은 간단하다. 각각의 인덱스 값은 이전 인덱스가 갖고 있는 최대 부분합을 연장할지,
     * 아니면 자신의 값으로 초기화할지 그저 선택을 하면된다.
     * 최대 부분합을 연장한다는 것은 이전 인덱스의 최대 부분합 값에 현재 인덱스의 최대 부분합 값을 더한 값이 현재 인덱스 값보다 크다는 것을 의미한다.
     */
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }

  return Math.max(...nums);
}

// brute-force -> Time limit exceeded
function maxSubArray2(nums: number[]): number {
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      maxSum = Math.max(sum, maxSum);
    }
  }
  return maxSum;
}
