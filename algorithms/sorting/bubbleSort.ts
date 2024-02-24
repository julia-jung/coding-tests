
/**
 * How to implement Bubble Sort
 * 
 * 1. walking through the array from the start, if the value is greater than the next element, swap elements
 * 2. after the first walking through, the last element will be the max value and can be excluded for the next iteration
 * 3. repeat until the array is sorted, which means no swap happens
 */
function bubbleSort(arr: number[]) {
  let isSorted = false;
  let lastUnsorted = arr.length - 1;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < lastUnsorted; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        isSorted = false;
      }
    }
    lastUnsorted--;
  }

  function swap(arr: number[], left: number, right: number) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  }
}