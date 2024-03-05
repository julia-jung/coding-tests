/** ⭐
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 */

import ListNode from "../../../data-structures/linked-list/ListNode";

// list1 = [1,2,4], list2 = [1,3,4] -> output = [1,1,2,3,4,4]
// list1 = [], list2 = [] -> output = []
// list1 = [], list2 = [0] -> output = [0]

// Solution 1: recursion
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 === null) return list2;
  if (list2 === null) return list1;
  
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

// Solution 2: while loop
function mergeTwoLists2(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const head = new ListNode(0); // create dummy head
  let mergedList = head;
  
  while (list1 && list2) { // while both list are not end yet, proceed the mergestList comparing values
    if (list1.val <= list2.val) {
      mergedList.next = list1;
      list1 = list1.next;
    } else {
      mergedList.next = list2;
      list2 = list2.next;
    }
    mergedList = mergedList.next;
  }

  mergedList.next = list1 || list2; // if one end fist, attach the remain list to the mergedList

  return head.next; // dummy head's next node is the actual head node
};