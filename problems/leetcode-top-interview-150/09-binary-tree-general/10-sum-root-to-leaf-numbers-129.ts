/** ⭐⭐
 * You are given the root of a binary tree containing digits from 0 to 9 only.
 * Each root-to-leaf path in the tree represents a number.
 * For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
 * Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.
 * A leaf node is a node with no children.
 */

import TreeNode from "../../../data-structures/binary-tree/TreeNode";

function sumNumbers(root: TreeNode | null): number {
  let sum = 0;
  if (!root) return 0;
  
  const helper = (root: TreeNode, parent: string) => {
    parent += root.val;
    if (!root.left && !root.right) {
      sum += Number(parent);
      return;
    }
    if (root.left) helper(root.left, parent);
    if (root.right) helper(root.right, parent);
  }

  helper(root, '');
  return sum;
};