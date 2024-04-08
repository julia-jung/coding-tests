export default class TrieNode {
  private NUMBER_OF_CHARACTERS = 26;
  private children: TrieNode[] = new Array(this.NUMBER_OF_CHARACTERS);
  private size = 0;

  private getCharIndex(char: string): number {
    return char.charCodeAt(0) - 97;
  }

  private getNode(char: string): TrieNode {
    return this.children[this.getCharIndex(char)];
  }

  private setNode(char: string, node: TrieNode): void {
    this.children[this.getCharIndex(char)] = node;
  }

  public add(str: string, index: number = 0): void {
    this.size++;
    if (index === str.length) return;

    const current = str.charAt(index);

    let child = this.getNode(current);
    if (!child) {
      child = new TrieNode();
      this.setNode(current, child);
    } 
    child.add(str, index + 1);
  }

  public findCount(str: string, index: number): number {
    if (index === str.length) return this.size;

    let child = this.getNode(str.charAt(index));
    if (!child) return 0;
    
    return child.findCount(str, index + 1);
  }
}