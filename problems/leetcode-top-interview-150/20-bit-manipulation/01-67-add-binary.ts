/** ⭐
 * Given two binary strings a and b, return their sum as a binary string.
 */

// Solution 1: change string into reversed array then iterate to sum until both ends
function addBinary(a: string, b: string): string {
  const arrA = a.split('').reverse();
  const arrB = b.split('').reverse();

  const arr = [];
  let i = 0;
  while (i < Math.max(a.length, b.length)) {
    const sum = Number(arrA[i] ?? 0) + Number(arrB[i] ?? 0) + (arr[i] ?? 0);
    arr[i] = sum % 2;
    if (sum >= 2) {
      arr[i + 1] = Math.trunc(sum / 2);
    }
    i++;
  }
  return arr.reverse().join('');
};