/** ⭐⭐
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
 * You may assume all four edges of the grid are all surrounded by water.
 */

/**
 * Input: grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
  -> Output: 1
 */

  /**
   * Input: grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
  -> Output: 3
   */

function numIslands(grid: string[][]): number {
  let islands = 0;

  const DFSMarking = (row: number, col: number) => {
    if (grid[row][col] === '1') { // if we are on the land,
      grid[row][col] = '2'; // mark where we visited
      // then go to each directions, do the same
      // top
      if (row > 0) DFSMarking(row - 1, col);

      // right
      if (row < grid.length - 1) DFSMarking(row + 1, col);

      // bottom
      if (col < grid[0].length - 1) DFSMarking(row, col + 1);

      // left
      if (col > 0) DFSMarking(row, col - 1);
    }
  }


  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length;  col++) {
      if (grid[row][col] === '1') { 
        DFSMarking(row, col);
        ++islands;
      }
    }
  }

  return islands;
};