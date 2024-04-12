# Data Structures

## Understanding Data Structures

### What is a Data Structure?

You can think of Data Structure as simply a file cabinet for a specific type of items.\
We can put things in data structures, and get things out from data structures.\
(e.g. Array, Object in Javascript)

### Why they are important?

#### A bit of a background

Computer has `CPU`, `RAM`, and `Storage`. Data on `Strage` is permanent. On the other hand, In `Ram`, you loose your data when you shut off the system. But, `CPU` gets data faster from the Memory than from the Storage.

Computer is a huge shelves to store data and each shelf(memeory) has the address and 8 bit numbers(=> Byte) storing data. RAM can access memory really fast because they have connections to each shelf. (That's why they are called _Random Access Memory_). CPU also has tiny memory, called CPU cache(LRU cache) to store a copy of recent stuff.

For example, if we want to store a number in variable,
when we represent integer in computer, that is 32 bits, is stored in memory of 4 blocks.

Other data types are same. Each data type has a number of bits associated with it, needs to get stored in the system.
And the system allocates the storage and then the CPU reads data from that storage.

#### A data structure is an arrangement of data

You can define the way you interact with the data and how it is arranged in RAM by choosing the data structure. Some data structures in RAM are organized right next to each other, some are apart from each other, and they have pros and cons to get/write data.\
**Our goal is to minimize the operation that we need to do for the CPU to get/write the information.**

Each language has their data structures to hold different types of data. Some languages has built-in data structures, for example, JAVA has Stack, LinkedList, PriorityQueue, etc..

<br />

## Types of Data Structures

### [Data Structures Map](https://coggle.it/diagram/W5E5tqYlrXvFJPsq/t/master-the-interview-click-here-for-course-link/c25f98c73a03f5b1107cd0e2f4bce29c9d78e31655e55cb0b785d56f0036c9d1)

### Operations on Data Structures

- Access: How do we access this data that we have on our computer
- Traversal: Access each data item exactly once
- Searching: find out the location of the data item in a given collection
- Insertion: Add a new data item in a given colleation of items
- Deletion: Delete data from the collection of items
- Sorting: have data that is sorted

|                    | Access          | Search          | Insertion       | Deletion        | SpaceComplexity |
| ------------------ | --------------- | --------------- | --------------- | --------------- | --------------- |
| Array              | **O(1)**        | O(n)            | O(n)            | O(n)            | O(n)            |
| Stack              | O(n)            | O(n)            | **O(1)**        | **O(1)**        | O(n)            |
| Queue              | O(n)            | O(n)            | **O(1)**        | **O(1)**        | O(n)            |
| Singly-Linked List | O(n)            | O(n)            | **O(1)**        | **O(1)**        | O(n)            |
| Doubly-Linked List | O(n)            | O(n)            | **O(1)**        | **O(1)**        | O(n)            |
| Hash Table         | N/A             | **O(1)** / O(n) | **O(1)** / O(n) | **O(1)** / O(n) | O(n)            |
| Binary Search Tree | O(log N) / O(n) | O(log N) / O(n) | O(log N) / O(n) | O(log N) / O(n) | O(n)            |

<br />

## Resources

[Data Structure - Wikipedia](https://en.wikipedia.org/wiki/List_of_data_structures)\
[Data Structure Cheat Sheet](https://zerotomastery.io/cheatsheets/data-structures-and-algorithms-cheat-sheet/#what-are-data-structures)\
[Register and RAM - Youtube](https://www.youtube.com/watch?v=fpnE6UAfbtU)
