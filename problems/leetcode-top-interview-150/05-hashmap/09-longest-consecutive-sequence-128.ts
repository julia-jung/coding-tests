/** ⭐⭐
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * You must write an algorithm that runs in O(n) time.
 */

longestConsecutive([100, 4, 200, 1, 3, 2]); // 4
longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]); // 9

function longestConsecutive(nums: number[]): number {
  const map = new Map();
  let length = 0;
  nums.sort((a, b) => a - b);

  for (const num of nums) {
    let count = 1 + (map.get(num - 1) ?? 0);
    length = Math.max(length, count);
    map.set(num, count);
  }

  return length;
};