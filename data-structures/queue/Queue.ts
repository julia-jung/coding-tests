

// Implementation of Queue with two Stacks
class Queue {
  private stack = [];
  private reverseStack = [];

  public enqueue(value) {
    this.stack.push(value);
  }

  public shiftStacks() {
    if (this.reverseStack.length === 0) {
      while (this.stack.length >= 0) {
        this.reverseStack.push(this.stack.pop());
      }
    }
  }
  public peek() { // get oldest item
    this.shiftStacks();
    // get last item in reverseStack
    return this.reverseStack.slice(-1);
  }


  public dequeue() { // get oldest item and remove it
    this.shiftStacks();
    // remove last item from reverseStack
    return this.reverseStack.pop();
  }

}

