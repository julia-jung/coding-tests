/**
 * Check whether input array has pair with target sum
 *
 * array1 = [1,2,3,4], sum = 8 -> should return false
 * array2 = [1,2,4,4], sum = 8 -> should return true
 */

// Naive -> Time Complexity = O(n^2) / Space Complexity = O(1)
function hasPairWihSumNestedLoop(array: number[], sum: number): boolean {
  if (array.length < 2) return false;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) return true;
    }
  }

  return false;
}

// Two pointer -> Time Complexity: O(n/2) / Space Complexity: O(n)
function hasPairWithSumTwoPointer(array: number[], sum: number): boolean {
  if (array.length < 2) return false;
  // start two pointers from both ends
  let left = 0;
  let right = array.length - 1;

  // check sum of two pointers moving one pointer towards middle until we check all the items
  while (left < right) {
    const currentSum = array[left] + array[right];

    if (currentSum === sum) {
      return true;
    } else if (currentSum < sum) {
      // move left pointer forward
      left++;
    } else {
      // move right pointer backward
      right--;
    }
  }

  // if we didn't found a pair, return false
  return false;
}

// Set -> Time Complexity: O(n) / Space Complexity: O(n)
function hasPairWithSet(array: number[], sum: number): boolean {
  if (array.length < 2) return false;

  const set = new Set<number>();

  // looping through an array, save complement in the Hash Set
  for (const item of array) {
    // if found the item from the set, meaning found pair for current item, return true
    if (set.has(item)) return true;

    // add current item's complement into the Hash Set
    set.add(sum - item);
  }

  // if we didn't found a pair, return false
  return false;
}
