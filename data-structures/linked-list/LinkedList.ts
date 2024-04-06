import ListNode from './ListNode';

export default class LinkedList {
  private head: ListNode | null = null;

  constructor(value?: number) {
    if (value) {
      this.head = new ListNode(value);
    }
  }

  public append(value: number): this {
    const newNode = new ListNode(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current: ListNode = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }

    return this;
  }

  public prepend(value: number): this {
    const newHead = new ListNode(value);
    newHead.next = this.head;
    this.head = newHead;

    return this;
  }

  public insert(value: number, index: number): this {
    if (index <= 0) {
      this.prepend(value);
    } else {
      const newNode = new ListNode(value);
      // to insert at index = 2 -> we need to stop at index 1
      const lead = this.traverseToIndex(index - 1);
      newNode.next = lead.next;
      lead.next = newNode;
    }

    return this;
  }

  public deleteAtIndex(index: number): this {
    if (this.head === null || index < 0) return this;
    if (index === 0) {
      this.head = this.head.next;
    } else {
      const leader = this.traverseToIndex(index - 1);
      if (leader.next) leader.next = leader.next.next;
    }

    return this;
  }

  public deleteWithValue(value: number): this {
    if (this.head === null) return;
    if (this.head.val === value) {
      this.head = this.head.next;
      return this;
    }

    let current: ListNode = this.head;
    while (current.next !== null) {
      if (current.next.val === value) {
        // if the next node is the one we want to delete, skip the next node
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }

    return this;
  }

  public printList(): this {
    const array = [];
    let curNode = this.head;
    while (curNode) {
      array.push(curNode.val);
      curNode = curNode.next;
    }
    console.log(array);

    return this;
  }

  public reverse(): this {
    if (!this.head.next) return this;

    let prev = this.head;
    let cur = prev.next;
    while (cur) {
      const temp = cur.next;
      // put prev next to cur
      cur.next = prev;

      // move forward
      prev = cur;
      cur = temp;
    }
    // now cur is null and prev is tail
    this.head.next = null; // now head is at tail
    this.head = prev; // set tail as new head
    return this;
  }

  private traverseToIndex(index: number): ListNode {
    let curNode = this.head;
    let i = 0;

    while (curNode.next && i < index) {
      curNode = curNode.next;
      i++;
    }

    return curNode;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList
  .append(5)
  .append(16)
  .prepend(1)
  .insert(99, 99)
  .deleteAtIndex(-99)
  .reverse();
myLinkedList.printList();
