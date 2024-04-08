## Binary Tree - Binary Heap

- Binary Heap is Complete Binary Tree. Every level except the bottom-most level is completely filled and nodes of bottom-most level are positioned as left as possible
- Binary Heap is either **Min Heap** or **Max Heap**

### Min Heap / Max Heap

- In a Min Binary Heap, the root must be minimum among all the nodes in Binary Heap. And each nodes are also minimun of it's subtrees
- In as Max Binary Heap, the root must be maximun among all the nodes in BinaryHeap. And each nodes are also maximum of it's subtrees

- Binary Heap is used in a lot of data storage, priority queue, sorting algorithms,..
- Thy take up the least amount of space possible

#### vs. Binary Search Tree

- Unlike binary search tree, left and right value can be any value as long as less/greater than the parent. And it doesn't enforce any ordering between the sibling nodes
- We don't have to rebalance it like we did in Binary Search Tree

### Priority Queue

- is a special type of Queue in which each element has a priority value and elements with higher priority are served first.
  - If elements with same priority occur, they are served according to their order in the queue

### Time/Space Complexity

| Algorithm | Average case |
| --------- | ------------ |
| Lookup    | O(n)         |
| Insertion | O(log N)     |
| Deletion  | O(log N)     |

### Good at:

- Better than O(n)
- Priority
- Flexible Size
- Fast Insert

### Bad at:

- Slow Lookup

<br />

## Resources

[Binary Heap playground](https://visualgo.net/en/heap)\
[Priority Queue JS code](https://www.geeksforgeeks.org/implementation-priority-queue-javascript/)\
[JS Memory Heap doesn't have the data structure of Heap](https://stackoverflow.com/questions/1699057/why-are-two-different-concepts-both-called-heap)
