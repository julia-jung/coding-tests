/** ⭐⭐
 * You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
 * Evaluate the expression. Return an integer that represents the value of the expression.
 * 
 * Note that:
 *  - The valid operators are '+', '-', '*', and '/'.
 *  - Each operand may be an integer or another expression.
 *  - The division between two integers always truncates toward zero.
 *  - There will not be any division by zero.
 *  - The input represents a valid arithmetic expression in a reverse polish notation.
 *  - The answer and all the intermediate calculations can be represented in a 32-bit integer.
 */

evalRPN(["2", "1", "+", "3", "*"]); // ((2 + 1) * 3) = 9
evalRPN(["4", "13", "5", "/", "+"]); // (4 + (13 / 5)) = 6
evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]); // ((10 * (6 / ((9 + 3) * -11))) + 17) + 5

function evalRPN(tokens: string[]): number {
  if (tokens.length === 1) return Number(tokens[0]);

  const operators = ['+', '-', '*', '/'];  
  const nums = [];
  
  for (let i = 0; i < tokens.length; i++) {
    if (operators.includes(tokens[i])) {
      const num2 = nums.pop();
      const num1 = nums.pop();
      const result = calculate(num1, num2, tokens[i]);
      nums.push(result);
    } else {
      nums.push(Number(tokens[i]));
    }
  }

  return nums[0];

  function calculate(num1: number, num2: number, operator: string) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return Math.trunc(num1 / num2); 
    }  
  }
};