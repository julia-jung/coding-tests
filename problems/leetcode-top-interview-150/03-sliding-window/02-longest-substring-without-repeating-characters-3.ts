/**
 * Given a string s, find the length of the longest 
 *  [substring: A substring is a contiguous non-empty sequence of characters within a string.]
 * without repeating characters.
 */

lengthOfLongestSubstring("abcabcbb"); // 3 ('abc')
lengthOfLongestSubstring("bbbbb"); // 1 ('b')
lengthOfLongestSubstring("pwwkew"); // 3 ('wke')

function lengthOfLongestSubstring(s: string): number {
  let substr = ''
  let maxLength = 0;
  
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    let index = substr.indexOf(char);
    // if current char is alreay in substr so far
    if (index >= 0) {
      // drop the part until the index
      substr = substr.slice(index + 1);
    }
    
    substr += char;
    maxLength = Math.max(maxLength, substr.length);
  }

  return maxLength;
};

function lengthOfLongestSubstring2(s: string): number {
  let substring = '';
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    substring = '';
    let j = i;
    while (j < s.length && !substring.includes(s[j])) {
      substring += s[j++];
    }
    maxLength = Math.max(maxLength, j - i);
  }

  return maxLength;
};