/** ⭐⭐
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. 
 * The same letter cell may not be used more than once.
 */

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED" -> Output: true
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE" -> Output: true
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB" -> Output: false

function exist(board: string[][], word: string): boolean {
  const m = board.length;
  const n = board[0].length;
  
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (board[row][col] === word[0]) {
        if (backtrack(row, col)) return true;
      }
    }
  }
  return false;

  function backtrack(row: number, col: number, index: number = 0): boolean {
    if (row < 0 || row > m - 1 || col < 0 || col > n - 1 || board[row][col] !== word[index]) return false;
    if (index === word.length - 1) return true;

    const cell = board[row][col];
    board[row][col] = '*'; // mark as we visited
    
    if (
      backtrack(row - 1, col, index + 1) // top
      || backtrack(row, col + 1, index + 1) // right
      || backtrack(row + 1, col, index + 1) // bottom
      || backtrack(row, col - 1, index + 1)  // left
    ) {
      return true;
    }

    board[row][col] = cell; // convert cell into the original value
    return false;
  }
};