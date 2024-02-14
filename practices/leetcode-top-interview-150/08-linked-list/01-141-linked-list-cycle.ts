/** ⭐
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
 * Internally, pos is used to denote the index of the node that tail's next pointer is connected to. 
 * Note that pos is not passed as a parameter.
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 */
import ListNode from "./ListNode";

// Solution 1: if the track is circular, faster person always catch the slower person after some cycle
function hasCycle(head: ListNode | null): boolean {
  let fastHead = head;
  
  while(fastHead && fastHead.next) {
    head = head.next;
    fastHead = fastHead.next.next;
    if (head === fastHead) return true;
  }

  return false;
};

// Solution 2: using new Set()
function hasCycle2(head: ListNode | null): boolean {
  const set = new Set<ListNode>();

  while (head) {
    if (set.has(head)) {
        return true;
    }
    set.add(head);
    head = head.next;
  }

  return false;
}

// FailedAttemp1
function hasCycleFailed1(head: ListNode | null): boolean {
  const list = [];
  
  while(head && head.next) {
    if (list.includes(head.val)) return true;
    list.push(head.val);
    head = head.next;
  }

  return false;
};

// FailedAttempt2: head: [1,1,1,1] / pos = -1 -> output: true / expected: false 
function hasCycleFailed2(head: ListNode | null): boolean {
  const list = [];
  
  while(head && head.next) {
    if (list.find((l) => l[0] === head.val && l[1] === head.next.val)) return true;
    list.push([head.val, head.next.val]);
    head = head.next;
  }

  return false;
};