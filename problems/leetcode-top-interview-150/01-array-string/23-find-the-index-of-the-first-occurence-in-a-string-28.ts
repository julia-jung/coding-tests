/** ⭐
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, 
 * or -1 if needle is not part of haystack.
 */

strStr('sadbutsad', 'sad'); // 0
strStr('leetcode', 'leeto'); // -1

// Solution 1: looping string
function strStr(haystack: string, needle: string): number {
  for (let i = 0 ; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let j = 0;
      while (j < needle.length && haystack[i + j] === needle[j]) j++;
      if (j === needle.length) return i;
    }
  }
  
  return -1;
};


// Solution 2: using built-in String method
function strStr2(haystack: string, needle: string): number {
  return haystack.indexOf(needle);
};