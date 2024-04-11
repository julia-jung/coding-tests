// assum the left part is sorted and find the spot in the left part where current item should be in
function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    let j = i - 1;
    while (arr[j] > cur && j >= 0) {
      arr[j + 1] = arr[j--];
    }
    arr[j + 1] = cur;
  }
  return arr;
}

function insertionSort2(arr: number[]): number[] {
  // 1. walk through the array from an index of 1
  for (let i = 1; i < arr.length; i++) {
    // 2. compare with values in left(sorted) part starting from index-1
    insert(arr, i - 1, arr[i]);
  }
  return arr;

  function insert(arr: number[], rightIndex: number, value: number) {
    // 3. if the left data is bigger than the value, slide it to one step right
    let j = rightIndex;
    while (j >= 0 && arr[j] > value) {
      arr[j + 1] = arr[j];
      j--;
    }
    // 4. if the left data is smaller than the value, push the value in the right position
    arr[j + 1] = value;
  }
}

// using splice and unshift
function insertionSort3(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      arr.unshift(arr.splice(i, 1)[0]);
    } else {
      for (let j = 1; j < i; j++) {
        if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
          arr.splice(j, 0, arr.splice(i, 1)[0]);
        }
      }
    }
  }
  return arr;
}

console.log(insertionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));
