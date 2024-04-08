/** ⭐⭐
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level)
 */

import TreeNode from '../../../data-structures/tree/TreeNode';

// root = [3,9,20,null,null,15,7] -> ouput = [[3],[9,20],[15,7]]
// root = [1] -> output = [[1]]
// root = [] -> output = []

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length) {
    const vals = [];
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      vals.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(vals);
  }

  return result;
}
