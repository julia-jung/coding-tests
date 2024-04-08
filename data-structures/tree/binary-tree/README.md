# Tree Data Structure - Binary Tree

> A Binary Tree is a tree data structure composed of nodes, each of which has at most, two chilren, referred to as _left and right nodes_. The tree starts off with a single node known as the _root_.

- Each node has the data, pointer to the left child, and pointer to the right child
- Each node can only have either 0, 1, or 2 nodes as children
  - Leaf nodes has no children, therefor left and right pointers point to `null`
- Each node can have only one parent

<br />

## Types of Binary Tree

### Full Binary Tree

- Each node in Full Binary Tree has 0 or 2 child nodes

### Perfect Binary Tree

- In Perfect Binary Tree all level of nodes are full
  - Each node has exactly two child nodes except leaf nodes
  - All the leaf nodes are at the same level

#### Number of nodes in Perfect Binary Tree

- The number of nodes in each level doubled up going down the tree
- The number of nodes in each level is same as _the total number of nodes before it's level + 1_, meaning half of nodes are on the leaf level

| Level                   | Num of nodes |
| ----------------------- | ------------ |
| 0(root)                 | 2^0 = 1      |
| 1                       | 2^1 = 2      |
| 2                       | 2^2 = 4      |
| 3                       | 2^3 = 8      |
| h - 1(leaf)             | 2^(h-1)      |
| ======================= | ========     |
| TOTAL Nodes             | `2^h - 1`    |

- `log nodes = height`

### Complete Binary Tree

- In Complete Binary Tree all the levels are completely filled except possibly the lowest one, which is filled from the left.
- A Complete Binary Tree is just like a Full Binary Tree, with two major difference:
  1. All the leaf nodes must lean towards the left
  2. The last leaf node might not have a right sibling (i.e. a complete binary tree doesn't have to be a full binary tree)

<br />

## Binary Search Tree

- In Binary Search Tree, nodes are arranged to be:
  - The left subtree always contain nodes with values smaller than the node
  - The right subtree is always contain nodes with values greater than the node

### Time/Space Complexity

| Algorithm        | Average case | Worst case |
| ---------------- | ------------ | ---------- |
| Lookup           | O(log N)     | O(n)       |
| Insertion        | O(log N)     | O(n)       |
| Deletion         | O(log N)     | O(n)       |
| Space Complexity | O(n)         | O(n)       |

- O(log N) is better than linear(O(n))
- Binary Search Tree is good for searching. great for comparing things.

#### Balanced vs. Unbalanced BST

- Problem with Binary Search Tree is that it can be unbalanced, which almost looks like linear, having time complexity of O(n)
  - In other words, A Lined List is a kind of maximally-unbalanced binary tree
- A binary search tree is called _balanced_ if every leaf node is not more than a certain distance away from the root than any other leaf.
- To avoid having unbalanced BST, you can use auto-balancing tree like:
  - **AVL Trees**: are a modification of BST that resolve unbalance issue by maintaining the balance factor of each node
  - **Red Black Trees**: are another member of the BST family. Like the AVL tree, a Red Black Tree has self-balancing properties

### Good at:

- Better than O(n)
- Ordered
- Flexible Size

### Bad at:

- No O(1) operations

<br />

## Resources

[Binary Search Tree playground](https://visualgo.net/en/bst)

- [AVL Tree - Playground](https://www.cs.usfca.edu/~galles/visualization/AVLtree.html)
- [AVL Tree - How it Works](https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7))
- [Red Black Tree - Playground](https://www.cs.usfca.edu/~galles/visualization/RedBlack.html)
- [Red Black Tree - How it Works](https://medium.com/basecs/painting-nodes-black-with-red-black-trees-60eacb2be9a5)
- [The difference between AVL Tree and Red Black Tree](https://stackoverflow.com/questions/13852870/red-black-tree-over-avl-tree)
