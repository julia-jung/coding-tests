# Data Structure - Linked List

## Concept

> A linked list is consists of one or more nodes. Each node has two part: a value, and a pointer to the previous/next node forming the chain-like structure

- There are singly/doubly Lined List
- Tail(the last) node points to null

### What is a Pointer

Pointer is an object that stores a memory address where the data is stored
It references a location in memory, and obtaining the value stored at the location (_dereferencing_)

- When you make an object and save it to a variable, it points to the address where that object is stored in the memory
- As long as there is a pointer to the memory, the data won't be deleted from the memory. But when there is no pointer, it will automatically deleted by Garbage Collector (for low-level language, you have to manage your own memory and manually delete unused data)

### Linked List in JS

- JS doesnt' have built-in LinkedList data structure
- But you can make one

### Time/Space Complexity

| Algorithm        | Complexity |
| ---------------- | ---------- |
| Lookup           | O(n)       |
| Search           | O(n)       |
| Prepend          | O(1)       |
| Insertion        | O(n)       |
| Deletion         | O(n)       |
| Space Complexity | O(n)       |

- Nodes of Linked List are stored randomly in the memory, which improves space complexity compared to the array

- Inserting and Deleting new node are really easy with Linked List

### Singly Lined List vs Doubly Linked List

- Singly Linked List(SLL) is a linear data structure of nodes chaining together in a single direction.

  - The problem with SLL is that it only allows us to traverse forward. We can't really iterate back to a previous node

- Doubly Linked List(DLL) are extension of Singly Lined List and has two pointers one to the next node and the other to the previous node.
  - This ensures that the list can be traversed in both directions
  - DDL costs more in terms of memory due to the inclusion of previous pointer but it makes iteration much more efficient

<br />

## When to use

### Linked List vs Array

- The biggest different of Linked List with array is that to access certain element, Array can directly with the index, but with Linked List you need to traverse from the head node

### Good at:

- Fast Insertion/Deletion
- Ordered
- Flexible Size

### Bad at:

- Slow Lookup
- More Memory

<br />

## Recources

[Linked List playground](https://visualgo.net/en/list)\
[Arrays vs Linked Lists](https://www.youtube.com/watch?v=DyG9S9nAlUM)
