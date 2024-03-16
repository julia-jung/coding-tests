/** ⭐⭐
 * Design a data structure that supports adding new words and finding if a string matches any previously added string.
 * Implement the WordDictionary class:
 *  WordDictionary() Initializes the object.
 *  void addWord(word) Adds word to the data structure, it can be matched later.
 *  bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. 
 *  word may contain dots '.' where dots can be matched with any letter.
 */

class WordDictionary {
  private root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word: string): void {
    let curNode = this.root; // start adding from the root
    for (const char of word) {
      const child = curNode.addChild(char);
      curNode = child;
    }
    curNode.isEnd = true;
  }

  search(word: string, node?: TrieNode): boolean {
    let curNode = node ?? this.root;
    
    for (let i = 0; i < word.length; i++) {
      // if current character is '.', skip checking the current node
      // instead check all the children to find the remaining characters match
      if (word[i] === '.') {
        for (let child of curNode.getChildren()) {
          // if one of children returns true, then we found the match. return true;
          if (this.search(word.slice(i + 1), child)) {
            return true;
          }
        }
        // if we failed to find any match, return false;
        return false;
      } else {
        // if current character is not '.', proceed checking curNode moving forward
        const child = curNode.getNode(word[i]);
        if (!child) return false;
        curNode = child;
      }
    }

    // when for loop ends, check the current node is the end of the word
    return curNode.isEnd;
  }
}

const wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True