import ListNode from "./ListNode";

export class LinkedList {
  private head: ListNode | null;

  public append(data: number): void {
    const newNode = new ListNode(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current: ListNode = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  public prepend(data: number): void {
    const newHead = new ListNode(data);
    newHead.next = this.head;
    this.head = newHead;
  }

  public deleteWithValue(data: number): void {
    if (this.head === null) return;
    if (this.head.val === data) {
      this.head = this.head.next;
      return;
    }

    let current: ListNode = this.head;
    while (current.next !== null) {
      if (current.next.val === data) {
        // if the next node is the one we want to delete, skip the next node
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }
}