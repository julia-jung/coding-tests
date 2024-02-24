/** ⭐
 * You are given a sorted unique integer array nums.
 * A range [a,b] is the set of all integers from a to b (inclusive).
 * Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
 * Each range [a,b] in the list should be output as:
 * "a->b" if a != b
 * "a" if a == b
 */

function summaryRanges(nums: number[]): string[] {
  if (nums.length === 0) return [];
  const ranges: number[][] = [[nums[0]]];

  let k = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1] + 1) {
      ranges[++k] = [];
    }
    ranges[k].push(nums[i]);
  }

  return ranges.map((range) => getSummary(range));

  function getSummary(range: number[]): string {
    return range.length === 1 ? `${range[0]}` : `${range[0]}->${range[range.length - 1]}`;
  }
};

summaryRanges([0, 1, 2, 4, 5, 7]); // ["0->2","4->5","7"]
summaryRanges([0, 2, 3, 4, 6, 8, 9]); // ["0","2->4","6","8->9"]