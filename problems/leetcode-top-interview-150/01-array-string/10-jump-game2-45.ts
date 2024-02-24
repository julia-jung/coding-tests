/** ⭐⭐
 * You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].
 * Each element nums[i] represents the maximum length of a forward jump from index i. 
 * In other words, if you are at nums[i], you can jump to any nums[i + j] where:
 *  0 <= j <= nums[i] and
 *  i + j < n 
 * Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].
 */

jump([2, 3, 1, 1, 4]); // 2
jump([2, 3, 0, 1, 4]); // 2
jump([0]); // 0
jump([1, 2, 1, 1, 1]); // 3

// Greedy + BFS
function jump(nums: number[]): number {
  let jumps = 0;
  let curEnd = 0;
  let curFarthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    // For each index, calculate the max position we can go further
    curFarthest = Math.max(i + nums[i], curFarthest);
    // If we can go beyound the end point, return jumps adding final one more jump
    if (curFarthest >= nums.length - 1) {
      return jumps + 1;
    }
    // if we reached the current furthest point that we can jump in
    // make another jump(to the point having the current furthest) and update the current end point into the current furthest point
    if (i === curEnd) {
      jumps++;
      curEnd = curFarthest;
    }
  }
  return jumps;
};

// Failed (Time limit exceeded)
function jumpFailed(nums: number[]): number {
  if (nums.length === 1) return 0;
  
  let jump = 0;
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === 0) return -1;
    
    let maxReach = i + nums[i]; // 1, 2, 3
    if (maxReach >= nums.length - 1) {
      return jump + 1;
    }

    i += 1; // 1
    let j = i;
    while (j < maxReach) {
      const reachable = j + nums[j];
      if (reachable > maxReach) {
        maxReach = reachable;
        i = j;
      }
    }
    jump += 1; 
  }
};