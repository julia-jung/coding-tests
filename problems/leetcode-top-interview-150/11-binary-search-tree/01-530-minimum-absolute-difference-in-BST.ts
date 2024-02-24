/** ⭐
 * Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.
 */
import TreeNode from "../09-binary-tree-general/TreeNode";

// find minimum difference between adjacent nodes traversing inorder
function getMinimumDifference(root: TreeNode | null): number {
  let min = 100000;
  let prev = null;

  return searchInorder(root);

  function searchInorder(node: TreeNode | null): number {
    if (!node) return min;

    searchInorder(node.left);

    if (prev !== null) {
      min = Math.min(min, node.val - prev);
    }
    prev = node.val;

    searchInorder(node.right);
    
    return min;
  }
};

// [236,104,701,null,227,null,911]
// inorder(104): prev = null -> 104
// inorder(227): prev = 104 -> 227 / min = 227 - 104 = 123
// inorder(236): prev = 227 -> 236 / min = 236 - 227 = 9
// inorder(701): prev = 236 -> 701 / min = 701 - 236 = 465
// inorder(911): prev = 701 -> 911 / min = 911 - 701 = 210


// Failed Case: [236,104,701,null,227,null,911]
function getMinimumDifferenceFailed(root: TreeNode | null): number {
  if (!root) return 0;
  
  const queue = [root];
  let min = 10000;
  
  while (queue.length > 0) {
    const node = queue.shift();
    if (node.left) {
      min = Math.min(node.val - node.left.val, min);
      queue.push(node.left);
    }
    if (node.right) {
      min = Math.min(node.right.val - node.val, min);
      queue.push(node.right);
    }
  }

  return min;
};


// post-order L(left) R(right) N(node)
// pre-order N L R
// in-order L N R (smallest-intermediate-largest)