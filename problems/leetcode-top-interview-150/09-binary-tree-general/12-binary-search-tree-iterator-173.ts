/** ⭐⭐
 * Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST):
 * BSTIterator(TreeNode root) Initializes an object of the BSTIterator class. The root of the BST is given as part of the constructor. 
 * The pointer should be initialized to a non-existent number smaller than any element in the BST.
 * boolean hasNext() Returns true if there exists a number in the traversal to the right of the pointer, otherwise returns false.
 * int next() Moves the pointer to the right, then returns the number at the pointer.
 * Notice that by initializing the pointer to a non-existent smallest number, 
 * the first call to next() will return the smallest element in the BST.
 * You may assume that next() calls will always be valid. 
 * That is, there will be at least a next number in the in-order traversal when next() is called.
 */

import TreeNode from "../../../data-structures/binary-tree/TreeNode";

// const bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);
// bSTIterator.next();    // return 3
// bSTIterator.next();    // return 7
// bSTIterator.hasNext(); // return True
// bSTIterator.next();    // return 9
// bSTIterator.hasNext(); // return True
// bSTIterator.next();    // return 15
// bSTIterator.hasNext(); // return True
// bSTIterator.next();    // return 20
// bSTIterator.hasNext(); // return False

class BSTIterator {
  private stack: TreeNode[] = [];
  constructor(root: TreeNode | null) {   
    this.fillStack(root);
    // left leaf node(smallest) will be the top of the stack
  }

  public next(): number {
    const node = this.stack.pop();
    this.fillStack(node.right); // if it has right side, push them into stack
    return node.val;
  }

  public hasNext(): boolean {
    return this.stack.length > 0;
  }

  private fillStack(root: TreeNode | null): void {
    while (root) {
      this.stack.push(root);
      root = root.left;
    }
  }
}

/**
* Your BSTIterator object will be instantiated and called as such:
* var obj = new BSTIterator(root)
* var param_1 = obj.next()
* var param_2 = obj.hasNext()
*/