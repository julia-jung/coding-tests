/** ⭐
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 * Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 */

import TreeNode from "./TreeNode";

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// [1,2,3], [1,2,3] => true
// [1,2], [1,null,2] => false
// [1,2,1], [1,1,2] => false