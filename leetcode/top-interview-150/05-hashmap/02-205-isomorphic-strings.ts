/** ⭐
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving the order of characters. 
 * No two characters may map to the same character, but a character may map to itself.
 */

// Solution 1: using one Map
function isIsomorphic(s: string, t: string): boolean {
  if (s.length != t.length) return false;
  
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (map.has(sChar)) {
      // If sChar has already mapped to other than tChar
      if (map.get(sChar) !== tChar) return false;
    } else {
      // If sChar is first occurence of 's' but tChar is not the first occurence of 't'
      // which means tChar has already mapped to other than sChar
      if (t.indexOf(tChar) < i) return false;
    }

    map.set(sChar, tChar);
  }

  return true;
};

isIsomorphic('egg', 'add'); // true
isIsomorphic('foo', 'bar'); // false
isIsomorphic('paper', 'title'); // true


// Solution 2: using two Map
function isIsomorphic2(s: string, t: string): boolean {
  if (s.length != t.length) return false;
  
  const sToTMap: Map<string, string> = new Map();
  const tToSMap: Map<string, string> = new Map();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (
      (sToTMap.has(sChar) && sToTMap.get(sChar) !== tChar) ||
      (tToSMap.has(tChar) && tToSMap.get(tChar) !== sChar)
    ) {
      return false;
    }
    sToTMap.set(sChar, tChar);
    tToSMap.set(tChar, sChar);
  }

  return true;
};

// Solution 3: build maps first and compare values
function isIsomorphic3(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  
  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const idxs = sMap.get(s[i]) ?? [];
    sMap.set(s[i], [...idxs, i]); 
  }
  for (let i = 0; i < s.length; i++) {
    const idxs = tMap.get(t[i]) ?? [];
    tMap.set(t[i], [...idxs, i]);
  }

  const sArr = [...sMap.values()];
  const tArr = [...tMap.values()];
  if (sArr.length !== tArr.length) return false;

  for(let i = 0; i < sArr.length; i++) {
    if (sArr[i].length !== tArr[i].length) return false;
    for (let j = 0; j < sArr[i].length; j++) {
      if (sArr[i][j] !== tArr[i][j]) return false;
    }
  }
  
  return true;
};


// Failed Case: isIsomorphic("bbbaaaba", "aaabbbba") -> output: true / expected: false
function isIsomorphicFailed1(s: string, t: string): boolean {
  const sMap = new Map();
  const tMap = new Map();

  for (const c of s) {
    sMap.set(c, (sMap.get(c) ?? 0) + 1); 
  }
  for (const c of t) {
    tMap.set(c, (tMap.get(c) ?? 0) + 1); 
  }

  if (sMap.size !== tMap.size) return false;

  const sArr = [...sMap.values()].sort();
  const tArr = [...tMap.values()].sort();

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] !== tArr[i]) return false;
  }
  
  return true;
};

// Failed Case: isIsomorphic("badc", "baba") -> output: true / expected: false
function isIsomorphicFailed2(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  
  let i = 1;
  let j = 1;
  while (i < s.length && j < t.length) {
    while (s[i] === s[i - 1]) i++;
    while (t[j] === t[j - 1]) j++;
    if (i++ !== j++) return false;
  }

  return true;
};