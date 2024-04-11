// Find the smallest item and fill up from the start
function selectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let min = Number.MAX_VALUE;
    let minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
  return arr;

  function swap(arr: number[], left: number, right: number) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  }
}

console.log(selectionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));
