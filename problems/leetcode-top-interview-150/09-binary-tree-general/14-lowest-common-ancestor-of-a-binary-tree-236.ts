/** ⭐⭐
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
 * According to the definition of LCA on Wikipedia: 
 *  “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants 
 *  (where we allow a node to be a descendant of itself).”
 */

import TreeNode from "../../../data-structures/binary-tree/TreeNode";

// root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1 -> output = 3
// root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4 -> output = 5

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	if (!root || root.val === p.val || root.val === q.val) return root;
  
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root; // if they found from each side, root is the common ancestor
  return left ?? right;  // if one of them are null, both found from one side
};