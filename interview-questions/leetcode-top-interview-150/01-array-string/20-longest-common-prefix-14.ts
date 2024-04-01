/** ⭐
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 */

longestCommonPrefix(['flower', 'flow', 'flight']); // 'fl'
longestCommonPrefix(['dog', 'racecar', 'car']); // ''

// Solution 1: sort array lexicographically then compare first and last elements
function longestCommonPrefix(strs: string[]): string {
  let commonPrefix = '';

  const sorted = strs.sort();
  // If array is sorted, common prefix for first and last string is also applied to others
  const first = sorted[0];
  const last = sorted[strs.length - 1];

  for (let i = 0; i < Math.min(first.length, last.length); i++) {
    if (first[i] !== last[i]) {
      break;
    }
    commonPrefix += first[i];
  }

  return commonPrefix;
};

// Solution 2: set the first element as common and find common with the rest elements
function longestCommonPrefix2(strs: string[]): string {
  let commonPrefix = strs[0];

  for (const str of strs.slice(1)) {
    let i = 0; 
    while (i < commonPrefix.length && str[i] === commonPrefix[i]) i++;
    commonPrefix = commonPrefix.substring(0, i);
  }

  return commonPrefix;
};