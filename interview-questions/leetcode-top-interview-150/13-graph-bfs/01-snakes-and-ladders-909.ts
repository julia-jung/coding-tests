/** ⭐⭐
 * You are given an n x n integer matrix board where the cells are labeled from 1 to n2 in a Boustrophedon style 
 *  starting from the bottom left of the board (i.e. board[n - 1][0]) and alternating direction each row.
 * You start on square 1 of the board. In each move, starting from square curr, do the following:
 *  Choose a destination square next with a label in the range [curr + 1, min(curr + 6, n2)].
 *  This choice simulates the result of a standard 6-sided die roll: i.e., there are always at most 6 destinations, 
 *    regardless of the size of the board.
 *  If next has a snake or ladder, you must move to the destination of that snake or ladder. Otherwise, you move to next.
 *  The game ends when you reach the square n2.
 *  A board square on row r and column c has a snake or ladder if board[r][c] != -1. 
 *    The destination of that snake or ladder is board[r][c]. Squares 1 and n2 do not have a snake or ladder.
 * 
 * Note that you only take a snake or ladder at most once per move. 
 * If the destination to a snake or ladder is the start of another snake or ladder, you do not follow the subsequent snake or ladder.
 * 
 * For example, suppose the board is [[-1,4],[-1,3]], and on the first move, your destination square is 2. 
 * You follow the ladder to square 3, but do not follow the subsequent ladder to 4.
 * 
 * Return the least number of moves required to reach the square n2. If it is not possible to reach the square, return -1.
 */

// Input: board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]
// -> Output: 4 (1 -> 2 (15) -> 17 (13) -> 14 (35) -> 36)

// Input: board = [[-1,-1],[-1,3]]
// -> Output: 1

function snakesAndLadders(board: number[][]): number {
  const n = board.length;
  const cells = new Array(n * (n + 1)); // every cells in the board in order
  
  // 1. build cells
  let i = 1;
  let cols = [...new Array(n).keys()];
  for (let row = n - 1; row >= 0; row--) {
    for (const col of cols) {
      cells[i++] = board[row][col]; 
    }
    cols = cols.reverse();
  }
  
  // 2. save min moves for each cell in dist array
  const dist = new Array(n * (n + 1)).fill(-1); // min number of moves to reach each cell
  dist[1] = 0; // first cell doesn't need any moves
  const queue = [1]; // start from the first step

  while (queue.length) {
    const curCell = queue.shift();

    // update every possible next cell's dist from current cell
    for (let next = curCell + 1; next <= Math.min(curCell + 6, n * n); next++) {
      // if the value is not -1, go to cell equivalent to the value
      const destination = cells[next] !== -1 ? cells[next] : next;
      // if destination has never been visited, set it's dist as current cell's dist + 1 and move to the destination by pushing it to queue
      if (dist[destination] === -1) {
        dist[destination] = dist[curCell] + 1;
        queue.push(destination);
      }
    }
  }

  // 3. return min move for the last cell
  return dist[n * n];
};