# Data Structure - Array

## Concept

### Time Complexity

| Algorithm        | Average Case | Worst Case |
| ---------------- | ------------ | ---------- |
| Access           | O(1)         | O(1)       |
| Search           | O(n)         | O(n)       |
| Insertion        | O(n)         | O(n)       |
| Deletion         | O(n)         | O(n)       |
| Space Complexity | O(1)         | O(n)       |

### JS Built-in Methods

| methods                           | Time Complexity |
| --------------------------------- | --------------- |
| push(), pop()                     | O(1)            |
| unshift()                         | O(n + m)        |
| splice(), shift(), reverse(), ... | O(n)            |
| sort()                            | O(nlogN)        |

- We can see that Array is not a good option to frequently insert new

### Static vs Dynamic Array

> Arrays are allocated in adjacent blocks of memory when they're created. Therefore, there's no guarantee that we can add more.

- Static Array: is with fixed size (Java, C++)
- Dynamic Array: allows us to copy and rebuild an array at a new location, which with more memory (Javascript, Python)

## When to use

Having something organized and close to each other in memory speeds up processing because it is organized.

The only drawback is that whenever it's not at the absolute end of the array, we have to shift to race, which makes inserts and deletions take longer

### Good at:

- Fast loopups
- Fast push/pop
- Ordered

### Bad at:

- Slow insert
- Slow deletes
- Fixed size (\*If using static array)

## Related Questions

- [ ] [Two Sum](https://leetcode.com/problems/two-sum/description/)

- [ ] [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/description/)

- [ ] [Move Zeroes](https://leetcode.com/problems/move-zeroes/description/)

- [ ] [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/description/)

- [ ] [Rotate Array](https://leetcode.com/problems/rotate-array/description/)

- [ ] [Longest Word](https://coderbyte.com/information/Longest%20Word)
