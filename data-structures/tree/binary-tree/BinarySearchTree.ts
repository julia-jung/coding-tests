import TreeNode from '../TreeNode';

export default class BinarySearchTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  /**
   * insert a new value into the Binary Search Tree
   * (iterating from root to leaf comparing the value to find the position)
   * @param value
   * @returns
   */
  public insert(value: number): this {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      let curNode = this.root;

      while (curNode) {
        if (value < curNode.val) {
          if (!curNode.left) {
            curNode.left = newNode;
            break;
          }
          curNode = curNode.left;
        } else {
          if (!curNode.right) {
            curNode.right = newNode;
            break;
          }
          curNode = curNode.right;
        }
      }
    }

    return this;
  }

  /**
   * Check if the value is in the Binary Search Tree
   * (iterating from root to leaf comparing the value)
   * @param value
   * @returns
   */
  public lookup(value: number): boolean {
    if (!this.root) return false;

    let curNode = this.root;

    while (curNode) {
      if (value < curNode.val) {
        curNode = curNode.left;
      } else if (value > curNode.val) {
        curNode = curNode.right;
      } else {
        return true;
      }
    }

    return false;
  }

  /**
   * Remove the data from the Binary Search Tree
   * @param value
   * @returns
   */
  public remove(value: number): this {
    let curNode = this.root;

    let parent = null;

    while (curNode) {
      if (value < curNode.val) {
        parent = curNode;
        curNode = curNode.left;
      } else if (value > curNode.val) {
        parent = curNode;
        curNode = curNode.right;
      } else {
        // we found a match

        // 1. if we don't have right child
        if (!curNode.right) {
          // 1-1. if we are the root
          if (!parent) {
            this.root = curNode.left;
          } else {
            // 1-2. if we are the left child of parent
            if (curNode.val < parent.val) {
              parent.left = curNode.left;
              // 1-3. if we are the right child of parent
            } else if (curNode.val > parent.val) {
              parent.right = curNode.left;
            }
          }
          // 2. if we have right child that only have right child
        } else if (!curNode.right.left) {
          curNode.right.left = curNode.left;
          // 2-1. if we are the root
          if (!parent) {
            this.root = curNode.right;
          } else {
            // 2-2. if we are the left child of parent
            if (curNode.val < parent.val) {
              parent.left = curNode.right;
              // 2-3. if we are the right child of parent
            } else if (curNode.val > parent.val) {
              parent.right = curNode.right;
            }
          }
          // 3. if we have right child that has left child
        } else {
          // find the right child's left most child
          let leftmost = curNode.right.left;
          let leftmostParent = curNode.right;

          while (leftmost.left) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          // parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = curNode.left;
          leftmost.right = curNode.right;

          // 3-1. if we are the root
          if (!parent) {
            this.root = leftmost;
          } else {
            // 3-2. if we are the left child of parent
            if (curNode.val < parent.val) {
              parent.left = leftmost;
              // 3-3. if we are the right child of parent
            } else if (curNode.val > parent.val) {
              parent.right = leftmost;
            }
          }
        }
        break;
      }
    }

    return this;
  }
}

const tree = new BinarySearchTree();

tree
  .insert(9)
  .insert(4)
  .insert(6)
  .insert(20)
  .insert(170)
  .insert(15)
  .insert(1)
  .remove(170)
  .remove(4);
console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(6));
/**
 *      9
 *   4    20
 * 1  6 15 170
 */

function traverse(node: TreeNode | null): TreeNode | null {
  if (!node) return null;
  const tree = new TreeNode(node.val);
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
