// Arrays in JS are just objects with interger based keys that act like indexes
class MyArray {
  public length: number;
  public data: Record<number, unknown>;

  constructor() {
    this.length = 0;
    this.data = {};
  }

  public get(index: number): unknown {
    return this.data[index];
  }

  public push(item: unknown): number {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  public pop(): unknown {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  public delete(index: number): unknown {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  private shiftItems(startIndex: number) {
    for (let i = startIndex; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push('Hi');
newArray.push('Nice');
newArray.push('to');
newArray.push('meet');
newArray.push('you');
newArray.push('!');
newArray.pop();
newArray.delete(-1);
console.log(newArray);
