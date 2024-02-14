/** ⭐⭐
 * Given an integer, convert it to a roman numeral.
 */


// Solution 1: using Map
function intToRoman(num: number): string {
  let roman = '';
  const map = new Map([
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
  ]);
  
  for (const [key, value] of map) {
    while(num >= value) {
      num -= value;
      roman += key;
    }
  }

  return roman;
};

// Solution 2: using Object
function intToRoman2(num: number): string {
  let roman = '';
  const mapper = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000,
  };
  
  const mapperArr = Object.entries(mapper).reverse();
  
  for (const [key, value] of mapperArr) {
    if (num >= value) {
      let count = Math.trunc(num / value);
      while(count > 0) {
        roman += key;
        count--;
      }
      num %= value;
    }
  }

  return roman;
};

intToRoman(3); // 'III'
intToRoman(58); // 'LVIII'
intToRoman(1994); // 'MCMXCIV'