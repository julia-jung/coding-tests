import ListNode from '../linked-list/ListNode';

export default class QueueWithLinkedList {
  private first: ListNode | null;
  private last: ListNode | null;

  public peek(): ListNode | null {
    return this.first;
  }

  public enqueue(val: number): this {
    const newNode = new ListNode(val);

    if (this.last) {
      this.last.next = newNode;
      this.last = newNode;
    } else {
      this.first = newNode;
      this.last = newNode;
    }

    return this;
  }

  public dequeue(): this {
    if (this.first) {
      this.first = this.first.next;
      if (this.first === this.last) this.last = null;
    }

    return this;
  }

  public printAll(): this {
    const arr = [];
    let curNode = this.first;
    while (curNode) {
      arr.push(curNode.val);
      curNode = curNode.next;
    }
    console.log(arr);

    return this;
  }
}

const queue = new QueueWithLinkedList();
queue.enqueue(10).enqueue(5).enqueue(100).dequeue().dequeue().dequeue();
queue.printAll();
