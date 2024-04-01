/** ⭐⭐
 * Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
 * 
 * Implement the LRUCache class:
 *  - LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
 *  - int get(int key) Return the value of the key if the key exists, otherwise return -1.
 *  - void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. 
 *    If the number of keys exceeds the capacity from this operation, evict the least recently used key.
 * 
 * The functions get and put must each run in O(1) average time complexity.
 */

import ListNode from "../../../data-structures/linked-list/ListNode";

// Solution 1: use Double Linked List
class DoubleListNode {
  key: number;
  val: number;
  prev: DoubleListNode | null;
  next: DoubleListNode | null;
  constructor(key?: number, val?: number, prev?: DoubleListNode | null, next?: DoubleListNode | null) {
      this.key = (key===undefined ? 0 : key);
      this.val = (val===undefined ? 0 : val);
      this.prev = (prev===undefined ? null : prev);
      this.next = (next===undefined ? null : next);
  }
}

class LRUCache {
  private map = new Map<number, DoubleListNode>();
  private head = new DoubleListNode();
  private tail = new DoubleListNode();
  constructor(private capacity: number) {
    this.head.prev = null;
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.tail.next = null;
  }

  get(key: number): number {
    if (!this.map.has(key)) return -1;
    
    const node = this.map.get(key);
    this.deleteNode(node);
    this.addNode(node);
    
    return node.val;
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.val = value;
      this.deleteNode(node);
      this.addNode(node);
    } else {
      const node = new DoubleListNode(key, value);
      this.map.set(key, node);
      
      if (this.map.size > this.capacity) {
        this.map.delete(this.tail.prev.key);
        this.deleteNode(this.tail.prev);
      }

      this.addNode(node);
    }
    
  }

  private addNode(node: DoubleListNode): void {
     // insert right after head
    node.next = this.head.next;
    node.next.prev = node;

    node.prev = this.head;
    this.head.next = node;
  }

  private deleteNode(node: DoubleListNode): void {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
}

const lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4


// Solution 2: use only map
class LRUCache2 {
  private size: number;
  private map: Map<number, number>;
  constructor(capacity: number) {
    this.size = capacity;
    this.map = new Map();
  }

  get(key: number): number {
    const value = this.map.get(key);
    if (value === undefined) {
      return -1;
    }
    this.map.delete(key);
    this.map.set(key, value);
    return value;
  }

  put(key: number, value: number): void {
    this.map.delete(key);
    if (this.map.size >= this.size) {
      const deleteKey = this.map.keys().next().value;
      this.map.delete(deleteKey);
    }
    this.map.set(key, value);
  }
}

// Failed 
class LRUCacheFailed {
  private map = new Map();
  private head = new ListNode();
  private node = this.head;
  constructor(private capacity: number) {}

  get(key: number): number {
    if (!this.map.has(key)) return -1;
    
    this.addNode(key);
    return this.map.get(key);
  }

  put(key: number, value: number): void {
    this.map.set(key, value);
    this.addNode(key);
    
    if (this.map.size > this.capacity) {
      const lruKey = this.head.next.val;
      this.map.delete(lruKey);
      this.head.next = this.head.next.next;
    }
  }

  private addNode(key: number): void {
    if (this.node.val === key) return; // if the latest key is same, don't add again
    
    this.node.next = new ListNode(key);
    this.node = this.node.next;
    
    // if (this.head.next.next && this.head.next.val === key) { // if the oldest key is same, remove it from the head
    //   this.head.next = this.head.next.next;
    // } // This if block should be fixed as latest key is in fact could be the second oldest and can be removed later on

    // This has succeeded but time limit exceeded
    let curNode = this.head;
    while (curNode && curNode.next) {
      if (curNode.next.next && curNode.next.val === key) {
        curNode.next = curNode.next.next;
      }
      curNode = curNode.next;
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */