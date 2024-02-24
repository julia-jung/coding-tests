/**
 * How to implement Insertion Sort
 *  
 * 1. walk through the array from an index of 1
 * 2. compare with values in left(sorted) part starting from index-1
 * 3. if the left data is bigger than the value, slide it to one step right
 * 4. if the left data is smaller than the value, push the value in the right position
 */
function insertionSort(arr: number[]) {
  for(var i = 1; i < arr.length; i++) {
    insert(arr, i - 1, arr[i]);   
  }
  
  function insert(arr: number[], rightIndex: number, value: number) {
    for(var j = rightIndex; j >= 0 && arr[j] > value; j--) {
        arr[j + 1] = arr[j];
    }   
    arr[j + 1] = value; 
  };
};
