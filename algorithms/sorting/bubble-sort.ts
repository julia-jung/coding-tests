// Bubble up the largest number
function bubbleSort(arr: number[]): number[] {
  let isSorted = false;
  let lastUnsorted = arr.length - 1;

  // 3. repeat until the array is sorted, which means no swap happens
  while (!isSorted) {
    isSorted = true;
    // 1. walking through the array from the start,
    //   if the value is greater than the next element, swap elements
    for (let i = 0; i < lastUnsorted; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        isSorted = false;
      }
    }
    // 2. after the first walking through,
    //    the last element will be the max value and can be excluded for the next iteration
    lastUnsorted--;
  }

  function swap(arr: number[], left: number, right: number) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  }

  return arr;
}

function bubbleSort2(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;

  function swap(arr: number[], left: number, right: number) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  }
}

console.log(bubbleSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));
console.log(bubbleSort2([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));
