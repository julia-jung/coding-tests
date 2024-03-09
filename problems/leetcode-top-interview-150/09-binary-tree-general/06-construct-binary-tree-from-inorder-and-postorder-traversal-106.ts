/** ⭐⭐
 * Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree 
 * and postorder is the postorder traversal of the same tree, construct and return the binary tree.
 */

import TreeNode from "../../../data-structures/binary-tree/TreeNode";


function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  // last index of postorder is root
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  const helper = (iStart: number, iEnd: number, p: number): TreeNode | null => {
    if (iStart > iEnd) return null;

    const root = new TreeNode(postorder[p--]);
    const iMid = map.get(root.val);
    const rightSize = iEnd - iMid;

    root.left = helper(iStart, iMid - 1, p - rightSize); // to left node of postorder, must subtract right node size
    root.right = helper(iMid + 1, iEnd, p);

    return root;
  }

  return helper(0, inorder.length - 1, postorder.length - 1);
};

// Failed: Same as with preorder + inorder problem solution
function buildTreeFailed(inorder: number[], postorder: number[]): TreeNode | null {
  // last index of postorder is root
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  let p = postorder.length - 1;

  const helper = (start: number, end: number): TreeNode | null => {
    if (start > end || p < 0) return null;

    const root = new TreeNode(postorder[p--]);
    const mid = map.get(root.val);

    root.left = helper(start, mid - 1);
    root.right = helper(mid + 1, end);

    return root;
  }

  return helper(0, inorder.length - 1);
};