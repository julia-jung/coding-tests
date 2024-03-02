/** ⭐
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 */

function isValid(s: string): boolean {
  const open = ['(', '{', '['];
  const close = [')', '}', ']'];
  const stack = [];

  for (const c of s) {
    if (open.includes(c)) {
      stack.push(open.findIndex(p => p === c)); // push index of open array
    }
    if (close.includes(c)) {
      if (stack.pop() !== close.findIndex(p => p === c)) return false; // ensure it match with checking indexes
    }
  }
  return stack.length === 0;
}

isValid("()"); // true
isValid("()[]{}"); // true
isValid("(]"); // false