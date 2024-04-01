/** ⭐⭐
 * Given the head of a linked list, rotate the list to the right by k places.
 */

import ListNode from "../../../data-structures/linked-list/ListNode";

// head = [1,2,3,4,5], k = 2 -> output = [4,5,1,2,3]
// head = [0,1,2], k = 4 -> output = [2,0,1]

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next) return head;

  let curNode = head;
  let length = 1;
  while (curNode && curNode.next) {
    curNode = curNode.next;
    length++;
  }

  curNode.next = head; // link head next to last node
  
  let leftLength = length - (k % length);
  while (leftLength > 0) { // walk through until find the new last node
    curNode = curNode.next;
    leftLength--;
  }

  const newHead = curNode.next;
  curNode.next = null;
  
  return newHead;
};