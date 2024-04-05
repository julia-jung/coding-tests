class HashTable {
  private data: Array<[string, unknown][]>;

  constructor(size: number) {
    this.data = new Array(size);
  }

  public set(key: string, value: unknown) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    console.log(this.data);
  }

  public get(key: string): unknown {
    const currentBucket = this.data[this._hash(key)];
    if (currentBucket) {
      for (const [k, v] of currentBucket) {
        if (k === key) return v;
      }
    }
    return undefined;
  }

  private _hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  public keys() {
    const keysArray = [];
    for (const bucket of this.data) {
      if (bucket) keysArray.push(...bucket.map(([k, _v]) => k));
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(2);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
myHashTable.set('oranges', 2);
console.log(myHashTable.get('apples'));
console.log(myHashTable.keys());
