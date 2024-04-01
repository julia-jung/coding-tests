
const pot = [
  [1, 0, 0, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 0, 0, 1, 1],
  [1, 0, 1, 1, 0],
  [1, 0, 0, 0, 0],
];
potPlanting(pot); // true

function potPlanting(pot) {
  let reached = false;
  
  let startRow = 0;
  let startCol = -1;

  for (let col = 0; col < pot[0].length; col++) {
    if (pot[startRow][col] === 0) {
        startCol = col;
    }
  }
  if (startCol < 0) return false;
    
  plant(startRow, startCol);
  
  return reached;

  function plant(row, col) {
    if (pot[row][col] === 0) {
      if (row === pot.length - 1) {
        reached = true;
        return;
      }

      pot[row][col] = 2;
      // top
      if (row > 0) {
        plant(row - 1, col);
      }
      // right
      if (col < pot[0].length - 1) {
        plant(row, col + 1);
      }
      // bottom
      if (row < pot.length - 1) {
        plant(row + 1, col);
      }
      if (col > 0) {
        plant(row, col - 1);
      }
    }
  }
};

