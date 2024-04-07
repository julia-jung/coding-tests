import ListNode from '../linked-list/ListNode';

export default class StackWithLinkedList {
  private top: ListNode | null;
  private bottom: ListNode | null;

  constructor() {
    this.top = null;
    this.bottom = null;
  }

  peek(): ListNode | null {
    return this.top;
  }

  push(value: number): this {
    const newNode = new ListNode(value);
    if (!this.top) {
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
    }
    this.top = newNode;

    return this;
  }

  pop(): this {
    if (!this.top) return null;

    const curTop = this.top;
    this.top = curTop.next;
    if (this.bottom === curTop) this.bottom = null;

    return this;
  }

  printAll(): this {
    const arr = [];
    let curNode = this.top;
    while (curNode) {
      arr.push(curNode.val);
      curNode = curNode.next;
    }
    console.log(arr);
    return this;
  }
}

const stack = new StackWithLinkedList();
stack.push(10).push(5).push(100).pop().pop();
console.log(stack.peek());
stack.printAll();
