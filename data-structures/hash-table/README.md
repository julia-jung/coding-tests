# Data Structure - Hash Table

## Concepts

> A Hash Table is a type of data structure that stores key-value pairs. Getting a matching value with a key is very easy with Hash Table.

- The `key` is sent to a `hash function`(e.g. SHA-1, SHA-256) which decides where the data is stored in the Hash Table

### Hash Function

- Hash function takes input(`key`), performs arithmetic operation on it and generates a value of a certain length(a hash value or hash)
- Hash value is used for indexing and locating items in databases and is normally smaller than the original because it is easier to find the shorter hash value than the longer string. (_message digesting_)
- With same key, hash function always generate the same hash value
- Hash function always works one-way. You can't get the key with a generated hash value.
  - This is why Hashing is also used in encryption and this case hash function(e.g. SHA-256) is more complicated than usual and takes longer time. (_hashing algorithm_)

### Collisions

A collision occurs when two keys get mapped to the same index. There are several ways of handling collisions.

- One way is Chaining using **Linked List**. The hash table will be an array of linked lists. All keys mapping to the same index will be stored as linked list nodes at that index.

### Hash Table in JS - Object, Map, and Set

- object only allow string as a key
- Map and set allows any types
- Set only stores key

### Time Complexity

| Algorithm        | Average Case | Worst Case |
| ---------------- | ------------ | ---------- |
| Access           | O(1)         | O(1)       |
| Search           | O(1)         | O(n)       |
| Insertion        | O(1)         | O(n)       |
| Deletion         | O(1)         | O(n)       |
| Space Complexity | O(n)         | O(n)       |

<br />

## When to use

### Hash Table vs Array

| Algorithm        | HashTable | Array |
| ---------------- | --------- | ----- |
| Access           | O(1)      | O(1)  |
| **Search**       | **O(1)**  | O(n)  |
| **Insertion**    | **O(1)**  | O(n)  |
| **Deletion**     | **O(1)**  | O(n)  |
| Space Complexity | O(n)      | O(n)  |

- Hash Table is really fast for searching, insertion, and deletion
- Hash Tables are all over the places in the memory

### Good at:

- Fast lookups (_Good collision resolution needed_)
- Fast Inserts
- Flexible Keys (`Map` in JS)

### Bad at:

- Unordered\
   : The disadvantage of hash tables is that they are unordered. It's difficult to go through everything in an orderly fashion.
- Slow key iteration\
   : Furthermore, it has slow key iteration. That is, if I want to retrieve all the keys from a hash table, I have to navigate the entire memory space.

<br />

## Resources

[Hash Table - Wikipedia](https://en.wikipedia.org/wiki/Hash_table)
[Hash Table Collision visualization](https://www.cs.usfca.edu/~galles/visualization/OpenHash.html)
