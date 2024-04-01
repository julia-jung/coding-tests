/** ⭐⭐
 * Given the root of a binary search tree, and an integer k, 
 * return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
 */

import TreeNode from "../../../data-structures/binary-tree/TreeNode";

// root = [3,1,4,null,2], k = 1 -> Output: 1
// root = [5,3,6,2,4,null,null,1], k = 3 -> Output: 3

function kthSmallest(root: TreeNode | null, k: number): number {
  let smallest = Number.MAX_VALUE;
  
  const helper = (root: TreeNode | null) => {
    if (!root || k <= 0) return;
    
    helper(root.left);
    
    if (k > 0) {
      smallest = root.val;
      k--;
    }

    helper(root.right);
  }
  
  helper(root);
  return smallest;
};