/** ⭐⭐
 * Given a n * n matrix grid of 0's and 1's only. We want to represent grid with a Quad-Tree.
 * Return the root of the Quad-Tree representing grid.
 *
 * A Quad-Tree is a tree data structure in which each internal node has exactly four children. Besides, each node has two attributes:
 *  - val: True if the node represents a grid of 1's or False if the node represents a grid of 0's.
 *    Notice that you can assign the val to True or False when isLeaf is False, and both are accepted in the answer.
 *  - isLeaf: True if the node is a leaf node on the tree or False if the node has four children.
 *
 * We can construct a Quad-Tree from a two-dimensional area using the following steps:
 *  - If the current grid has the same value (i.e all 1's or all 0's) set isLeaf True
 *    and set val to the value of the grid and set the four children to Null and stop.
 *  - If the current grid has different values, set isLeaf to False and set val to any value
 *    and divide the current grid into four sub-grids as shown in the photo.
 *  - Recurse for each of the children with the proper sub-grid.
 */

// Definition for node.
class QuadTreeNode {
  val: boolean;
  isLeaf: boolean;
  topLeft: QuadTreeNode | null;
  topRight: QuadTreeNode | null;
  bottomLeft: QuadTreeNode | null;
  bottomRight: QuadTreeNode | null;
  constructor(
    val?: boolean,
    isLeaf?: boolean,
    topLeft?: QuadTreeNode,
    topRight?: QuadTreeNode,
    bottomLeft?: QuadTreeNode,
    bottomRight?: QuadTreeNode
  ) {
    this.val = val === undefined ? false : val;
    this.isLeaf = isLeaf === undefined ? false : isLeaf;
    this.topLeft = topLeft === undefined ? null : topLeft;
    this.topRight = topRight === undefined ? null : topRight;
    this.bottomLeft = bottomLeft === undefined ? null : bottomLeft;
    this.bottomRight = bottomRight === undefined ? null : bottomRight;
  }
}

// Input: grid = [[0,1],[1,0]] -> Output: [[0,1],[1,0],[1,1],[1,1],[1,0]]
// Input: grid = [[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]
// -> Output: [[0,1],[1,1],[0,1],[1,1],[1,0],null,null,null,null,[1,0],[1,0],[1,1],[1,1]]

function construct(grid: number[][]): QuadTreeNode | null {
  if (!grid.length) return null;
  return helper(0, 0, grid.length);

  function helper(startRow: number, startCol: number, length: number) {
    // 1. check if it's leaf node
    if (isLeafNode(startRow, startCol, length)) {
      // 2. if it is, return node
      return new QuadTreeNode(Boolean(grid[startRow][startCol]), true);
    }

    // 3. if not, get four children
    const topLeft = helper(startRow, startCol, length / 2);
    const topRight = helper(startRow, startCol + length / 2, length / 2);
    const bottomLeft = helper(startRow + length / 2, startCol, length / 2);
    const bottomRight = helper(
      startRow + length / 2,
      startCol + length / 2,
      length / 2
    );

    // then return node with children
    const node = new QuadTreeNode(
      false,
      false,
      topLeft,
      topRight,
      bottomLeft,
      bottomRight
    );

    return node;
  }

  function isLeafNode(startRow: number, startCol: number, length: number) {
    const set = new Set<number>();

    for (let row = startRow; row < startRow + length; row++) {
      for (let col = startCol; col < startCol + length; col++) {
        set.add(grid[row][col]);
        if (set.size > 1) return false;
      }
    }

    return true;
  }
}
