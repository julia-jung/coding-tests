# Recursion

## Concept

> Recursion is the process in which a function calls itself directly or indirectly. The function is called a Recursive Function.

- Recursion is not exactly an algorithm but more of a fundamental concept in programming when learning about data structures and algorithms

- Recursive algorithm is essential to **divide and conquer paradigm**
  - The idea is to divide bigger problems into smaller subproblems and the subproblem is some constant fraction of the original problem
  - The way recursion works is by solving the smaller subproblems individually and then aggregating the results to return the final solution

### How to make a Recursive Function

1. Identify the base case (where the recursion stops)
   - When you make recursive function, you must have a base case where the function stops making new recursive calls. Otherwise, the function calls will never stop and eventually a **stack overflow** will occur.
2. Identify the recursive case
3. Implement function to get closer to the base case and return when needed.
   - Usually you have 2 returns, one for the base case and the other for the recursive case

<br />

## Recursion vs. Iteration

Anything you do with recursion CAN be done iteratively (loop)
Then why would you want to do recursively?

| Recursion                                                                                                                                                                                                                                | Iteration                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Recursion uses the selection structure                                                                                                                                                                                                   | Iteration uses the repetition structure                                           |
| Infinite recursion occurs if the step in recursion doesn't reduce the problem to a smaller problem. It also becomes infinite recursion if it doesn't convert on a specific condition. This specific condition is known as the base case. | An infinite loop occurs when the condition in the loop doesn't become False ever. |
| Recursion is slower than iteration since it has the overhead of maintaining and updating the stack.                                                                                                                                      | Iteration is quick in comparison to recursion. It doesn't utilize the stack.      |
| Recursion uses more memory in comparison to iteration.                                                                                                                                                                                   | Iteration uses less memory in comparison to recursion.                            |
| Recursion reduces the size of the code.                                                                                                                                                                                                  | Recursion reduces the size of the code. Iteration increases the size of the code. |
| Time Complexity: Exponential O(2^n)                                                                                                                                                                                                      | Time Complexity: Linear O(n)                                                      |

<br />

## When to use

### Pros:

- DRY
- Readability

### Cons:

- Large Stack

### Consider using Recursion in a situation:

- Everytime you are using a **tree or converting something into a tree**
  1. Divide into a number of subproblems that are smaller instances of the same problem
  2. Each instance of the subproblem is identical in nature
  3. The solution of each subproblem can be combined to solve the problem at hand
- **Divide and Conquer**

<br />

## Related Questions

### Essential

- [ ] [22. Generate Parentheses](https://leetcode.com/problems/generate-parentheses/description/)
- [ ] [77. Combinations](https://leetcode.com/problems/combinations/)
- [ ] [78. Subsets](https://leetcode.com/problems/subsets/description/)

### Recommended Practice

- [ ] [17. Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/)
- [ ] [90. Subsets II](https://leetcode.com/problems/subsets-ii/description/)
- [ ] [46. Permutations](https://leetcode.com/problems/permutations/description/)
- [ ] [37. Sudoku Solver](https://leetcode.com/problems/sudoku-solver/description/)
- [ ] [Strobogrammatic Number II (LeetCode Premium)](https://leetcode.com/problems/strobogrammatic-number-ii/description/)

<br />

## Recourses

[Technical Interview Handbook - Recursion CheatSheet](https://www.techinterviewhandbook.org/algorithms/recursion/)\
[Tail call optimization](https://2ality.com/2015/06/tail-call-optimization.html)
