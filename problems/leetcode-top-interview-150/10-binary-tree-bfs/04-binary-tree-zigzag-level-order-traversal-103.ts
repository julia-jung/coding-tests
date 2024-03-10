/** ⭐⭐
 * Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. 
 * (i.e., from left to right, then right to left for the next level and alternate between).
 */

import TreeNode from "../../../data-structures/binary-tree/TreeNode";

// root = [3,9,20,null,null,15,7] -> Output: [[3],[20,9],[15,7]]
// root = [1] -> Output: [[1]]
// root = [] -> Output: []

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const result = [];
  if (!root) return result;

  const queue = [root];
  let level = 1;
  while (queue.length) {
    const vals = [];
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (level % 2 === 0) {
        vals.unshift(node.val);
      } else {
        vals.push(node.val);
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(vals);
    level++;
  }
  
  return result;
};