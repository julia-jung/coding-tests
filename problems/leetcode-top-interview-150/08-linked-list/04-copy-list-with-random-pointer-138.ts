/** ⭐⭐
 * A linked list of length n is given such that each node contains an additional random pointer, 
 * which could point to any node in the list, or null.
 * Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, 
 * where each new node has its value set to the value of its corresponding original node. 
 * Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list 
 * and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.
 * For example, if there are two nodes X and Y in the original list, where X.random --> Y, 
 * then for the corresponding two nodes x and y in the copied list, x.random --> y.
 * 
 * Return the head of the copied linked list.
 * The linked list is represented in the input/output as a list of n nodes. 
 * Each node is represented as a pair of [val, random_index] where:
 *  - val: an integer representing Node.val
 *  - random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
 * Your code will only be given the head of the original linked list.
 */

// Definition for Node.
class Node {
  val: number
  next: Node | null
  random: Node | null
  constructor(val?: number, next?: Node, random?: Node) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    this.random = (random===undefined ? null : random)
  }
}

// head = [[7,null],[13,0],[11,4],[10,2],[1,0]] -> [[7,null],[13,0],[11,4],[10,2],[1,0]]
// head = [[1,1],[2,1]] -> [[1,1],[2,1]]
// head = [[3,null],[3,0],[3,null]] -> [[3,null],[3,0],[3,null]]

// Solution 1: using map (extra space)
function copyRandomList(head: Node | null): Node | null {
  if (head === null) return null;
  
  const copyHead = new Node();
  let curNode = copyHead;

  const map = new Map();

  while (head) {
    const copy = new Node(head.val);
    map.set(head, copy); // map the original node with the copied one

    curNode.next = copy;
    if (head.random) {
      curNode.next.random = head.random;
    }

    curNode = curNode.next;
    head = head.next;
  }
  
  curNode = copyHead.next;
  while (curNode) {
    if (curNode.random) {
      curNode.random = map.get(curNode.random);
    }
    curNode = curNode.next;
  }

  return copyHead.next;
};

// Solution2: with no extra space (insert new one in the original linked list and separate them later)
function copyRandomList2(head: Node | null): Node | null {
  if (!head) return null;

  let curNode = head;
  // iterating original linked list,
  // insert copied node right next to the original one
  while (curNode) {
    let curCopy = new Node(curNode.val);

    curCopy.next = curNode.next; // link next original node into curCopy.next
    curNode.next = curCopy; // insert copy into cur original node

    curNode = curCopy.next; // move on to the next original node
  }

  curNode = head;

  // Update random pointers
  while (curNode) {
    // set copied node(curNode.next)'s random node to the copied one(which is located right next to the original one)
    curNode.next.random = curNode.random ? curNode.random.next : null;
    curNode = curNode.next.next; // move on to the next original node
  }

  // Break linked list back to original list and cloned list
  // i.e. A->A'->B->B'->C->C' would be broken to A->B->C and A'->B'->C'
  curNode = head;
  const copyHead = head.next;
  let curCopy = copyHead;
  
  while (curCopy !== null) {
    curNode.next = curNode.next.next;
    curCopy.next = curCopy.next ? curCopy.next.next : null;

    curNode = curNode.next;
    curCopy = curCopy.next;
  }

  return copyHead;
}