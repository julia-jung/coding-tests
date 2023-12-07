/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 * For example, 2 is written as II in Roman numeral, just two ones added together. 
 * 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
 * Roman numerals are usually written largest to smallest from left to right. 
 * However, the numeral for four is not IIII. Instead, the number four is written as IV. 
 * Because the one is before the five we subtract it making four. 
 * The same principle applies to the number nine, which is written as IX. 
 * There are six instances where subtraction is used:
 * I can be placed before V (5) and X (10) to make 4 and 9. 
 * X can be placed before L (50) and C (100) to make 40 and 90. 
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 * Given a roman numeral, convert it to an integer.
 */

// Solution: 
// Iterate string by each charactor and add value representing the roman charactor
// But when the number is smaller than the later one, it needs to be subtracted
function romanToInt2(s: string): number {
  const mapper = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  let result = 0;
  for(let i = 0; i < s.length; i++){
    if (i === s.length - 1 || mapper[s[i]] >= mapper[s[i+1]]) {
      result += mapper[s[i]];
    } else {
      result -= mapper[s[i]];
    }
  }
  return result;
};

// Failed
function romanToIntFailed(s: string): number {
  const mapper = {
    'CM': 900,
    'CD': 400,
    'XC': 90,
    'XL': 40,
    'IX': 9,
    'IV': 4,
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1,
  };

  let result = 0;
  for (const [roman, int] of Object.entries(mapper)) {
    const matched = s.match(roman);
    if (matched) {
      result += int * matched.length;
      s.replaceAll(roman, '');
    }
  }
  return result;
};