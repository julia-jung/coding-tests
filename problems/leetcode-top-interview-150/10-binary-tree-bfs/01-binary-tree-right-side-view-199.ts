/** ⭐⭐
 * Given the root of a binary tree, imagine yourself standing on the right side of it, 
 * return the values of the nodes you can see ordered from top to bottom.
 */

import TreeNode from "../../../data-structures/binary-tree/TreeNode";

// root = [1,2,3,null,5,null,4] -> output = [1,3,4] 
// root = [1,null,3] -> output = [1,3]
// root = [] -> output = []

// for both left and right node, get their right views seperately and combine
function rightSideView(root: TreeNode | null): number[] {
  if (!root) return [];
  
  let rights = [root.val];
  
  const right = rightSideView(root.right);   
  const left = rightSideView(root.left);

  for (let i = 0; i < Math.max(right.length, left.length); i++) {
    if (right[i] !== undefined) {
      rights.push(right[i]);
    } else {
      rights.push(left[i]);
    }
  }

  return rights;
};

// using queue shifting node and then pushing all child nodes in the same level left to right 
// and polling the last in the queue for every level
function rightSideView2(root: TreeNode | null): number[] {
  const rights: number[] = [];
  const queue = [root];

  while (queue.length) {
    const len = queue.length;
    const farRightNode = queue[len-1];
    farRightNode && rights.push(farRightNode.val)
    
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      
      node?.left && queue.push(node.left);
      node?.right && queue.push(node.right);
    }
  }

  return rights;
};