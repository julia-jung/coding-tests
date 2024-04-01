/** ⭐⭐
 * Given the head of a linked list, return the list after sorting it in ascending order.
 */

import ListNode from '../../../data-structures/linked-list/ListNode';

// Input: head = [4,2,1,3] -> Output: [1,2,3,4]
// Input: head = [-1,5,3,4,0] -> Output: [-1,0,3,4,5]
// Input: head = [] -> Output: []

// merge sort
function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  // [4,2,1,3]
  // 0) slow = 4, fast = 2
  // 1st) slow = 2, fast = 3 -> mid = 1

  // [-1,5,3,4,0]
  // 0) slow = -1, fast = 5
  // 1st) slow = 5, fast = 4
  // 2nd) slow = 3, fast = null -> mid = 4

  // 1. cut the list to two halves
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  const mid = slow.next; // get the right starting point
  slow.next = null; // cut

  // 2. sort each half
  const left = sortList(head);
  const right = sortList(mid);

  // 3. merge left and right
  return merge(left, right);

  function merge(left: ListNode, right: ListNode) {
    const newHead = new ListNode(0);
    let curNode = newHead;

    while (left && right) {
      if (left.val < right.val) {
        curNode.next = left;
        left = left.next;
      } else {
        curNode.next = right;
        right = right.next;
      }
      curNode = curNode.next;
    }

    if (left) curNode.next = left;
    if (right) curNode.next = right;

    return newHead.next;
  }
}

// simple approach using array sort method
function sortList2(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  let arr = [];
  while (head) {
    arr.push(head);
    head = head.next;
  }
  arr.sort((a, b) => a.val - b.val);

  for (let i = 0; i < arr.length; i++) {
    arr[i].next = i < arr.length - 1 ? arr[i + 1] : null;
  }

  return arr[0];
}

// Time limit exceeded
function sortListFailed(head: ListNode | null): ListNode | null {
  let sorted = new ListNode(-Number.MAX_VALUE);

  while (head) {
    const newNode = new ListNode(head.val);
    let curNode = sorted;
    while (curNode.next && head.val > curNode.next.val) curNode = curNode.next;
    newNode.next = curNode.next;
    curNode.next = newNode;

    head = head.next;
  }

  return sorted.next;
}
