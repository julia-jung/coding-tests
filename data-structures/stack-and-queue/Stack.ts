export class Stack {
  private array: number[];

  constructor() {
    this.array = [];
  }

  peek(): number {
    return this.array[this.array.length - 1];
  }

  push(val: number): this {
    this.array.push(val);

    return this;
  }

  pop(): this {
    this.array.pop();
    return this;
  }
}

const stack = new Stack();
stack.push(10).push(5).push(100).pop().pop().pop();
console.log(stack.peek());
