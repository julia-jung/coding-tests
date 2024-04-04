/**
 * Merge two given sorted arrays
 */

console.log(mergeSortedArray2([0, 3, 4, 31], [4, 6, 30])); // [0,3,4,4,6,30,31]
console.log(mergeSortedArray2([], [4, 6, 30])); // [0,3,4,4,6,30,31]
console.log(mergeSortedArray2([], [])); // [0,3,4,4,6,30,31]

// Using JS built-in method -> Time complexity O(n + m) / Space complexity O(n + m)
function mergeSortedArray(arr1: number[], arr2: number[]): number[] {
  // check input
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  // return arr1.concat(arr2).sort((a, b) => a - b);
  // or
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

// Looping through both array -> Time complexity: O(n + m) / Space complexty: O(n + m)
function mergeSortedArray2(arr1: number[], arr2: number[]): number[] {
  // check input
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  const merged = [];

  let i = 0;
  let j = 0;
  // comparing elements in both array from start, push smaller into the output array
  // until one array is all consumed
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i++]);
    } else {
      merged.push(arr2[j++]);
    }
  }

  // whichever have not consumed yet, push all remaining items into the output array
  while (i < arr1.length) merged.push(arr1[i++]);
  while (j < arr2.length) merged.push(arr2[j++]);

  return merged;
}
