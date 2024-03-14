/** ⭐⭐
 * Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.
 * A region is captured by flipping all 'O's into 'X's in that surrounded region.
 */

// Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
// -> Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]

// Input: board = [["X"]]
// -> Output: [["X"]]

/**
  Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  const boundaryDFS = (row: number, col: number) => {
    if (row < 0 || row > m - 1 || col < 0 || col > n - 1 || board[row][col] !== 'O') {
      return; 
    }
    // 2. change 'O' into '*'
    board[row][col] = '*';
    // 3. change all adjacent 'O's '*'
    // top
    boundaryDFS(row - 1, col);
    // right
    boundaryDFS(row, col + 1);
    // bottom
    boundaryDFS(row + 1, col);
    // left
    boundaryDFS(row, col - 1);
  }

  const m = board.length;
  const n = board[0].length;

  // 1. do the boundary check first
  for (let row = 0; row < m; row++) {
    boundaryDFS(row, 0); // left boundary
    boundaryDFS(row, n - 1); // right boundary
  }
  for (let col = 0; col < n; col++) {
    boundaryDFS(0, col); // top boundary
    boundaryDFS(m - 1, col); // bottom boundary
  }

  // 4. turn 'O' to 'X', '*' to 'O'
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
        board[row][col] = board[row][col] === '*' ? 'O' : 'X';
    }
  }
};