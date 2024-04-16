/** ⭐⭐
 * You are a professional robber planning to rob houses along a street.
 * Each house has a certain amount of money stashed, the only constraint stopping you
 * from robbing each of them is that adjacent houses have security systems connected
 * and it will automatically contact the police if two adjacent houses were broken into on the same night.
 * Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
 */
rob([1, 2, 3, 1]); // 4 (1+3)
rob([2, 7, 9, 3, 1]); // 12 (2+9+1)

// Recursive
// Time complexity: O(n) / Space complexity: O(n)
function rob(nums: number[]): number {
  const memo = new Map<number, number>();
  return getMaxMoney(nums.length - 1);

  function getMaxMoney(index: number): number {
    if (index < 0) return 0;
    if (!memo.has(index))
      memo.set(
        index,
        Math.max(getMaxMoney(index - 2) + nums[index], getMaxMoney(index - 1))
      );
    return memo.get(index);
  }
}

// Bottom up
// Time complexity: O(n) / Space complexity: O(n)
function rob2(nums: number[]): number {
  if (nums.length === 1) return nums[0];
  const memo = [nums[0], Math.max(nums[1], nums[0])];

  for (let i = 2; i < nums.length; i++) {
    memo[i] = Math.max(memo[i - 2] + nums[i], memo[i - 1]);
  }

  return memo[nums.length - 1];
}

// Bottom up
// Time complexity: O(n) / Space complexity: O(1)
function rob3(nums: number[]): number {
  if (nums.length === 1) return nums[0];
  let first = nums[0];
  let second = Math.max(nums[1], nums[0]);

  for (let i = 2; i < nums.length; i++) {
    const cur = Math.max(first + nums[i], second);
    first = second;
    second = cur;
  }

  return second;
}

function robFailed1(nums: number[]): number {
  // first approach: either rob houses in the index of odd or even numbers
  // Failed case: [2,1,1,2] -> output = 3 / expected = 4
  if (nums.length === 1) return nums[0];

  let oddSum = 0;
  let evenSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      evenSum += nums[i];
    } else {
      oddSum += nums[i];
    }
  }
  return Math.max(oddSum, evenSum);
}

function robFailed2(nums: number[]): number {
  // there can be 2 cases,
  // 1) pick first house, then skip the second index, move to the third index
  // 2) pick second house, then skip the third index, move to the fourth index
  // Failed(time limit exceeded) case: nums=[226,174,214,16,218,48,153,131,128,17,157,142,88,43,37,157,43,221,191,68,206,23,225,82,54,118,111,46,80,49,245,63,25,194,72,80,143,55,209,18,55,122,65,66,177,101,63,201,172,130,103,225,142,46,86,185,62,138,212,192,125,77,223,188,99,228,90,25,193,211,84,239,119,234,85,83,123,120,131,203,219,10,82,35,120,180,249,106,37,169,225,54,103,55,166,124]
  return getMaxMoney(0, 0);

  function getMaxMoney(sum: number, index: number): number {
    if (index > nums.length - 1) return sum;
    if (index === nums.length - 1) return sum + nums[index];
    return Math.max(
      getMaxMoney(sum + nums[index], index + 2),
      getMaxMoney(sum + nums[index + 1], index + 3)
    );
  }
}

// Failed case: [82,217,170,215,153,55,185,55,185,232,69,131,130,102] -> output: 1055 / expected:1082
function robFaild3(nums: number[]): number {
  const memo = new Map<number, number>();
  return getMaxMoney(0, 0);

  function getMaxMoney(sum: number, index: number): number {
    console.log(memo);
    if (index > nums.length - 1) return sum;
    if (index === nums.length - 1) return sum + nums[index];

    if (!memo.has(index)) {
      memo.set(
        index,
        Math.max(
          getMaxMoney(sum + nums[index], index + 2),
          getMaxMoney(sum + nums[index + 1], index + 3)
        )
      );
    }

    return memo.get(index);
  }
}

// Failed case: [4,1,2,7,5,3,1] -> output: 12 / expected: 14
function robFailed4(nums: number[]): number {
  const memo = new Map<number, number>();
  return getMaxMoney(0, 0);

  function getMaxMoney(sum: number, index: number): number {
    console.log(memo);
    if (index > nums.length - 1) return sum;
    if (index === nums.length - 1) return sum + nums[index];
    if (!memo.has(index))
      memo.set(index, getMaxMoney(sum + nums[index], index + 2));
    if (!memo.has(index + 1))
      memo.set(index + 1, getMaxMoney(sum + nums[index + 1], index + 3));

    return Math.max(memo.get(index), memo.get(index + 1));
  }
}
