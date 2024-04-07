# Data Structure - Stack & Queue

## Concept

They are both linear data structures, which allow us to traverse data elements sequentially(one by one).

- Linear Data Structures include Array, Linked-list, Stack, and Queue
- In Stack and Queue there is no random access operation. You mainly use stacks and queues to run commands like `push`, `peek`, `pop`.

### Stack

> Stack is a data structure with the newest item on top and the oldest item is at the bottom and we can pop items up only through the top.

- It means we always get the newest item first then the oldest item at last. (LIFO = Last In, First Out)
  - Think of browser's back button and text editor's undo feature. They remember and bring the latest action.

| Algorithm | Complexity |
| --------- | ---------- |
| Lookup    | O(n)       |
| Push      | O(1)       |
| Pop       | O(1)       |
| Peek      | O(1)       |

### Queue

> Queue is on the other hand, a data structure with the oldest item in the front and the newest item at the end and we can pop items up only through the front.

- It means we always get the oldest item first then the newest item at last. (FIFO = First In, First Out)
  - Think of a printer, the first requested print comes out first

| Algorithm | Complexity |
| --------- | ---------- |
| Lookup    | O(n)       |
| Enqueue   | O(1)       |
| Dequeue   | O(1)       |
| Peek      | O(1)       |

### Stack and Queue in JS

- JS doesnt' have built-in Stack nor Queue data structure
- But you can make one

  - What would you use to build a Stack? -- Array or LinkedList?
  - What would you use to build a Queue? -- Array or LinkedList?
    - Building a Queue with an Array is very inefficient

- Call Stack in JS

  - Javascript is single threaded language, meaning it has only one call stack and can handle one thing at a time.
  - Java script engine push functions in Call Stack one by one but when you call for example, recursive function with no break point, Call stack gets full and overfloaded with endless function call.

- Callback Queue in JS
  - Callback Queue and Event Loop is part of Javascript Runtime Environment
  - When an async function(e.g. Web APIs - setTimeout,..) is resolved in the background, callback function is added to the Callback Queue. Event loop keep eyes on Call Stack and Callback Queue then when Call Stack is empty, it dequeue first callback from Callback Queue and push it to Call Stack to be executed

<br />

## When to use

### Good at:

- Fast Operations
- Fast Peek
- Ordered

### Bad at:

- Slow Lookup
