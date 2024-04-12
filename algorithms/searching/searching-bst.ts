import TreeNode from '../../data-structures/tree/TreeNode';
import BinarySearchTree from '../../data-structures/tree/binary-tree/BinarySearchTree';

export class SearchingBST extends BinarySearchTree {
  constructor() {
    super();
  }

  public isBST(node: TreeNode, min: number, max: number): boolean {
    if (!node) return true;
    if (node.val < min || node.val > max) return false;

    return (
      this.isBST(node.left, min, node.val - 1) &&
      this.isBST(node.right, node.val - 1, max)
    );
  }

  public BFS(): number[] {
    let curNode = this.root;
    let list = [];
    let queue = [];
    queue.push(curNode);

    while (queue.length) {
      curNode = queue.shift(); // extract first item from the queue
      list.push(curNode.val);
      if (curNode.left) queue.push(curNode.left);
      if (curNode.right) queue.push(curNode.right);
    }

    return list;
  }

  public BFSRecursive(queue: TreeNode[], list: number[]) {
    if (!queue.length) return list;

    const curNode = queue.shift();
    list.push(curNode.val);
    if (curNode.left) queue.push(curNode.left);
    if (curNode.right) queue.push(curNode.right);

    return this.BFSRecursive(queue, list);
  }

  public DFSInOrder(): number[] {
    return this.root ? this.traverseInOrder(this.root, []) : [];
  }
  public DFSPreOrder(): number[] {
    return this.root ? this.traversePreOrder(this.root, []) : [];
  }
  public DFSPostOrder(): number[] {
    return this.root ? this.traversePostOrder(this.root, []) : [];
  }

  private traverseInOrder(node: TreeNode, list: number[]) {
    if (node.left) this.traverseInOrder(node.left, list);
    list.push(node.val);
    if (node.right) this.traverseInOrder(node.right, list);
    return list;
  }
  private traversePreOrder(node: TreeNode, list: number[]) {
    list.push(node.val);
    if (node.left) this.traversePreOrder(node.left, list);
    if (node.right) this.traversePreOrder(node.right, list);
    return list;
  }
  private traversePostOrder(node: TreeNode, list: number[]) {
    if (node.left) this.traversePostOrder(node.left, list);
    if (node.right) this.traversePostOrder(node.right, list);
    list.push(node.val);
    return list;
  }
}

const tree = new SearchingBST();

tree.insert(9).insert(4).insert(6).insert(20).insert(1).insert(15).insert(170);
/**
 *      9
 *   4    20
 * 1  6 15 170
 */

// Validate Binary Search Tree
console.log(tree.isBST(tree.root, Number.MIN_VALUE, Number.MAX_VALUE));

// BFS ->  [9,4,20,1,6,15,170]
console.log(tree.BFS());
console.log(tree.BFSRecursive([tree.root], []));

// DFS
// InOrder [1,4,6,9,15,20,170]
console.log(tree.DFSInOrder());
// PreOrder [9,4,1,6,20,15,170]
console.log(tree.DFSPreOrder());
// PostOrder [1,6,4,15,170,20,9]
console.log(tree.DFSPostOrder());
