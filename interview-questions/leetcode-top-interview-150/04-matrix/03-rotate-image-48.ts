/** ⭐⭐
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
 * You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
 * DO NOT allocate another 2D matrix and do the rotation.
 */

rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]); // [[7,4,1],[8,5,2],[9,6,3]]
rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]); // [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

/**
  Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  let left: number = 0;
  let right: number = matrix.length - 1;

    while (left < right) {
      for (let i = 0; i < right - left; i++) {
        let top: number = left;
        let bottom: number = right;

        const topLeft = matrix[top][left + i];
        matrix[top][left + i] = matrix[bottom - i][left]; // top-left <- bottom-left
        matrix[bottom - i][left] = matrix[bottom][right - i]; // bottom-left <- bottom-right
        matrix[bottom][right - i] = matrix[top + i][right]; // bottom-right <- top-right
        matrix[top + i][right] = topLeft; // top-right <- top-left
      }

      left += 1;
      right -= 1;
    }
};

/**
  Do not return anything, modify matrix in-place instead.
*/
function rotate2(matrix: number[][]): void {
  for (let row = 0; row < Math.floor(matrix.length / 2); row++) {
    const end = matrix.length - 1 - row;
    
    for (let col = row; col < end; col++) {
      let curRow = row;
      let curCol = col;
      const top = matrix[curRow][curCol];
      
      // to right
      curRow = curCol;
      curCol = end;
      const right = matrix[curRow][curCol];
      matrix[curRow][curCol] = top;

      // to bottom
      curCol = end - curRow + row;
      curRow = end;
      const bottom = matrix[curRow][curCol];
      matrix[curRow][curCol] = right;

      // to left
      curRow = curCol;
      curCol = row;
      const left = matrix[curRow][curCol];
      matrix[curRow][curCol] = bottom;

      // to top
      matrix[row][col] = left;
    }
  }
};