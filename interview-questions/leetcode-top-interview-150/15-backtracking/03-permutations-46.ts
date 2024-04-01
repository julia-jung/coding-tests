/** ⭐⭐
 * Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
 */

// Input: nums = [1,2,3] -> Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Input: nums = [0,1] -> Output: [[0,1],[1,0]]
// Input: nums = [1] -> Output: [[1]]


function permute(nums: number[]): number[][] {
  const size = nums.length;
  const permutations = [];

  backtrack();
  return permutations;

  function backtrack(temp: number[] = []) {
    if (temp.length === size) permutations.push([...temp]);

    for (let i = 0; i < nums.length; i++) {
      if (temp.indexOf(nums[i]) < 0) {
        temp.push(nums[i]);
        backtrack(temp);
        temp.pop();
      }
    }
  }

  // temp = [1]
  //  temp = [1,2]
  //    temp = [1,2,3] !
  //  temp = [1,3]
  //    temp = [1,3,2] !

  // temp = [2]
  //  temp = [2,1]
  //    temp = [2,1,3] !
  //  temp = [2,3]
  //    temp = [2,3,1] !

  // temp = [3]
  //  temp = [3,1]
  //    temp = [3,1,2] !
  //  temp = [3,2] 
  //    temp = [3,2,1] !
};