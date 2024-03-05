/** ⭐⭐
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order, and each of their nodes contains a single digit. 
 * Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */

import ListNode from "../../../data-structures/linked-list/ListNode";

// l1 = [2,4,3], l2 = [5,6,4] -> output = [7,0,8] (342 + 465 = 807)
// l1 = [0], l2 = [0] -> output = [0]
// l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] -> output = [8,9,9,9,0,0,0,1]


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1 && !l2) return null;
  
  const head = new ListNode(0);
  let node = head;
  let val = 0;
  while (l1 || l2) {
    if (l1) {
      val += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      val += l2.val;
      l2 = l2.next;
    }
    node.next = new ListNode(val % 10);
    val = Math.trunc(val / 10);
    node = node.next;
  }

  if (val > 0) {
    node.next = new ListNode(val);
  }

  return head.next;
};