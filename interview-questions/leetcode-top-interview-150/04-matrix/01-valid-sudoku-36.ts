/** ⭐⭐
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 *  Each row must contain the digits 1-9 without repetition.
 *  Each column must contain the digits 1-9 without repetition.
 *  Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 * Note:
 *  A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 *  Only the filled cells need to be validated according to the mentioned rules.
 */

isValidSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]); // true
isValidSudoku([
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]); // false

function isValidSudoku(board: string[][]): boolean {
  for (let row = 0; row < 9; row++) {
    const rows = new Set();
    const cols = new Set();
    const boxes = new Set();
    
    for (let col = 0; col < 9; col++) {
      if (board[row][col] !== '.' && rows.has(board[row][col])) return false;
      rows.add(board[row][col]);

      if (board[col][row] !== '.' && cols.has(board[col][row])) return false;
      cols.add(board[col][row]);

      const boxRow = 3 * Math.floor(row / 3) + Math.floor(col / 3);
      const boxCol = 3 * Math.floor(row % 3) + Math.floor(col % 3);
      if (board[boxRow][boxCol] !== '.' && boxes.has(board[boxRow][boxCol])) return false;
      boxes.add(board[boxRow][boxCol]);
    }
  }
  
  return true;
};