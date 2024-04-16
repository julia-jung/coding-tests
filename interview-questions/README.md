# Technical Interview Cheatsheet

## Understanding the Interview

### What is the purpose

> Will you be able to solve the company's problem?

- But it's not necessarily about the solution to a problem
- It's about **the thought process** and knowing the tradeoffs between data structures and alrogithms, space and time complexity

### What are companys looking for

1. **Analytic Skills**\
   : How can you think through problems and analyze things?
2. **Coding Skills**\
   : Do you code well, by writing clean, simple, organized, readable code?
3. **Technical Skills**\
   : Do you know the fundamentals of the job you're applying for? or Do you just memorize the solutions?
4. **Communication Skills**\
   :Does your personality match the companies’ culture? Can you communicate with others in a team?

## How to Solve Coding Problems

### Coding Interview Tips

- Don't jump into coding right away. Ask for clarification:

  - Make sure you have all the details
  - Write down the key points at the top
  - Double check: What are the inputs/outputs.
  - What is the most important value of the problem? What is the main goal?
  - BUT, _Don't be annoying and ask too many questions._

- Start with the **naive/brute force approach**. And optimize your approach with the interviewer:

  - Speak about First thing that comes into mind.
  - Mention Time complexity; Tell them why this approach is not the best.
  - See where you may be able to break things. Check if there is any repetitions, bottlenecks like O(n^2) or unnecessary work.
  - Make sure you used all the information the interview gave you.
  - If the interviewer is giving you advice/tips/hints, follow them.
  - **Communicate your thought process as much as possible.** Don't worry about finishing it fast. Every part of the interview matters.

- Before you start coding, walk through your code and write down the steps you are going to follow.

  - Break up your code into small pieces and add some comments.
  - If codes get complex, modularize your code by making seperate functions.

- Start write something with the easy part:

  - Keep in mind: A lot of interviews ask questions that you won't be able to fully answer on time.
  - So think: What can I show in order to show that I can do this and I am better than other coders.
  - **Don't use bad/confusing names like `i` and `j`, Write code that reads well.**

- Check your solution If it:

  - works
  - with good use of Data Structure
  - re-use codes / does not repeat yourself
  - is Modular - Make code more readable, maintainable and testable
  - has less than O(n^2) Time Complexity - avoid nested loop. Two sepearte loops are better.
  - has low Space Complexity - Recursion can cause stack overflow, copying of large array may exceed memeory of machine

- Do not just finish. Always check for edge cases, false inputs:

  - Check for no params, 0, undefined, null, massive arrays, async doed, etc..
  - Ask the interviewer if we can make assumption about the code.

- Finally, Talk to the interviewer where you'd improve the code:

  - Are there different approaches?
  - Is it readable?
  - What would you google to improve?
  - How can performance be improved?

- Prepare for follow-up questions:
  - The interviewer may ask you about scale, such as how you would handle the problem if the whole input is too large to fit into memory.
  - The asnwer is usually a divide-and-conquer approach

### How to Approach Solving Problems

- **Hash Maps** are usually the answer to improve Time Complexity

- If it's a sorted array, use **Binary Search** to achieve O(log N)

- Try Sorting your input

- Hash Tables and precomputed(i.e. sorted) information are some of the best ways to optimize your code

- Look at the Time vs Space tradeoff. Sometimes storing extra state in memeory can help the time

<br />

## Top Interview Questions

- [ ] #344 Reverse String
- [ ] #412 Fizz Buzz
- [ ] #136 Single Number
- [ ] #104 Maximum Depth of Binary Tree
- [ ] #283 Move Zeroes
- [ ] #371 Sum of Two Integers
- [ ] #206 Reverse Linked List
- [ ] #171 Excel Sheet Column Number
- [ ] #169 Majority Element
- [ ] #13 Roman to Integer
- [ ] #237 Delete Node in a Linked List
- [ ] #122 Best Time to Buy and Sell Stock II
- [ ] #242 Valid Anagram
- [ ] #217 Contains Duplicate
- [ ] #387 First Unique Character in a String
- [ ] #108 Convert Sorted Array to Binary Search Tree
- [ ] #268 Missing Number
- [ ] #350 Intersection of Two Arrays II
- [ ] #121 Best Time to Buy and Sell Stock
- [ ] #21 Merge Two Sorted Lists
- [ ] #202 Happy Number
- [ ] #118 Pascal's Triangle
- [ ] #70 Climbing Stairs
- [ ] #101 Symmetric Tree
- [ ] #53 Maximum Subarray
- [ ] #326 Power of Three
- [ ] #191 Number of 1 Bits
- [ ] #198 House Robber
- [ ] #66 Plus One
- [ ] #1 Two Sum (Amazon)
- [ ] #38 Count and Say
- [ ] #26 Remove Duplicates from Sorted Array
- [ ] #172 Factorial Trailing Zeroes
- [ ] #20 Valid Parentheses
- [ ] #141 Linked List Cycle
- [ ] #234 Palindrome Linked List
- [ ] #88 Merge Sorted Array
- [ ] #155 Min Stack
- [ ] #14 Longest Common Prefix
- [ ] #160 Intersection of Two Linked Lists
- [ ] #28 Implement strStr()
- [ ] #69 Sqrt(x)
- [ ] #190 Reverse Bits
- [ ] #125 Valid Palindrome
- [ ] #189 Rotate Array
- [ ] #204 Count Primes
- [ ] #7 Reverse Integer
- [ ] #94 Binary Tree Inorder Traversal

### Interview Questions by Amazon

- [ ] #1 Two Sum
- [ ] #2 Add Two Numbers
- [ ] #3 Longest Substring Without Repeating Characters
- [ ] #200 Number of Islands
- [ ] #20 Valid Parentheses
- [ ] #5 Longest Palindromic Substring
- [ ] #138 Copy List with Random Pointer
- [ ] #121 Best Time to Buy and Sell Stock
- [ ] #21 Merge Two Sorted Lists
- [ ] #70 Climbing Stairs

### Interview Questions By Facebook

- [ ] #1 Two Sum
- [ ] #200 Number of Islands
- [ ] #20 Valid Parentheses
- [ ] #121 Best Time to Buy and Sell Stock
- [ ] #56 Merge Intervals
- [ ] #206 Reverse Linked List

### Interview Questions By Google

- [ ] #155 Min Stack
- [ ] #200 Number of Islands
- [ ] #20 Valid Parentheses
- [ ] #42 Trapping Rain Water
- [ ] #56 Merge Intervals
- [ ] #681 Next Closest Time
- [ ] #139 Word Break
- [ ] #31 Next Permutation

<br />

## Resources

[How to: Work at Google — Example Coding/Engineering Interview](https://www.youtube.com/watch?v=XKu_SEDAykw)\
[ZTM - Interview Cheat Sheet]()
