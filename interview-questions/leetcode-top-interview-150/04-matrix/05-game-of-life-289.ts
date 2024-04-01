/** ⭐⭐
 * According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
 * The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):
 *  - Any live cell with fewer than two live neighbors dies as if caused by under-population.
 *  - Any live cell with two or three live neighbors lives on to the next generation.
 *  - Any live cell with more than three live neighbors dies, as if by over-population.
 *  - Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
 * 
 * The next state is created by applying the above rules simultaneously to every cell in the current state, 
 * where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.
 */

gameOfLife([[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]); // [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
gameOfLife([[1, 1], [1, 0]]); // [[1,1],[1,1]]

/**
Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
  const prevState = [...board.map(b => ([...b]))];
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      const alive = countNeighbors(prevState, row, col);
      if (board[row][col] === 1 && (alive < 2 || alive > 3)) {
        board[row][col] = 0;
      }
      if (board[row][col] === 0 && alive === 3) {
        board[row][col] = 1;
      }
    }
  }

  function countNeighbors(board: number[][], row: number, col: number): number {
    let alive = 0;

    const rowStart = Math.max(row - 1, 0);
    const rowEnd = Math.min(row + 1, board.length - 1);
    const colStart = Math.max(col - 1, 0);
    const colEnd = Math.min(col + 1, board[0].length - 1);
    console.log(rowStart, rowEnd, colStart, colEnd);
    for (let i = rowStart; i <= rowEnd; i++) {
      for (let j = colStart; j <= colEnd; j++) {
        if (i !== row || j !== col) {
          if (board[i][j] === 1) alive++;
        }
      }
    }
    
    return alive;
  }
};