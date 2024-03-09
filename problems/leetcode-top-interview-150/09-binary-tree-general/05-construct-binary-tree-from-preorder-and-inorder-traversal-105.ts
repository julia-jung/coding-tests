/** ⭐⭐
 * Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree 
 * and inorder is the inorder traversal of the same tree, construct and return the binary tree.
 */

import TreeNode from "../../../data-structures/binary-tree/TreeNode";

// preorder = [3,9,20,15,7], inorder = [9,3,15,20,7] -> output = [3,9,20,null,null,15,7]
// preorder = [-1], inorder = [-1] -> output = [-1]

// pre[0] is root
// find this from inorder
// then we know from 0 ~ until the index is left side and index ~ the end is right side of the tree
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  let p = 0;

  const helper = (start: number, end: number): TreeNode | null => {
    if (start > end) {
      return null;
    }

    const root = new TreeNode(preorder[p++]);
    const mid = map.get(root.val); // inorder index where the root is

    root.left = helper(start, mid - 1);
    root.right = helper(mid + 1, end);

    return root;
  }

  return helper(0, inorder.length - 1);
};

function buildTree2(preorder: number[], inorder: number[]): TreeNode | null {
  return build(0, 0, inorder.length - 1);  

  function build(preStart: number, inStart: number, inEnd: number) {
    if (preStart > preorder.length - 1 || inStart > inEnd) {
      return null;
    }

    const root = new TreeNode(preorder[preStart++]);
    let i = inStart;
    while (i <= inEnd && inorder[i] !== root.val) i++;
    // i is at root
    const leftSize = i - inStart;


    root.left = build(preStart, inStart, i - 1);
    root.right = build(preStart + leftSize, i + 1, inEnd);
    
    return root;
  }
};

function buildTree3(preorder: number[], inorder: number[]): TreeNode | null {
  let p = 0;
  let i = 0;
  return build();

  function build(val?: number) {
    if (inorder[i] === val) {
      return null;
    }

    const root = new TreeNode(preorder[p++]);
    root.left = build(root.val);
    i++;
    root.right = build(val);
    return root;
  }
};