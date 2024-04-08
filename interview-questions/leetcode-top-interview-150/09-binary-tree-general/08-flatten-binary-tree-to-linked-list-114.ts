/** ⭐⭐
 * Given the root of a binary tree, flatten the tree into a "linked list":
 * The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list
 * and the left child pointer is always null.
 * The "linked list" should be in the same order as a pre-order traversal of the binary tree.
 */

import TreeNode from '../../../data-structures/tree/TreeNode';

// root = [1,2,5,3,4,null,6] -> output = [1,null,2,null,3,null,4,null,5,null,6]
// root = [] -> output = []
// root = [0] -> output = [0]

/**
  Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  if (!root) return null;

  const originalLeft = root.left;
  flatten(originalLeft);
  const originalRight = root.right;
  flatten(originalRight);

  root.right = originalLeft;
  root.left = null;

  // find the leaf (right) node
  let leaf = root;
  while (leaf.right) {
    leaf = leaf.right;
  }
  leaf.right = originalRight;
}
