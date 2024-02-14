/** ⭐
 * Given the root of a binary tree and an integer targetSum, 
 * return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
 * A leaf is a node with no children.
 */

import TreeNode from "./TreeNode";

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;
  
  targetSum -= root.val;
  if (!root.left && !root.right) return targetSum === 0;
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};