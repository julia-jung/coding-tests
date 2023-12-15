/** ⭐
 * Given a pattern and a string s, find if s follows the same pattern.
 * Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
 */

function wordPattern(pattern: string, s: string): boolean {
  const words = s.trim().split(' ');
  if (pattern.length !== words.length) return false;
  
  const map = new Map();

  for (let i = 0; i < pattern.length; i++) {
    if (map.has(pattern[i])) {
      if (map.get(pattern[i]) !== words[i]) return false;
    } else {
      if (i > words.findIndex((w) => w === words[i])) return false;
    }
    map.set(pattern[i], words[i]);
  }

  return true;
};

wordPattern('abba', 'dog cat cat dog'); // true
wordPattern('abba', 'dog cat cat fish'); // false
wordPattern('aaaa', 'dog cat cat dog'); // false
