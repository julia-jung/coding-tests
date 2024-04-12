# Searching/Traversal Algorithms

## Searching

A Searching Algorithms enable efficient data retrieval and processing therefore important in computer science and programming.

### Linear Search

> Also known as _sequential search_, checks each element in a collection one by one until the desired element is found or the entire collection has been searched.

- Time complexity: `O(n)`

#### How does it work?

1. Start at the beginning of the collection
2. Compare the first element to the desired element
3. If the element match, the search is complete and the index of the element is returned
4. If the element do not match, move to the next element in the collection and repeat steps2 and 3
5. The entire collection has been searched and the element has not been found, return a message indicating that the element is not in the collection

#### Pros:

- Simple and easy to understand
- Best suited for small collections or for situation where the collection is unsorted or constantly changing

#### Cons:

- Not very efficient for large collection

<br />

### Binary Search

> **When the collection is sorted**, search by repeatedly dividing the collection in half and checking if the desired element is in the left or right half.

- The collection must be sorted first
- Time complexity: `O(log N)`
- Binary search can be implemented either recursively or iteratively.

#### How does it work?

1. Start with the middle element of the collection
2. Compare the middle element to the desired element
3. If the middle element is equal to the desired element, the search is complete and the index of the element is returned
4. If the middle element is greater than the desired element, the saerch is conducted on the left half of the collection
5. If the middle element is less than the desired element, the search is conducted on the right half of the collection
6. Repeat steps 2-5 until the element is found or the search has been conducted on the entire collection

#### Pro:

- Efficient for searching in **sorted** collections, especially large collection

#### Cons:

- It requires the collection to be sorted before the search begins.

<br />
<br />

## Traversal

Traversal involves visiting each element in a data structure and performing some operation on it, while search involves finding a specific element in a data structure based on some criteria.

<br />

### BFS(Breath First Search)

> Starts at a specific node and explores all the neighboring nodes at the current level before moving on to the next level.

- Ensures that the shortest path between two nodes in an unweighted graph is found
- Can be used to find the minimum number of steps required to reach a node from the starting node
- It uses a **queue** data structure to keep track of the nodes to be visited next

- Time complexity: `O(V + E)`
  - V: number of vertices
  - E: number of edges in the graph
- Space complexity: `O(V + E)`
  - It needs to keep track of all the visited nodes and nodes in the queue

#### How does it work?

1. Start at a specified node
2. Enqueue the node to a queue and mark it as visited
3. While the queue is not empty:\
   a. Dequeue a node from the front of the queue\
   b. Visit the node and perform some operation on it\
   c. Enqueue all the neighboring ndoes that have not been visited before and mark them as visited
4. Repeat step 3 until the enqueue is empty

#### Pros:

- useful for finding the shortest path in an unweighted graph
- useful for exploring all the nodes in a graph that are reachable from a starting node

#### Cons:

- More memory

<br />

### DFS(Depth First Search)

> Starts at a specific node and explores as far as possible along each branch before backtracking.

- It uses a **stack** data structure or **recursion** to keep track of the nodes to be visited next

- Time complexity: `O(V + E)`
  - V: number of vertices
  - E: number of edges in the graph
- Space complexity: `O(V)`
  - It needs to keep track of all the visited nodes and nodes in the stack

#### How does it work?

1. Start at a specified node
2. Push the node to a stack and mark it as visited
3. While the stack is not empty:
   a. Pop a node from the top of the stack\
   b. Visit the node and perform some operation on it\
   c. Push all the neighboring nodes that have not been visited before the stack and mark them as visited
4. Repeat step 3 until the stack is empty

#### Pros

- Useful for exploring all the nodes in a graph and for detecting cycles in a graph
- Can be used to find a path between two nodes in a graph
- Less Memory

#### Cons

- Can get slow

<br />

### Types of DFS Traversal

#### In-Order

: visits left subtree -> current node -> right subtree

#### Pre-Order

: visits current node -> left substree -> right subtree

#### Post-Order

: visits left subtree -> right subtree -> current node

<br />

### Dijkstra and Belman-Ford

Can be used to find the shortest path between two nodes in a graph.

- Bellman-Ford can handle graphs with negative edge weights
- If the graph has only non-negative edge weights, Dijkstra may be faster for sparse graphs ([Read](https://medium.com/basecs/finding-the-shortest-path-with-a-little-help-from-dijkstra-613149fbdc8e))

<br />

## Recourses

[Time/Space complexity in BFS and DFS](https://stackoverflow.com/questions/9844193/what-is-the-time-and-space-complexity-of-a-breadth-first-and-depth-first-tree-tr)\
[BFS and DFS playground](https://visualgo.net/en/dfsbfs)
