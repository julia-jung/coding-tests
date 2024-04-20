// sun, sunny, sunnyer, sunnie, su
/**
      sun
  ny nie
  er
 */

class RadixTrieNode {
  public value: string;
  public children: RadixTrieNode[];
  public isEnd: boolean;

  constructor(value: string = '') {
    this.value = value;
    this.children = [];
    this.isEnd = false;
  }

  public addChild(str: string): RadixTrieNode {
    if (!str) return this;

    const newChild = new RadixTrieNode(str);

    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      let commonPrefix = '';
      for (let i = 0; i < Math.min(child.value.length, str.length); i++) {
        if (child.value[i] === str[i]) {
          commonPrefix += str[i];
        } else {
          break;
        }
      }

      if (commonPrefix) {
        // if we found a child with commonPrefix with new str
        const strWithoutPrefix = str.replace(commonPrefix, '');
        if (commonPrefix === child.value) {
          // means, str starts with child
          return child.addChild(strWithoutPrefix);
        } else {
          // replace current child with commonPrefix and add both diffInChild and str as its children
          const prefixNode = new RadixTrieNode(commonPrefix);

          const diffInChild = child.value.replace(commonPrefix, '');
          child.value = diffInChild;
          prefixNode.children.push(child);
          this.children[i] = prefixNode;

          return prefixNode.addChild(strWithoutPrefix);
        }
      }
    }

    // if no other children has common prefix with new str, add it to children array
    this.children.push(newChild);
    return newChild;
  }

  public getPrefix(str: string): RadixTrieNode | undefined {
    return this.children.find((child) => str.startsWith(child.value));
  }
}

class RadixTrie {
  public root: RadixTrieNode; // start with an empty trie and add the strings as we move along

  constructor() {
    this.root = new RadixTrieNode();
  }

  insert(word: string): void {
    // startng insert from the root
    let curNode = this.root;
    curNode = curNode.addChild(word);

    curNode.isEnd = true; // set the curNode's isEnd as true meaning it's the last character of the word
  }

  search(word: string): boolean {
    let curNode = this.root; // search from the root
    let curWord = word;

    while (curWord.length) {
      const child = curNode.getPrefix(curWord);
      if (!child) return false; // if there is no child node for current word, return false
      curNode = child; // move pointer to the child node we found
      curWord = curWord.replace(child.value, '');
    }
    return curNode.isEnd; // if we reached the end of the word, return true
  }

  // startsWith(prefix: string): boolean {
  //   // same approach with search but with no check if the last Node has isEnd true
  //   let curPrefix = prefix;
  //   let curNode = this.root;

  //   while (curPrefix.length) {
  //     const child = curNode.getPrefix(curPrefix);
  //     if (!child) return false;
  //     curNode = child;
  //     curPrefix = curPrefix.replace(child.value, '');
  //   }
  //   return true;
  // }
}

const radixTrie = new RadixTrie();
radixTrie.insert('sun');
radixTrie.insert('sunny'); // return True
radixTrie.insert('su');
radixTrie.insert('sum');
radixTrie.insert('summer');
radixTrie.insert('summury');
/**
 *           su (*)
 *       n (*)  m (*)
 *      ny (*)  m
 *              er(*) ury(*)
 */

console.log(JSON.stringify(radixTrie.root));

function traverse(node: RadixTrieNode): RadixTrieNode {
  for (const child of node.children) {
    traverse(child);
  }
  return node;
}
