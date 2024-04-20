# Tree Data structure - Trie(or Prefix Tree or Radix Tree or Digital Tree)

> A Trie is a special tree that can compactly store strings.

> 문자열을 저장하고 효율적으로 탐색하기 위한 트리 형태의 자료구조

## When to use

- 문자열을 빠르게 검색할 수 있어 자동완성 기능, 사전 검색 등에 사용된다.

- Trie에 단어를 추가할때는 head 아래로 문자를 하나씩 TrieNode로 연결하고 마지막 문자에는 단어의 '끝'을 알리는 변수를 추가하여 단어 검색에 사용한다.

- 소문자만 저장한다고 할때 각 노드는 최대 26개의 자식 노드를 갖게 된다

- 단어를 검색할 때는 head부터 시작해서 문자를 하나씩 찾으면서 node를 탐색하고 마지막 문자에 도달하면 해당 노드가 '끝'인지를 확인한다.

- 자동완성 기능을 위해 prefix를 검색할때는 단어 검색과 동일하게 하고 '끝'확인만 제외한다.

### Time Complexity

O(length of the word)

### Good at:

- Sometimes Space-Efficient. If you're storing lots of words that start with similar patterns, tries may reduce the overall storage cost by storing shared prefixes once.
- Efficient Prefix Queries. Tries can quickly answer queries about words with shared prefixes, like:
  - How many words start with "choco"?
  - What's the most likely next letter in a word that starts with "strawber"?

### Bad at:

- Usually Space-Inefficient. Tries rarely save space when compared to storing strings in a set.
  - ASCII characters in a string are one byte each. Each link between trie nodes is a pointer to an address—eight bytes on a 64-bit system. So, the overhead of linking nodes together often outweighs the savings from storing fewer characters.
- Not Standard. Most languages don't come with a built-in trie implementation. You'll need to implement one yourself.

<br />

## Resources

[All you need to know about Trie](https://leetcode.com/discuss/interview-question/4161389/All-you-need-to-know-about-trie)
