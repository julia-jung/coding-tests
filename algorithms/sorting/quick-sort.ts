// Split array into 2 part finding random pivot's position in ordered array
function quickSort(arr: number[], left = 0, right = arr.length - 1): number[] {
  if (left >= right) return arr;

  // choose pivot as right indexed value
  const pivot = arr[right];
  // split array into 2 part, left part to be all with smaller elements than pivot, right part all with grater elements than pivot
  const partitionIndex = partition(arr, pivot, left, right);

  // repeat quickSort with both part
  quickSort(arr, left, partitionIndex - 1);
  quickSort(arr, partitionIndex + 1, right);

  return arr;

  function partition(
    arr: number[],
    pivot: number,
    left: number,
    right: number
  ) {
    let partitionIndex = left;

    for (let i = left; i < right; i++) {
      // fill in the smaller elements than pivot from the left start
      if (arr[i] < pivot) {
        swap(arr, i, partitionIndex++);
      }
    }
    // when smaller elements are all found and filled up, put pivot next to them
    swap(arr, right, partitionIndex);

    return partitionIndex;
  }

  function swap(arr: number[], left: number, right: number) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  }
}

function quickSort2(arr: number[]) {
  // 2. set two pointers from both end
  sort(arr, 0, arr.length - 1);
  /**
   * How to implement Quick Sort
   *
   */
  function sort(arr: number[], left: number, right: number) {
    if (left >= right) return;

    // 1. randomly pick the pivot elements(mostly in the middle)
    const pivot = Math.floor((left + right) / 2);
    const index = partition(arr, left, right, pivot);

    // 7. seperate the array with two parts (start ~ left pointer / right pointer ~ the end)
    // 8. repeat the whole process for both parts
    sort(arr, left, index - 1);
    sort(arr, index, right);

    function partition(
      arr: number[],
      left: number,
      right: number,
      pivot: number
    ) {
      // 6. repeat moving pointers and swapping while left pointer is before the right pointer
      // move all elements samller than pivots to it's left and larger elements to it's right
      while (left <= right) {
        // 3. move the left pointer forward until you find the value which is greater than the pivot element
        while (arr[left] < arr[pivot]) left++;
        // 4. move the right pointer backward until you find the value which is smaller than the pivot element
        while (arr[right] > arr[pivot]) right--;

        // 5. then swap two elements at the pointers
        if (left <= right) {
          swap(arr, left, right);
          left++;
          right--;
        }
      }
      return left;
    }

    function swap(arr: number[], left: number, right: number) {
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    }
  }
}

console.log(quickSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));
// 0, 99, 44, 6, 2, 1, 5, 63, 87, 283, 4
// 0, 2, 1, 4, 99, 44, 5, 63, 87, 283, 6
