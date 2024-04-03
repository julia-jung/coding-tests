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

## Resources

[How to: Work at Google — Example Coding/Engineering Interview](https://www.youtube.com/watch?v=XKu_SEDAykw)\
[ZTM - Interview Cheat Sheet]()
