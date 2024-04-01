/** ⭐
 * Write an algorithm to determine if a number n is happy.
 * A happy number is a number defined by the following process:
 *  Starting with any positive integer, replace the number by the sum of the squares of its digits.
 *  Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
 *  Those numbers for which this process ends in 1 are happy.
 * Return true if n is a happy number, and false if not.
 */

isHappy(19); // true
isHappy(2); // false

// Solution
function isHappy(n: number): boolean {
  if (n === 1) return true;
  const map = new Map();

  while (n > 1) {
    // split digits
    const nums = `${n}`.split('').map(num => +num);
    // replace with sum of the squares of each digits
    n = nums.reduce((sum, num) => sum + num ** 2, 0);

    if (n === 1) return true;
    // If newly calculated n is already in the map, loop will be endless
    if (map.has(n)) return false;
    
    map.set(n, 1);
  }
};

// Accepted but not good solution
function isHappy2(n: number): boolean {
  let i = 0;
  const maxLoop = 1000;

  while (n > 1 && i < maxLoop) {
    const nums = `${n}`.split('').map(num => +num);
    n = 0;
    for (const num of nums) {
      n += num * num;
    }
    i++;
  }

  return n === 1;
};