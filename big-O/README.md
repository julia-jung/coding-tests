# Big O

> Big O notation is the language we can use for talking about how long an algorithm takes to run(Time Complexity) or how much memeory it needs(Space Complexity).\
> It tells which one is better than the other in terms of scale.

<br />

## How to calculate

### What cause Time Complexity?

- Operations (+,-, \*, /)
- Comparisons (<, >, ===)
- Looping (for, while)
- Outside Function call (function())

### What cause Space Complexity?

- Variables
- Data structures
- Function Call
- Allocations

### Rules

1. Always Worst Case\
   If we are finding a specific element looping through an array, the element could possibly at the first index of the array and we break the loop after finding it, still it has `O(n)` instead of `O(1)`, becuase in the worst case senario, the element could be at the last index of the array.

2. Remove Constants\
   `O(2n + 1) => O(n)`

3. Different terms for inputs

- Different inputs should have different variables: O(a + b).
- A and B arrays nested would be: O(a \* b)

4. Drop Non Dominants\
   `O(x^2 + 3x + 100 + x/2) => O(x^2)`\
   If x is small enough, 100 will be bigger than x^2 but when we say Big O, we care about scale.

<br />

## Big Os

### O(1): Constant

- no loops
- Hashmap lookup
- Array access and update
- Pushing and poping elements from a stack
- Finding and applying amth formula
- Typically for `n > 10^9`

### O(log N): Logarithmic

log(N) grows very slowly.

- lookup by primary key in a relational database
- **Binary search** (when its alreay sorted)
- Balanced binary search
- Processing the digits of a number
- Typically for `n > 10^8`

### O(n): Linear

Typically means looping through a linear data structure a constant number of times

- Going through array/linked list
- **Two pointers**
- Some types of greedy
- Tree/Graph traversal
- Stack/Queue
- Typically for `n <= 10^6`

### O(K log(N))

- Heap push/pop `K` times.
  - When you encounter problmes that seek the "top K elements", you can often solve them by pushing and popping to a heap K teims, resulting in an `O(K log(N))` runtime (e.g.K closest points, merge K sorted lists)
- Binary search `K` times

### O(N log(N)): Linearithmic

- **Sorting**(Merge sort, Quick sort) operations
  - The default sorting algorithm's expected runtime in all mainstream languages is `N log(N)`
- **Divide and conquer** with a linear time merge operation.
  - Divide is normally `log (N)` and if merge is `O(N)` then the overall runtime is `O(N log(N))` (e.g. smaller numbers to the right)

### O(n^2): Quadratic

- Nested Loops (e.g. visiting each matrix entry)
- Many brute force solutions
- Typically for `n <= 3000`
  - For small N < 1000, this is not that bad for modern computers. You can probably pass most Leetcode tests with quadratic time for tiny Ns.
  - However, in an interview, your solution usually has to do better than quadratic time to impress the interviewer if there is a better solution.

### O(n^3): Cubic

- Triple loop

### O(2^n): Exponential

Grows very rapidly.

- Often requires **memoization** to avoid repeated computations and reduce complexity
- Combinatorial problems, backtracking (e.g. subsets)
- Often involves **recursion** and is harder to analyze time complexity at first sight (e.g. fibonacci sequence)
- Typcially for `n <= 20`

### O(n!): Factorial

Grows insanly rapidely

- Looping for every element
- Combinatorial problems, backtracking (e.g. permutations)
- Often involves recursion and is harder to analyze time complexity at first sight
- Typically for `n <= 12`

<br />

## Resources

[ZTM - Big O Cheatsheet](https://zerotomastery.io/cheatsheets/big-o-cheat-sheet/?utm_source=udemy&utm_medium=coursecontent)\
[bigocheatsheet.com](https://www.bigocheatsheet.com/)
[AlgoMonster - Runtime summary](https://algo.monster/problems/runtime_summary)
