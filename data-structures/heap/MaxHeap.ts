export default class MinHeap {
  private items: number[];
  
  constructor() {
    this.items = [];
  }

  private getLeftChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 1;
  }
  private getRightChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 2;
  }
  private getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  private hasLeftChild(index: number): boolean {
    return this.getLeftChildIndex(index) < this.items.length;
  }
  private hasRightChild(index: number): boolean {
    return this.getRightChildIndex(index) < this.items.length;
  }
  private hasParent(index: number): boolean {
    return this.getParentIndex(index) >= 0;
  }

  private getLeftChild(parentIndex: number): number {
    return this.items[this.getLeftChildIndex(parentIndex)];
  }
  private getRightChild(parentIndex: number): number {
    return this.items[this.getRightChildIndex(parentIndex)];
  }
  private getParent(index: number): number {
    return this.items[this.getParentIndex(index)];
  }

  private swap(indexOne: number, indexTwo: number): void {
    const temp = this.items[indexOne];
    this.items[indexOne] = this.items[indexTwo];
    this.items[indexTwo] = temp;
  }

  /**
   * get the head node
   */
  public peek(): number | null {
    if (this.items.length === 0) return null;
    return this.items[0];
  }

  /**
   * get the head node and remove from the heap
   */
  public poll(): number | null {
    if (this.items.length === 0) return null;

    const head = this.items[0];
    const tail = this.items.pop();
    this.items[0] = tail;
    this.heapifyDown();

    return head;
  }

  /**
   * add a new item to the heap
   * @param item
   */
  public add(item: number): void {
    this.items.push(item);
    this.heapifyUp();
  }

  public heapifyDown(): void {
    let i = 0;

    while (this.hasLeftChild(i)) {
      let smallerChildIndex = this.getLeftChildIndex(i);
      if (this.hasRightChild(i) && this.getRightChild(i) < this.getLeftChild(i)) {
        smallerChildIndex = this.getRightChildIndex(i);
      }

      if (this.items[i] > this.items[smallerChildIndex]) {
        break;
      } else {
        this.swap(i, smallerChildIndex);
      }
      i = smallerChildIndex;
    }
  }

  public heapifyUp(): void {
    let i = this.items.length - 1;

    while (this.hasParent(i) && this.getParent(i) < this.items[i]) {
      const parentIndex = this.getParentIndex(i);
      this.swap(parentIndex, i);
      i = parentIndex;
    }
  }

  public getItems(): number[] {
    return this.items;
  }

  public getSize(): number {
    return this.items.length;
  }
}