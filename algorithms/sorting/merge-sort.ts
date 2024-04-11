// Split the array into half and merge them comparing the values
function mergeSort(arr: number[]): number[] {
  if (arr.length < 2) return arr;

  // split array in into right and left
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));

  function merge(left: number[], right: number[]): number[] {
    let i = 0;
    let j = 0;
    let merged = [];
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        merged.push(left[i++]);
      } else {
        merged.push(right[j++]);
      }
    }

    while (i < left.length) merged.push(left[i++]);
    while (j < right.length) merged.push(right[j++]);

    return merged;
  }
}

function mergeSort2(arr: number[]) {
  let temp = [];
  sort(arr, temp, 0, arr.length - 1);
  /**
   * How to implement Merge Sort
   *
   * 1. separte the array into two parts
   * 2. mergeSort each part recursively
   * 3. then merge two parts into a new array comparing each elements
   */
  function sort(
    arr: number[],
    temp: number[],
    leftStart: number,
    rightEnd: number
  ) {
    if (leftStart >= rightEnd) return;

    const middle = (leftStart + rightEnd) / 2;
    sort(arr, temp, leftStart, middle);
    sort(arr, temp, middle + 1, rightEnd);
    mergeHalves(arr, temp, leftStart, rightEnd);

    function mergeHalves(
      arr: number[],
      temp: number[],
      leftStart: number,
      rightEnd: number
    ) {
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
}

console.log(mergeSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));
