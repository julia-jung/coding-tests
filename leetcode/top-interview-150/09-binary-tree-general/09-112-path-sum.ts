/** ⭐
 * Given the root of a binary tree and an integer targetSum, 
 * return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
 * A leaf is a node with no children.
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}


function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;
  
  targetSum -= root.val;
  if (!root.left && !root.right) return targetSum === 0;
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};