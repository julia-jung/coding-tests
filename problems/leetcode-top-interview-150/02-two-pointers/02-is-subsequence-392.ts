/** ⭐
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 * A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters 
 * without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 */

isSubsequence('abc', 'ahbgdc'); // true
isSubsequence('axc', 'ahbgdc'); // false

// using two pointers for each string
// Solution 1: iterating "t", move pointer of "s" if condition is satisfied
function isSubsequence(s: string, t: string): boolean {
  if (s === t) return true;
  if (s.length > t.length) return false;

  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) i++;
    j++;
  }

  return i === s.length;
};

// Solution 2: iterating "s", move pointer of "t" if condition is not satisfied
function isSubsequence2(s: string, t: string): boolean {
  let i = 0;
  let j = 0;

  while (i < s.length) {
    while (j < t.length && t[j] !== s[i]) j++;
    if (j >= t.length) return false;
    i++;
    j++
  }

  return true;
};
