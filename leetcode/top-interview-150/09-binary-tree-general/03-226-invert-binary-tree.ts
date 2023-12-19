/** ⭐
 * Given the root of a binary tree, invert the tree, and return its root.
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