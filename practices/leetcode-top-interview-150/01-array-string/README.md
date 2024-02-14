## Sorting Algorithms

### Quick Sort

How to implement:

1. randomly pick the pivot elements(mostly in the middle)
2. set two pointers(left pointer from the start of the array and right pointer at the end of the array)
3. move the left pointer forward until you find the value which is greater than the pivot element
4. move the right pointer backward until you find the value which is smaller than the pivot element
5. then swap two elements at the pointers
6. repeat moving pointers and swapping while left pointer is before the right pointer
7. seperate the array with two parts (start ~ left pointer / right pointer ~ the end)
8. repeat the whole process for both parts

```
function merge(arr: number[]) {
  quickSort(arr, 0, arr.length - 1);
}

function quickSort(arr: number[], left: number, right: number) {
  if (left >= right) return;

  conts pivot = arr[(left + right) / 2];
  const index = partition(arr, left, right, pivot);

  quickSort(arr, left, index - 1);
  quickSort(arr, index, right);

  function partition(arr: number[], left: number, right: number) {
    while (left <= right) {
      while (arr[left] < pivot) left++;
      while (arr[right] > pivot) right--;

      if (left <= right) {
        swap(arr, left, right);
        left++;
        right--;
      }
    }
    return left;
  }

  function swap(arr: number[], left: number; right: number) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  }
}

```

### Merge Sort

How to implement:

1. separte the array into two parts
2. mergeSort each part recursively
3. then merge two parts into a new array comparing each elements

```
function merge(arr: number[]) {
  let temp = [];
  mergeSort(arr, temp, 0, arr.length - 1);
}
function mergeSort(arr: number[], temp: number[], leftStart: number, rightEnd: number) {
  if (leftStart >= rightEnd) return;

  const middle = (leftStart + rightEnd) / 2;
  mergeSort(arr, temp, leftStart, middle);
  mergeSort(arr, temp, middle + 1, rightEnd);
  mergeHalves(arr, temp, leftStart, rightEnd);

  function mergeHalves(arr: number[], temp: number[], leftStart: number, rightEnd: number) {
    const leftEnd = (leftStart + rightEnd) / 2;
    const rightStart = leftEnd + 1;

    let left = leftStart;
    let right = rightStart;
    let index = 0;

    while (left <= leftEnd && right <= rightEnd) {
        temp[index++] = arr[left] <= arr[right] ? arr[left++] : arr[right++];
    }

    while (left <= leftEnd) temp[index++] = arr[left++];
    while (right <= rightEnd) temp[index++] = arr[right++];

    for (let i = leftStart; i < rightEnd - leftStart + 1; i++) {
      arr[i] = temp[i];
    }
  }
}
```

### Bubble Sort

How to implement:

1. walking through the array from the start, if the value is greater than the next element, swap elements
2. after the first walking through, the last element will be the max value and can be excluded for the next iteration
3. repeat until the array is sorted, which means no swap happens

```
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
}
```
