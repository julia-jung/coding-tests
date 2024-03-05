/** ⭐⭐
 * Given the head of a singly linked list and two integers left and right where left <= right, 
 * reverse the nodes of the list from position left to position right, and return the reversed list.
 */

import ListNode from "../../../data-structures/linked-list/ListNode";

// head = [1,2,3,4,5], left = 2, right = 4 -> output = [1,4,3,2,5]
// head = [5], left = 1, right = 1 -> output = [5]


function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if (head === null || head.next === null) return head;
  
  let endBeforeLeft = null;
  let reversed = null;
  
  let i = 1;
  let curNode = head;
  while (curNode && i <= right) {
    if (i < left) {
      endBeforeLeft = curNode;
    } else {
      const node = new ListNode(curNode.val);
      node.next = reversed;
      reversed = node;
    }
    curNode = curNode.next;
    i++;
  }

  if (endBeforeLeft === null) {
    head = reversed;
  } else {
    endBeforeLeft.next = reversed;
  }

  while (reversed.next) {
    reversed = reversed.next;
  }
  reversed.next = curNode;

  return head;
};