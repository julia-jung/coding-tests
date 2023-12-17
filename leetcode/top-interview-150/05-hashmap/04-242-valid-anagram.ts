/** ⭐
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
 * typically using all the original letters exactly once.
 */

// Solution 1: same with "ransomeNote" but additionally check both maps sizes are same
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  
  const sMap = new Map();
  const tMap = new Map();
  for (const c of s) {
    sMap.set(c, (sMap.get(c) ?? 0) + 1);
  }
  for (const c of t) {
    tMap.set(c, (tMap.get(c) ?? 0) + 1);
  }

  if (sMap.size !== tMap.size) return false;
  for (const [char, count] of sMap) {
    if (!tMap.has(char) || tMap.get(char) !== count) return false;
  }

  return true;
};

isAnagram('anagram', 'nagaram'); // true
isAnagram('rat', 'car'); // false


// Solution 2: add count from first string, substract from second one then check all values are 0
function isAnagram2(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  
  const map = new Map();
  for (const c of s) {
    map.set(c, (map.get(c) ?? 0) + 1);
  }
  for (const c of t) {
    if (!map.has(c)) return false;
    map.set(c, map.get(c) - 1);
  }

  for (const count of map.values()) {
    if (count !== 0) return false;
  }

  return true;
};

function isAnagram3(s: string, t: string): boolean {
  return s.split('').sort().join() === t.split('').sort().join();
};