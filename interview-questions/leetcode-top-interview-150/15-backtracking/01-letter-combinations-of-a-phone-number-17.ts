/** ⭐⭐
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. 
 * Return the answer in any order.
 * A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 */

// Input: digits = "23" -> Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Input: digits = "" -> Output: []
// Input: digits = "2" -> Output: ["a","b","c"]

// using queue
function letterCombinations(digits: string): string[] {
  if (!digits) return [];
  const telephone = [0, 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  
  let combinations = telephone[digits[0]].split('');
  
  for (let i = 1; i < digits.length; i++) {
    const letters = telephone[digits[i]].split('');
    const prevSize = combinations.length;
    
    for (let i = 1; i <= prevSize; i++) {
      const combi = combinations.shift();
      combinations.push(...letters.map(letter => combi + letter));
    }
  }

  return combinations;
};

// reassigning every round
function letterCombinations2(digits: string): string[] {
  if (!digits) return [];
  const telephone = [
    [],
    [],
    ['a','b','c'],
    ['d','e','f'],
    ['g','h','i'],
    ['j','k','l'],
    ['m','n','o'],
    ['p','q','r','s'],
    ['t','u','v'],
    ['w','x','y','z'],
  ];
  
  let combinations = telephone[digits[0]];
  
  for (let i = 1; i < digits.length; i++) {
    const letters = telephone[digits[i]];
    const prev = [...combinations];
    const cur = [];
    for (const char of letters) {
      cur.push(...prev.map(combi => combi + char));
    }
    combinations = cur;
  }

  return combinations;
};