/** ⭐⭐
 * Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
 * You should preserve the original relative order of the nodes in each of the two partitions.
 */

import ListNode from "../../../data-structures/linked-list/ListNode";

// head = [1,4,3,2,5,2], x = 3 -> output = [1,2,2,4,3,5]
// head = [2,1], x = 2 -> output = [1,2]

function partition(head: ListNode | null, x: number): ListNode | null {
  if (!head || !head.next) return head;


  const smallerHead = new ListNode();
  let smaller = smallerHead;
  const greaterHead = new ListNode();
  let greater = greaterHead;

  let curNode = head;
  while (curNode) {
    if (curNode.val < x) {
      smaller.next = curNode;
      smaller = smaller.next;
    } else {
      greater.next = curNode;
      greater = greater.next;
    }
    curNode = curNode.next;
  }
  greater.next = null;
  smaller.next = greaterHead.next;

  return smallerHead.next;
};