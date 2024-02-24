/** ⭐⭐
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that 
 * i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 */

threeSum([-1, 0, 1, 2, -1, -4]); // [[-1,-1,2],[-1,0,1]]
threeSum([0, 1, 1]); // []
threeSum([0, 0, 0]); // [0,0,0]

function threeSum(nums: number[]): number[][] {
  const output: number[][] = []; 
  // 1. sort first
  nums.sort((a, b) => a - b); 
  
  // 2. looping through the array
  for (let i = 0; i < nums.length - 2; i++) { 
    // to avoid same calculation, skip the same value
    if (i > 0 && nums[i] === nums[i - 1]) continue; 
    
    // 3. solve same as two sum problem
    let j = i + 1; 
    let k = nums.length - 1; 
    
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      
      if (sum < 0) { 
        j++;
      } else if (sum > 0) { 
        k--;
      } else {
        // 4. unlike two sum problem, there could be more than one pair
        // so after finding a pair, kepp continue the pointers to find more possible pairs
        output.push([nums[i], nums[j++], nums[k--]]);
        
        // 5. to avoid find the same pairs, skip the same values
        while (j < k && nums[j - 1] === nums[j]) j++; 
        while (j < k && nums[k + 1] === nums[k]) k--; 
      }
    }
  }

  return output; 
}

function threeSum2(nums: number[]): number[][] {
  const output = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; 
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      
      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        const triplet = [nums[i], nums[left++], nums[right--]];
        if (!output.some(item => item[0] === triplet[0] && item[1] === triplet[1] && item[2] === triplet[2])) {
          output.push(triplet);
        }
      }
    }
  }

  return output;
};


function threeSumFailed(nums: number[]): number[][] {
  const output = [];
  const memo = new Set();
  
  for (let i = 0; i < nums.length; i++) {
    const target = -nums[i];
    if (memo.has(target)) continue;
    
    const map = new Map();
    for (let j = 0; j < nums.length; j++) {
      if (j === i) continue;
      if (map.has(nums[j])) {
        const triplet = [nums[i], nums[j], map.get(nums[j])].sort();
        output.push(triplet);
      }
      map.set(target - nums[j], nums[j]);
    }
    memo.add(nums[i]);
  }

  let i = 0;
  let k = 1;
  output.sort();
  while (i < output.length && k < output.length) {
    if (output[i][0] === output[k][0] && output[i][1] === output[k][1] && output[i][2] === output[k][2]) {
      k++;
    } else {
      output[++i] = output[k++];
    }
  }

  return output.slice(0, i + 1);
};