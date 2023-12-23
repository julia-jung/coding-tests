/** ⭐
 * Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
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

// Solution: Find mid first for the root node and do recursion for both left and right subtree
function sortedArrayToBST(nums: number[]): TreeNode | null {
  return createBST(0, nums.length - 1);

  function createBST(left: number, right: number): TreeNode | null {
    if (left > right) return null;

    const mid = left + Math.ceil((right - left) / 2);
    const root = new TreeNode(nums[mid]);
    
    root.left = createBST(left, mid - 1);
    root.right = createBST(mid + 1, right);

    return root;
  }
};

sortedArrayToBST([-10, -3, 0, 5, 9]); // [0,-3,9,-10,null,5]
sortedArrayToBST([1, 3]); // [3,1]
