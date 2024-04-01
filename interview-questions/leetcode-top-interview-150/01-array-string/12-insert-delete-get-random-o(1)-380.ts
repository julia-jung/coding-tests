/** ⭐⭐
 * Implement the RandomizedSet class:

RandomizedSet() Initializes the RandomizedSet object.
bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
You must implement the functions of the class such that each function works in average O(1) time complexity.
 */

// Input: ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
// [[], [1], [2], [2], [], [1], [2], []]
// Output: [null, true, false, true, 2, true, false, 2]

class RandomizedSet {
  arr: number[];
  set: Set<number>;
  constructor() {
    this.arr = [];
    this.set = new Set();
  }

  insert(val: number): boolean {
    if (!this.set.has(val)) {
      this.set.add(val);
      this.arr.push(val);
      return true;
    }
    return false;
  }

  remove(val: number): boolean {
    if (this.set.has(val)) {
      this.set.delete(val);
      const index = this.arr.indexOf(val); 
      this.arr[index] = this.arr[this.arr.length - 1];
      this.arr.pop();
      return true;
    }
    return false;
  }

  getRandom(): number {
    const randomIndex = Math.floor(Math.random() * this.arr.length);
    return this.arr[randomIndex];
  }
}

/**
* Your RandomizedSet object will be instantiated and called as such:
* var obj = new RandomizedSet()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/