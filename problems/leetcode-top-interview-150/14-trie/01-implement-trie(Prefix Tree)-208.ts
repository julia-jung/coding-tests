/** ⭐⭐
 * A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. 
 * There are various applications of this data structure, such as autocomplete and spellchecker.
 * Implement the Trie class:
 *  - Trie() Initializes the trie object.
 *  - void insert(String word) Inserts the string word into the trie.
 *  - boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
 *  - boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
 */

class TrieNode {
  private children: Map<string, TrieNode>;
  public isEnd: boolean;
  
  constructor() {
    this.children = new Map();
    this.isEnd = false;
  }

  public getNode(char: string): TrieNode | undefined {
    return this.children.get(char);
  }

  public setNode(char: string, node: TrieNode): void {
    this.children.set(char, node);
  }

  public addChild(char: string): TrieNode {
    const child = this.getNode(char) ?? new TrieNode();
    this.setNode(char, child);
    return child;
  }

  public getChildren(): Iterable<TrieNode> {
    return this.children.values();
  }
}

class Trie {
  private root: TrieNode; // start with an empty trie and add the strings as we move along
  
  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    // startng insert from the root
    let curNode = this.root;

    for (const char of word) {
      curNode = curNode.addChild(char); 
    }
    curNode.isEnd = true; // set the curNode's isEnd as true meaning it's the last character of the word
  }

  search(word: string): boolean {
    let curNode = this.root; // search from the root
    
    for (const char of word) {
      const child = curNode.getNode(char);
      if (!child) return false; // if there is no node for current char, return false
      curNode = child; // move pointer to the child node we found
    }
    return curNode.isEnd; // if we reached the end of the word, return true
  }

  startsWith(prefix: string): boolean {
    // same approach with search but with no check if the last Node has isEnd true
    let curNode = this.root;

    for (const char of prefix) {
      const child = curNode.getNode(char);
      if (!child) return false;
      curNode = child;
    }
    return true;
  }
}

const trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True
