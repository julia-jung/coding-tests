/** ⭐⭐
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
 * You must do it in place.
 */

setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]]); // [[1,0,1],[0,0,0],[1,0,1]]
setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]); // [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

/**
  Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const rows = new Set();
  const cols = new Set();
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        rows.add(row);
        cols.add(col);
      }
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (rows.has(row) || cols.has(col)) matrix[row][col] = 0;
    }
  }
};