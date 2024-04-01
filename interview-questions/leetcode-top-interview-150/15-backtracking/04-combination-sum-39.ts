/** ⭐⭐
 * Given an array of distinct integers candidates and a target integer target, 
 * return a list of all unique combinations of candidates where the chosen numbers sum to target. 
 * You may return the combinations in any order.
 * The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency
 * of at least one of the chosen numbers is different.
 * The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
 */

// Input: candidates = [2,3,6,7], target = 7 -> Output: [[2,2,3],[7]]
// Input: candidates = [2,3,5], target = 8 -> Output: [[2,2,2,2],[2,3,3],[3,5]]
// Input: candidates = [2], target = 1 -> Output: []


function combinationSum(candidates: number[], target: number): number[][] {
  const combinations = [];
  candidates.sort((a, b) => a - b);

  backtrack([], 0, target);
  return combinations;

  function backtrack(combination: number[], start: number, remain: number) {
    if (remain === 0) {
      combinations.push([...combination]);
      return;
    } else if (remain < candidates[0]) {
      return;
    }

    for (let i = start;  i < candidates.length; i++) {
      if (remain >= candidates[i]) {
        combination.push(candidates[i]);
        backtrack(combination, i, remain - candidates[i]);
        combination.pop();
      }
    }
  }
};