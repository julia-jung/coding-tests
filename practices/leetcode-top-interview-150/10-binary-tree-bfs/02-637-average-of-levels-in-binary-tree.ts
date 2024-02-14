/** ⭐
 * Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. 
 * Answers within 10-5 of the actual answer will be accepted.
 */
import TreeNode from "../09-binary-tree-general/TreeNode";

// Solution 1: push nodes into queue iterating each level
function averageOfLevels(root: TreeNode | null): number[] {
  const result = [];
  if (!root) return result;

  const queue = [root];
  
  while (queue.length > 0) {
    const levelSize = queue.length;
    let levelSum = 0;
    
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift(); // polling first node from the queue
      levelSum += node.val;
      
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(levelSum / levelSize);
  }
  return result;
};

// Solution 2: convert a whole tree into number array then calculate avg for each level
function averageOfLevels2(root: TreeNode | null): number[] {
  if (!root) return [];

  let i = 0;
  const arr: number[][] = [];
  pushVal(i, root);

  return arr.map((vals) => {
    const sum = vals.reduce((acc, cur) => acc + cur, 0);
    const count = vals.length;
    return Number((sum / count).toFixed(5));
  });

  function pushVal(i: number, node: TreeNode): void {
    if (!node) return;
    arr[i] ? arr[i].push(node.val) : arr[i] = [node.val];
    
    pushVal(i + 1, node.left);
    pushVal(i + 1, node.right);
  }
};