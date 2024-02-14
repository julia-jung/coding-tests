/** ⭐
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
 */

import TreeNode from "./TreeNode";

// Solution: Same strategy with 100. Same Tree but compare opposite positions
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return false;
  return mirror(root.left, root.right);

  function mirror(left: TreeNode | null, right: TreeNode | null): boolean {
    if (!left && !right) return true;
    if (!left || !right) return false;
    return left.val === right.val && mirror(left.left, right.right) && mirror(left.right, right.left);
  }
};

// [1,2,2,3,4,4,3] => true
// [1,2,2,null,3,null,3] => false