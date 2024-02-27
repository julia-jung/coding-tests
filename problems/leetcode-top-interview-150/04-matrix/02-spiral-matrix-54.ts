/** ⭐⭐
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 */

spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]); // [1,2,3,6,9,8,7,4,5]
spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]); // [1,2,3,4,8,12,11,10,9,5,6,7]


function spiralOrder(matrix: number[][]): number[] {
  let output = [];
  const size = matrix.length * matrix[0].length;
  
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (output.length < size) {
    // to right
    for (let col = left; col <= right && output.length < size; col++) {
      output.push(matrix[top][col]);
    }
    top++; // make top down

    // to down
    for (let row = top; row <= bottom && output.length < size; row++) {
      output.push(matrix[row][right]);
    }
    right--; // make right end one step inside

    // to left
    for (let col = right; col >= left && output.length < size; col--) {
      output.push(matrix[bottom][col]);
    }
    bottom--; // make bottom up

    // to up
    for (let row = bottom; row >= top && output.length < size; row--) {
      output.push(matrix[row][left]);
    }
    left++; // make left one step inside
  }

  return output;
};

function spiralOrder2(matrix: number[][]): number[] {
  let output = [];
  
  let row = 0;
  let col = 0;
  let rowSize = matrix.length;
  let colSize = matrix[0].length;

  while (row < rowSize && col < colSize) {
    // to right
    for (let j = col; j < colSize; j++) {
      output.push(matrix[row][j]);
    }
    row++;

    // to down
    for (let i = row; i < rowSize; i++) {
      output.push(matrix[i][colSize - 1]);
    }
    colSize--;

    // to left
    if (row < rowSize) {
      for (let j = colSize - 1; j >= col; j--) {
        output.push(matrix[rowSize - 1][j]);
      }
    }
    rowSize--;

    // to up
    if (col < colSize) {
      for (let i = rowSize - 1; i >= row; i--) {
        output.push(matrix[i][col]);
      }
    }
    col++;
  }
  return output;
};