# Dynamic Programming

> Dynamic Programming is an _optimization technique_ and a way to solve probelms by breaking them down into smaller, simpler subproblems and storing the solutions to those subproblems

- By reusing stored solutions instead of solving the smae subproblems over and over, we can effectively solve the overall problem
- It combines **Divide & Conquer** + **Memoization** technique

<br />

## Caching / Memoization

### Caching

> Caching is a technique to store **frequently accessed data** or information in a temporary location called a _cache_. When the data is needed again, it can be retrieved much more quickly from the cache then from the original source.

- Helps improve the speed and efficiency of accessing data, especially when dealing with large amount of data or frequently accessed information
- Widely used to improve overall system performance

<br />

### Memoization

> Memoization is a technique of caching or storing the **results of epxensive function calls** and then reusing those results when the same function is called again with the same input parameters.

- The idea behind memoization is to avoid repeating expensive calculations by storing the results of those calculations in memory.

<br />

### Caching vs. Memoization

- Caching is used to store and retrieve frequently accessed data
  - e.g. Suppose your application displays a list of products on a page and the data is stored in a database. When multiple user requests for the same page, instead of fetch the data from the database over and over, you can store the data in a cache upon initial fetch, then retrieve the data from the cache for the same request later on.
- Memoization is used to avoid repeating expensive calculations by storing the results of those calculations in memeory for later use
  - e.g. Suppose you have a function in your application that calcuates the Fibonacci sequence. Because the calculation of the Fibonacci sequence is a computationally expensive task, instead of calling functions multiple times for the same input, you can store the results of the calculation in memory with the key of input, then retrieve the result from memory when the function is called again with the same input parameter.

<br />

## When to use

In general, Dynamic programming is useful when a problem can be divided into smaller subproblems that can be solved independently, and the solutions to these subproblems can be combined to solve the overall problem.
By avoiding redundant calculations using memoization, dynamic programming can often provide significant performance improvements over other techniques for solving the same problem.

1. Can be divided into subproblem?
2. Recursive solution?
3. Are there repetitive subproblems?
4. Memoize subproblems

<br />

## Related Questions

- [ ] [House Robber](https://leetcode.com/problems/house-robber/description/)
- [ ] [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)
- [ ] [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/description/)
