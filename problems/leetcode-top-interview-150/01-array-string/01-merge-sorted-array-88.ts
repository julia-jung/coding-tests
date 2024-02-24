/** ⭐
* Merge nums1 and nums2 into a single array sorted in non-decreasing order.
* Do not return anything, modify nums1 in-place instead.
*	m = number of nums1 elements (nums1.length = m + n)
* n = nums2.length
*/
merge([1,2,3,0,0,0], 3, [2,5,6], 3); // [1,2,2,3,5,6]
merge([0], 0, [1], 1); // [1]

// Solution with 2-pointer
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // both pointer starts from the end
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1; // fill-in from the end 

  // merging and sorting together
  while (j >= 0) {
    // put bigger one and move the pointer
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
};

// Solution using array sort() method
function merge2(nums1: number[], m: number, nums2: number[], n: number): void {
	// 1. merge
  for (let i = m, j = 0; j < n; i++, j++) {
    nums1[i] = nums2[j];
  }
	// 2. sort
  nums1.sort((a, b) => a - b);
};
