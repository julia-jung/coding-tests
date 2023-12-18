
// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}

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

// [1,2,4] + [1,3,4] = [1,1,2,3,4,4]
// [] + [] = []
// [] + [0] = [0]

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