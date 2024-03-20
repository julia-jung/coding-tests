/** ⭐⭐
 * You are given an m x n integer matrix matrix with the following two properties:
 *  - Each row is sorted in non-decreasing order.
 *  - The first integer of each row is greater than the last integer of the previous row.
 * Given an integer target, return true if target is in matrix or false otherwise.
 * You must write a solution in O(log(m * n)) time complexity.
 */

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3 -> Output: true
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13 -> Output: false

function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  const n = matrix[0].length;

  // 1. find the row
  let top = 0;
  let bottom = m - 1;
  let row = m === 1 ? 0 : -1;

  let left = 0;
  let right = n - 1;

  while (top <= bottom) {
    const midRow = top + Math.floor((bottom - top) / 2);

    if (target < matrix[midRow][left]) {
      bottom = midRow - 1;
    } else if (target > matrix[midRow][right]) {
      top = midRow + 1;
    } else {
      row = midRow;
      break;
    }
  }
  // 2. if failed to find the row, return false
  if (row < 0) return false;

  // 3. find the col
  while (left <= right) {
    const midCol = left + Math.floor((right - left) / 2);

    if (target === matrix[row][midCol]) {
      return true;
    } else if (target < matrix[row][midCol]) {
      right = midCol - 1;
    } else {
      left = midCol + 1;
    }
  }
  // 4. if failed to find the col, return false
  return false;
}
