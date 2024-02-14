import BinaryTreeNode from "./BinaryTreeNode";

export default class BinarySearchTree {
  private root: BinaryTreeNode | null;
  
  /**
   * Check if the tree is the binary search tree
   */
  public checkBST(): boolean {
    if (this.root === null) return true;
    return this.root.checkBST(Number.MIN_VALUE, Number.MAX_VALUE);
  }
}