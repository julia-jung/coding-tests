/** ⭐
 * Given the root of a binary tree, invert the tree, and return its root.
 */

import TreeNode from "./TreeNode";

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  if (root.right || root.left) {
    const temp = root.right;
    root.right = root.left;
    root.left = temp;
    invertTree(root.right);
    invertTree(root.left);
  }

  return root;
};

// [2,1,3] => [2,3,1]
// [4,2,7,1,3,6,9] => [4,7,2,9,6,3,1]
// [] => []