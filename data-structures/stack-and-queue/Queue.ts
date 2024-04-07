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
        // pull the latest item first and push into the reverseStack
        // so that the oldest comes at last
        this.reverseStack.push(this.stack.pop());
      }
    }
  }

  // get oldest item
  public peek() {
    this.shiftStacks();
    // get last item in reverseStack
    return this.reverseStack.slice(-1);
  }

  // get oldest item and remove it
  public dequeue() {
    this.shiftStacks();
    // remove last item from reverseStack
    return this.reverseStack.pop();
  }
}
