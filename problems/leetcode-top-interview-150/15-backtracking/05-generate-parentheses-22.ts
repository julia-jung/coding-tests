/** ⭐⭐
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 */

// Input: n = 3 -> Output: ["((()))","(()())","(())()","()(())","()()()"]
// Input: n = 1 -> Output: ["()"]

function generateParenthesis(n: number): string[] {
  const combinations = [];
  backtrack();
  return combinations;

  function backtrack(combination: string = '', opening: number = n, closing: number = n) {
    if (!isValid(combination)) return;
    if (combination.length === n * 2) {
      combinations.push(combination);
    }

    if (opening > 0) backtrack(combination + '(', opening - 1, closing);
    if (closing > 0) backtrack(combination + ')', opening, closing - 1);
  }

  function isValid(str: string): boolean {
    const stack = [];
    for (const c of str) {
      if (c === '(') {
        stack.push(c);
      } else {
        if (!stack.length) return false;
        stack.pop();      
      }
    }
    return true;
  }
};