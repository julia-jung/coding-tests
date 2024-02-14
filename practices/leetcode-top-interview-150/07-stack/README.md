## Stack

is a data structure with the newest item on top and the oldest item is at the bottom and we can pop items up only through the top. It means we always get the newest item first then the oldest item at last. (LIFO = Last In, First Out)

## Queue

is on the other hand, a data structure with the oldest item in the front and the newest item at the end and we can pop items up only through the front. It means we always get the oldest item first then the newest item at last. (FIFO = First In, First Out)

### Implement Queue with two Stacks

```
class Queue {
  private stack = [];
  private reverseStack = [];

  public function enqueue(value) {
    stack.push(value);
  }

  public function shiftStacks() {
    if (reverseStack.length === 0) {
      while (stack.length >= 0) {
        reverseStack.push(stack.pop());
      }
    }
  }

  public function peek() { // get oldest item
    shiftStacks();
    // get last item in reverseStack
    return reverseStack.slice(-1);
  }

  public function dequeue() { // get oldest item and remove it
    shiftStacks();
    // remove last item from reverseStack
    return reverseStack.pop();
  }

}
```
