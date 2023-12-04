/** ⭐
* Remove all occurrences of val in nums in-place
* Change nums with first k elements not equal to val
* Then return the number of elements in nums which are not equal to val
*/

// Solution 1: In place insertion
function removeElement(nums: number[], val: number): number {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k++] = nums[i];
    }
  }
  return k;
};

removeElement([3,2,2,3], 3); // [2,2,2,3]
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2); // [0,1,3,0,4,0,4,2]

// Solution 2: 2-pointer sorting
function removeElement2(nums: number[], val: number): number {
	// start from both end
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
		// move to the right-end if it needs to be removed and move right-pointer ahead
    if (nums[left] === val) {
      nums[left] = nums[right];
      right--;
    } else {
      left++;
    }
  }
  return left;
};

removeElement2([3,2,2,3], 3); // [2,2,2,3]
removeElement2([0,1,2,2,3,0,4,2], 2); // [0,1,4,0,3,0,4,2]