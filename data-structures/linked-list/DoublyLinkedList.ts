import DoublyListNode from './DoublyListNode';

export default class DoublyLinkedList {
  private head: DoublyListNode | null = null;
  private tail: DoublyListNode | null = null;

  constructor(value?: number) {
    if (value) {
      this.head = new DoublyListNode(value);
      this.tail = this.head;
    }
  }

  public append(value: number): this {
    const newNode = new DoublyListNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    return this;
  }

  public prepend(value: number): this {
    const newHead = new DoublyListNode(value);
    if (this.head) this.head.prev = newHead;
    newHead.next = this.head;
    this.head = newHead;

    return this;
  }

  public insert(value: number, index: number): this {
    if (index <= 0) {
      this.prepend(value);
    } else {
      const newNode = new DoublyListNode(value);
      // to insert at index = 2 -> we need to stop at index 1
      const leader = this.traverseToIndex(index - 1);
      const follower = leader.next;
      if (follower) {
        follower.prev = newNode;
      } else {
        // we are inserting next to tail
        this.tail = newNode;
      }
      newNode.prev = leader;
      newNode.next = leader.next;
      leader.next = newNode;
    }

    return this;
  }

  public deleteAtIndex(index: number): this {
    if (this.head === null || index < 0) return this;
    if (index === 0) {
      this.head = this.head.next;
    } else {
      const leader = this.traverseToIndex(index - 1);
      const target = leader.next;
      if (target) {
        if (target.next) {
          target.next.prev = leader;
        } else {
          // we are deleting the tail
          this.tail = leader;
        }
        leader.next = target.next;
      }
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

    const reversedArray = [];
    curNode = this.tail;
    while (curNode) {
      reversedArray.push(curNode.val);
      curNode = curNode.prev;
    }
    console.log('reversed:', reversedArray);

    return this;
  }

  private traverseToIndex(index: number): DoublyListNode {
    let curNode = this.head;
    let i = 0;

    while (curNode.next && i < index) {
      curNode = curNode.next;
      i++;
    }

    return curNode;
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5).append(16).prepend(1).insert(99, 4).deleteAtIndex(2);
myLinkedList.printList();
