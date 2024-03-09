const maze = [
  [1, 0, 0, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 0, 0, 1, 1],
  [1, 0, 1, 1, 0],
  [1, 0, 0, 0, 0],
];
solveMaze(maze, 0, 1, 3, 4); // true

function solveMaze(maze, startRow, startCol, destRow, destCol) {
  let solved = false;
  
  walk(startRow, startCol);
  console.log(maze);
  return solved;

  function walk(row, col) {  
    if (maze[row][col] === 0) {
      if (row === destRow && col === destCol) {
        solved = true;
        return;
      }

      maze[row][col] = 2;
      // top
      if (row > 0) {
        walk(row - 1, col);
      }
      // right
      if (col < maze[0].length - 1) {
        walk(row, col + 1);
      }
      // bottom
      if (row < maze.length - 1) {
        walk(row + 1, col);
      }
      // left
      if (col > 0) {
        walk(row, col - 1);
      }
    }
  }
};

