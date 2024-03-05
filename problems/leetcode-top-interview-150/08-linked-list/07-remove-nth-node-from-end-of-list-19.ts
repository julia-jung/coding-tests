/** ⭐⭐
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 */

import ListNode from "../../../data-structures/linked-list/ListNode";

// head = [1,2,3,4,5], n = 2 -> output = [1,2,3,5]
// head = [1], n = 1 -> output = []
// head = [1,2], n = 1 -> output = [1]

// Solution 1: get length first then iterate until length - n
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head === null) return null;

  let length = 0;
  let curNode = head;
  while (curNode) {
    curNode = curNode.next;
    length++;
  }

  if (length === 1) return null;

  let index = length - n;
  if (index === 0) return head.next;
    
  curNode = head;
  while (index > 1) {
    curNode = curNode.next;
    index--;
  }
  curNode.next = curNode.next.next;

  return head;
};

// Solution 2: with 2 pointers
function removeNthFromEnd2(head: ListNode | null, n: number): ListNode | null {
  if (head === null || head.next === null) return null;
  
  let start = new ListNode(); // dummy node
  start.next = head;
  let fast = start;
  let slow = start;

  for (let i = 1; i <= n + 1; i++) {
    fast = fast.next;
  }
  console.log(fast);
  // now fast is n+1 further from the head
  // slow and fast has n distance

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  // when fast reaches the end of the list, slow will be at the right before the one to be removed.
  slow.next = slow.next.next;
  
  return start.next;
};