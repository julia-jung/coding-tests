/** ⭐⭐
 * Given a binary tree
 * Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
 * Initially, all next pointers are set to NULL.
 */

class TreeLinkNode {
    val: number
    left: TreeLinkNode | null
    right: TreeLinkNode | null
    next: TreeLinkNode | null
    constructor(val?: number, left?: TreeLinkNode, right?: TreeLinkNode, next?: TreeLinkNode) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
        this.next = (next===undefined ? null : next)
    }
}

// root = [1,2,3,4,5,null,7] -> output = [1,#,2,3,#,4,5,7,#]
// root = [] -> output = []

// left와 right를 연결해야 되기 때문에 left따로 right 따로 재귀를 못돌림. 
// linked list 풀듯이 while문으로 연결해야 함
function connect(root: TreeLinkNode | null): TreeLinkNode | null {
  const head = root;
  
  while (root) {
    let dummy = new TreeLinkNode();
    let curNode = dummy;

    while (root) {
      if (root.left) {
        curNode.next = root.left;
        curNode = curNode.next;
      }
      if (root.right) {
        curNode.next = root.right;
        curNode = curNode.next;
      }
      root = root.next;
    }

    root = dummy.next;
  }

  return head;
};