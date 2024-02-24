/** ⭐⭐
 * Given an array of integers `citations` where `citations[i]` is the number of citations a researcher received for their ith paper, 
 * return the researcher's h-index.
 * According to the definition of h-index on Wikipedia: 
 *  The h-index is defined as the maximum value of h such that the given researcher has published 
 *  at least h papers that have each been cited at least h times.
 */

hIndex([3, 0, 6, 1, 5]); // 3
hIndex([1, 3, 1]); // 1
hIndex([100]); // 1

function hIndex(citations: number[]): number {
  // I must iterate through the array
  // and for each element, I will find h candidate and will update real h to have a max value
  let h = -1;
  const map = new Map();
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] > h && !map.has(citations[i])) {
      let number = 0;
      for (let j = 0; j < citations.length; j++) {
        if (citations[j] >= citations[i]) number++;
      }
      h = Math.max(h, Math.min(number, citations[i]));
      map.set(citations[i], 1);
    }
  }
  return h;
};