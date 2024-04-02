# Big O

## What is Big O

> Big O notation is the language we can use for talking about how long an algorithm takes to run(Time Complexity) or how much memeory it needs(Space Complexity).\
> It tells which one is better than the other in terms of scale.

## How to calculate

### Time Complexity

#### What can cause Time in a Function?

- Operations (+,-, \*, /)
- Comparisons (<, >, ===)
- Looping (for, while)
- Outside Function call (function())

### Space Complexity

#### What causes Space Complexity?

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

## Big Os

#### O(1): Constant

no loops

#### O(log N): Logarithmic

usually searching algorithms have log n if they are sorted (Binary Search)

#### O(n): Linear

for loops, while loops through n items

#### O(n\*log N): Linearithmic

usually sorting operations

#### O(n^2): Quadratic

every element in a collection needs to be compared to ever other element. Two nested loops

#### O(n^3): Cubic

Triple loop

#### O(2^n): Exponential

recursive algorithms that solves a problem of size N

#### O(n!): Factorial

you are adding a loop for every element

## Recources

[ZTM - Big O Cheatsheet](https://zerotomastery.io/cheatsheets/big-o-cheat-sheet/?utm_source=udemy&utm_medium=coursecontent)\
[bigocheatsheet.com](https://www.bigocheatsheet.com/)
