/** ⭐
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 * A word is a maximal substring consisting of non-space characters only.
 */


// Solution 1: using JS built-in String methods
function lengthOfLastWord(s: string): number {
  const words = s.split(' ').filter(word => word.length > 0);
  return words[words.length - 1].length;
  // OR
  // return s.trim().split(' ').slice(-1)[0].length;
  // OR
  // return s.trim().split(' ').pop().length;
};

lengthOfLastWord('Hello World'); // 5
lengthOfLastWord('   fly me   to   the moon  '); // 4
lengthOfLastWord('luffy is still joyboy'); // 6

// Solution 2: looping from the end
function lengthOfLastWord2(s: string): number {
  let length = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      length++;
    } else {
      if (length > 0) break;
    }
  }
  return length;
};