/** ⭐⭐
 * Given a string s and a dictionary of strings wordDict, return true if s can be segmented
 * into a space-separated sequence of one or more dictionary words.
 * Note that the same word in the dictionary may be reused multiple times in the segmentation.
 */
wordBreak('leetcode', ['leet', 'code']); // true ("leet code")
wordBreak('applepenapple', ['apple', 'pen']); // true ("apple pen apple")
wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']); // false

// Memoiztion
// Time complexity: O(N * M * K) (N: length of string, M: size of dictionary, K: length of the longest word in dictionary)
// Space complexity: O(M) + O(N * K)
function wordBreak(s: string, wordDict: string[]): boolean {
  if (s.length === 0) return true;
  const memo = new Map<number, boolean>();
  return dp(0);

  function dp(index: number) {
    if (index === s.length) return true;
    if (memo.has(index)) return memo.get(index);
    let result = false;

    for (const word of wordDict) {
      if (s.startsWith(word, index) && !result) {
        result = dp(index + word.length);
      }
    }
    memo.set(index, result);
    return result;
  }
}

// Bottom up
// Time complexity: O(N * M * K) (N: length of string, M: size of dictionary, K: length of the longest word in dictionary)
// Space complexity: O(N) + O(M)
function wordBreak2(s: string, wordDict: string[]): boolean {
  let canBreak = Array(s.length + 1).fill(false);
  canBreak[0] = true;
  const wordSet = new Set(wordDict);

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      // it was breakable until j and also found a word from j to i
      if (canBreak[j] && wordSet.has(s.slice(j, i))) {
        canBreak[i] = true;
        break;
      }
    }
  }
  return canBreak[s.length];
}

// Failed case: Time Limit Exceeded
function wordBreakFailed(s: string, wordDict: string[]): boolean {
  if (s.length === 0) return true;
  let result = false;
  const set = new Set();
  dp(s);
  return result;

  function dp(s: string) {
    if (s.trim().length === 0) {
      result = true;
      return;
    }
    if (result || set.has(s)) return;
    set.add(s);

    for (const word of wordDict) {
      dp(s.replace(word, ' '));
      // dp(s.replaceAll(word, ' '));로 했을때도 Fail
      // -> Failed case: wordBreakFailed("ddadddbdddadd", ["dd","ad","da","b"]); -> output: false / expected: true
    }
  }
}
