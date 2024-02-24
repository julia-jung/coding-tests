/** ⭐
 * Given the root of a complete binary tree, return the number of the nodes in the tree.
 * According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.
 * Design an algorithm that runs in less than O(n) time complexity.
 */
import TreeNode from "./TreeNode";

// Solution 1: count all from left to right
function countNodes(root: TreeNode | null): number {
  if (!root) return 0;
  return 1 + countNodes(root.left) + countNodes(root.right);
};

// Solution 2: compare left, right subtree heights to decide if they are full binary tree
function countNodes2(root: TreeNode | null): number {
  const height = getHeight(root);
  if (height <= 1) return height;

  let leftCount = 0;
  let rightCount = 0;
  if (getHeight(root.right) === height - 1) {
    // If right-subtree has the same height with left-subtree
    leftCount = 2 ** (height - 1) - 1; // left-subtree is a full-tree of height "fullHeight - 1"
    rightCount = countNodes(root.right); // right-subtree count can get recursively
  } else {
    // means, last nodes on the last tree row is in the left-subtree
    leftCount = countNodes(root.left); // count of left-subtree can get recursively
    rightCount = 2 ** (height - 2) - 1; // right-subtree is a full-tree of height "fullHeight - 2"
  }
  
  return 1 + leftCount + rightCount;

  function getHeight(root: TreeNode | null): number {
    return root ? 1 + getHeight(root.left) : 0;
  }
};