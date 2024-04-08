/** ⭐⭐
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 *
 * A valid BST is defined as follows:
 *  - The left subtree of a node contains only nodes with keys less than the node's key.
 *  - The right subtree of a node contains only nodes with keys greater than the node's key.
 *  - Both the left and right subtrees must also be binary search trees.
 */

import TreeNode from '../../../data-structures/tree/TreeNode';

// root = [2,1,3] -> Output: true
// root = [5,1,4,null,null,3,6] -> Output: false

function isValidBST(root: TreeNode | null): boolean {
  let isValid = true;

  const validate = (root: TreeNode | null, min: number, max: number) => {
    if (!root || !isValid) return;

    isValid = root.val > min && root.val < max;

    validate(root.left, min, Math.min(max, root.val));
    validate(root.right, Math.max(min, root.val), max);
  };

  validate(root, -Number.MAX_VALUE, Number.MAX_VALUE);
  // Number.MIN_VALUE is minimum value of positive number (nearly zero)
  // 0 < Number.MIN_VALUE
  return isValid;
}
