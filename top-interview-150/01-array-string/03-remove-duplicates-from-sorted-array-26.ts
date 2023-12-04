/** ⭐
* remove the duplicates in-place such that each unique element appears only once. 
* The relative order of the elements should be kept the same. 
* Then return the number of unique elements in nums.
*/

// Solution 1: single loop
function removeDuplicates(nums: number[]): number {
	if (nums.length <= 1) return nums.length;

  let k = 0;
  for (let i = 1; i < nums.length; i++) {
    // compare with the element right before
		if (nums[i] !== nums[k]) {
			// if it's unique put in the next spot
      nums[++k] = nums[i];
    }
  }
  return k + 1; // i is index, so add 1 to get length
};

removeDuplicates([1,1,2]); // [1,2]
removeDuplicates([0,0,1,1,1,2,2,3,3,4]); // [0,1,2,3,4]

// Solution 2: use new Set()
function removeDuplicates2(nums: number[]): number {
  const withoutDuplicates = [...new Set(nums)];
  nums.length = 0;
  nums.push(...withoutDuplicates);
  return nums.length;
};