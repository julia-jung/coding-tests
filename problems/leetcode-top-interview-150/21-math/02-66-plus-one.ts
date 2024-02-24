/** ⭐
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
 * The digits are ordered from most significant to least significant in left-to-right order. 
 * The large integer does not contain any leading 0's.
 * Increment the large integer by one and return the resulting array of digits.
 */

// Solution 1: iterate from the end
function plusOne(digits: number[]): number[] {
  let carry = 1;
  let i = digits.length - 1;
  while(i >= 0 && carry > 0) {
    if (digits[i] < 9) {
      digits[i--] += carry--;
    } else {
      digits[i--] = 0;
    }
  }

  if (carry > 0) digits.unshift(carry);
  return digits;
};

function plusOneSimplified(digits: number[]): number[] {
  let i = digits.length - 1;
  
  while(i >= 0) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i--] = 0;
  }

  digits.unshift(1);
  return digits;
};


// Failed case => digits: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
function plusOneFailed(digits: number[]): number[] {
  const num = Number(digits.join('')) + 1;
  return num.toString().split('').map(Number); // [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,0,0,0]
}

// Solution 2: BigInt로 변환해서 계산
function plusOne2(digits: number[]): number[] {
  const num = digits.join("");
  const added = num.length > 15 ? BigInt(num) + BigInt(1) : parseInt(num) + 1;

  return [...added.toString()].map(Number)
};