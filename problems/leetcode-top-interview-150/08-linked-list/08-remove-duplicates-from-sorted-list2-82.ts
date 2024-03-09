/** ⭐⭐
 * Given the head of a sorted linked list, delete all nodes that have duplicate numbers, 
 * leaving only distinct numbers from the original list. Return the linked list sorted as well.
 */

import ListNode from "../../../data-structures/linked-list/ListNode";

// head = [1,2,3,3,4,4,5] -> output = [1,2,5]
// head = [1,1,1,2,3] -> output = [2,3]

// Solution 1: save counts in the map first then iterate
function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  
  let curNode = head;
  const map = new Map();
  // save count in a map
  while (curNode) {
    map.set(curNode.val, (map.get(curNode.val) ?? 0) + 1);
    curNode = curNode.next;
  }
  
  const dummy = new ListNode();
  dummy.next = head;
  curNode = dummy;
  
  while (curNode && curNode.next) {
    let nextNode = curNode.next;
    // skip all next nodes having map value more than 1
    while (nextNode && map.get(nextNode.val) > 1) {
      nextNode = nextNode.next;
    }
    curNode.next = nextNode;
    curNode = curNode.next;
  }

  return dummy.next;
};

// Solution 2: using two pointers prevNode and curNode
function deleteDuplicates2(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  
  const dummy = new ListNode();
  dummy.next = head;
  let prevNode = dummy;
  let curNode = head;
  while (curNode) {
    // if it meet the duplicated node 
    // move curNode to last duplicated node
    while (curNode.next && curNode.val === curNode.next.val) {
      curNode = curNode.next;
    }

    if (prevNode.next === curNode) {
      // if it didn't meet duplicated nodes move prevNode forward
      prevNode = prevNode.next
    } else {
      // if it met duplicated nodes and now at the last duplicated node
      prevNode.next = curNode.next;
    }

    curNode = curNode.next;
  }

  return dummy.next;
};