/** ⭐
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
 * it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 */

isPalindrome("A man, a plan, a canal: Panama"); // true
isPalindrome("race a car"); // false
isPalindrome(" "); // true

// Solution 1: replacing with RegExp
function isPalindrome(s: string): boolean {
  const convertedStr = s.toLowerCase().replace(/[^0-9a-z]/gi, '');

  let left = 0;
  let right = convertedStr.length - 1;

  while (left <= right) {
    if (convertedStr[left++] !== convertedStr[right--]) return false;
  }
  return true;
};


// Solution: without RegExp 
function isPalindrome2(s: string): boolean {
  s = s.toLowerCase();
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    while (!isAlphaNumeric(s[l])) l++;
    while (!isAlphaNumeric(s[r])) r--;

    if (s[l++] !== s[r--]) {
      return false;
    }
  }

  return true;
  
  function isAlphaNumeric(c: string): boolean {
    return (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
  }
};