/** ⭐⭐
 * Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
 * You may return the answer in any order.
 */

// Input: n = 4, k = 2 -> Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// Input: n = 1, k = 1 -> Output: [[1]]

function combine(n: number, k: number): number[][] {
  const combinations: number[][] = [];
  
  backtrack();

  return combinations;

  function backtrack(combination: number[] = [], start: number = 1) {
    if (combination.length === k) {
      combinations.push([...combination]);
      return;
    }

    for (let i = start; i <= n; i++) {
      combination.push(i); // push temporarily
      backtrack(combination, i + 1);
      combination.pop(); // remove temporarily pushed element
    } 
  }
};

/**
 * # starting from 1
 * combination = [1]
 * backtrack([1], 2, 4) is called
 *  ## starting from 2
 *  combination = [1,2]
 *  backtrack([1,2], 3, 4) is called
 *    [1,2] is pushed into the output combinations array -> combinations = [[1,2]]
 *  combination is poped and now [1]
 *  ---
 *  ## moving on to 3
 *  combination = [1,3]
 *  backtrack([1,3], 4, 4) is called
 *    [1,3] is pushed into the output combinations array -> combinations = [[1,2], [1,3]]
 *  combination is poped and now [1]
 *  ---
 *  ## moving on to 4
 *  combination = [1,4]
 *  backtrack([1,4], 5, 4) is called
 *    [1,4] is pushed into the output combinations array -> combinations = [[1,2], [1,3], [1,4]]
 *  combination is poped and now [1]
 *  ---
 * combination is poped and now []
 * ------
 * # moving on to 2
 * combination = [2]
 * backtrack([2], 3, 4) is called
 *  ## starting from 3
 *  combination = [2,3]
 *  backtrack([2,3], 4, 4) is called
 *    [2,3] is pushed into the output combinations array -> combinations = [[1,2], [1,3], [1,4], [2,3]]
 *  combination is poped and now [2]
 *  ---
 *  ## moving on to 4
 *  combination = [2,4]
 *  backtrack([2,4], 5, 4) is called
 *    [2,4] is pushed into the output combinations array -> combinations = [[1,2], [1,3], [1,4], [2,3], [2,4]]
 *  combination is poped and now [2]
 *  ---
 * combination is poped and now []
 * ------
 * # moving on to 3
 * combination = [3]
 * backtrack([3], 4, 4) is called
 *  ## starting from 4
 *  combination = [3,4]
 *  backtrack([3,4], 5, 4) is called
 *    [3,4] is pushed into the output combinations array -> combinations = [[1,2], [1,3], [1,4], [2,3], [2,4], [3,4]]
 *  combination is poped and now [3]
 *  ---
 * combination is poped and now []
 * -----
 * # moving on to 4
 * combination = [4]
 * backtrack([2,4], 5, 4) is called
 * combination is poped and now []
 */