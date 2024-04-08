export default class BinaryTreeNode {
  private val: number;
  private left: BinaryTreeNode | null;
  private right: BinaryTreeNode | null;

  constructor(val: number) {
    this.val = val;
  }

  public checkBST(min: number, max: number): boolean {
    if (this.val < min || this.val > max) return false;

    const leftCheck =
      this.left === null || this.left.checkBST(min, this.val - 1);
    const rightCheck =
      this.right === null || this.right.checkBST(this.val + 1, max);

    return leftCheck && rightCheck;
  }

  /**
   * Insert a new data into the binary tree (using Recursion)
   * @param data
   */
  public insert(data: number): void {
    if (data <= this.val) {
      if (this.left === null) {
        this.left = new BinaryTreeNode(data);
      } else {
        this.left.insert(data);
      }
    } else {
      if (this.right === null) {
        this.right = new BinaryTreeNode(data);
      } else {
        this.right.insert(data);
      }
    }
  }

  /**
   * Check if the data is in the binary tree (using Recursion)
   * @param data
   * @returns
   */
  public contains(data: number): boolean {
    if (data === this.val) {
      return true;
    } else if (data < this.val) {
      if (this.left === null) {
        return false;
      } else {
        this.left.contains(data);
      }
    } else {
      if (this.right === null) {
        return false;
      } else {
        this.right.contains(data);
      }
    }
  }

  /**
   * Traverse the binary tree inorder and return the number array
   */
  public printInOrder(arr?: number[]): number[] {
    // Inorder: left-root-right
    if (!arr) arr = [];

    if (this.left !== null) {
      this.left.printInOrder(arr);
    }

    arr.push(this.val);

    if (this.right !== null) {
      this.right.printInOrder(arr);
    }

    return arr;
  }
}

export class BST {
  private root: BinaryTreeNode | null;

  /**
   * Check if the tree is the binary search tree
   */
  public checkBST(): boolean {
    if (this.root === null) return true;
    return this.root.checkBST(Number.MIN_VALUE, Number.MAX_VALUE);
  }
}
