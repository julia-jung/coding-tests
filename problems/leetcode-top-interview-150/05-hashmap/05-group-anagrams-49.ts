/** ⭐⭐
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
 * typically using all the original letters exactly once.
 */

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]); // [["bat"],["nat","tan"],["ate","eat","tea"]]
groupAnagrams([""]); // [[""]]
groupAnagrams(["a"]); // [["a"]]

function groupAnagrams(strs: string[]): string[][] {
  const map = new Map();

  for (const str of strs) {
    const sorted = str.split('').sort().join('');

    map.set(sorted, [ ...(map.get(sorted) ?? []), str]);
  }

  return [ ...map.values()];
};