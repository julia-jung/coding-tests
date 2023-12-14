/** ⭐
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.
 */

// Solution 1: using one map
function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = new Map();
  
  for (const char of magazine) {
    let count = map.has(char) ? map.get(char) + 1 : 1;
    map.set(char, count);
  }
  for (const char of ransomNote) {
    const count = map.get(char);
    if (!count || count < 1) {
      return false;
    }
    map.set(char, count - 1);
  }

  return true;
};

canConstruct('a', 'b'); // false
canConstruct('aa', 'ab'); // false
canConstruct('aa', 'aab'); // true

// Solution 2: using 2 maps for both string
function canConstruct2(ransomNote: string, magazine: string): boolean {
  const rMap = new Map();
  const mMap = new Map();

  for (let letter of ransomNote) {
    rMap.set(letter, (rMap.get(letter) ?? 0) + 1);
  }

  for (let letter of magazine) {
    mMap.set(letter, (mMap.get(letter) ?? 0) + 1);
  }

  for (let [k,v] of rMap) {
    if (!mMap.has(k) || mMap.get(k) < v) {
      return false;
    }
  }

  return true;
};