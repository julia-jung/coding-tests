function quickSort(arr: number[]) {
  sort(arr, 0, arr.length - 1);
  /**
   * How to implement Quick Sort
   *
   * 1. randomly pick the pivot elements(mostly in the middle)
   * 2. set two pointers(left pointer from the start of the array and right pointer at the end of the array)
   * 3. move the left pointer forward until you find the value which is greater than the pivot element
   * 4. move the right pointer backward until you find the value which is smaller than the pivot element
   * 5. then swap two elements at the pointers
   * 6. repeat moving pointers and swapping while left pointer is before the right pointer
   * 7. seperate the array with two parts (start ~ left pointer / right pointer ~ the end)
   * 8. repeat the whole process for both parts
   */
  function sort(arr: number[], left: number, right: number) {
    if (left >= right) return;

    const pivot = arr[Math.floor((left + right) / 2)];
    const index = partition(arr, left, right, pivot);

    sort(arr, left, index - 1);
    sort(arr, index, right);

    function partition(
      arr: number[],
      left: number,
      right: number,
      pivot: number
    ) {
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

    function swap(arr: number[], left: number, right: number) {
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    }
  }
}
