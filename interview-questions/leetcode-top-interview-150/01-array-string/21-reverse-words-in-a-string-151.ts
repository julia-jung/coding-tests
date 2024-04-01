/**
 * Given an input string s, reverse the order of the words.
 * A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
 * Return a string of the words in reverse order concatenated by a single space.
 * Note that s may contain leading or trailing spaces or multiple spaces between two words. 
 * The returned string should only have a single space separating the words. Do not include any extra spaces.
 */

reverseWords("the sky is blue"); // "blue is sky the"
reverseWords("  hello world  "); // "world hello"
reverseWords("a good   example"); // "example good a"



function reverseWords(s: string): string {
  const words = s.trim().split(' ').filter(w => w.length > 0);
  return words.reverse().join(' ');
};

function reverseWords2(s: string): string {
  const words = s.split(' ');
  let reversed = '';
  for (let i = words.length - 1; i >= 0; i--) {
    if (words[i].length > 0) {
      reversed += words[i] + ' ';
    }
  }
  return reversed.trim();
}