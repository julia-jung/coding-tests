/** ⭐
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 */

function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  const s = x.toString();
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left++] !== s[right--]) return false;
  }
  return true;
};
isPalindrome(121); // true
isPalindrome(-121); // false ("-121" !== "121-")
isPalindrome(10); // false ("10" !== "01")

// Solution 2: using one var
function isPalindrome2(x: number): boolean {
  if (x < 0) return false;

  const s = x.toString();
  let i = 0;

  while (i < s.length / 2) {
    if (s[i] !== s[s.length - 1 - i]) return false;
    i++;
  }
  return true;
};