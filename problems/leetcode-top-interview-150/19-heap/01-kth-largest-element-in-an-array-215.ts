/** ⭐⭐
 * Given an integer array nums and an integer k, return the kth largest element in the array.
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 * Can you solve it without sorting?
 */

// Input: nums = [3,2,1,5,6,4], k = 2 -> Output: 5
// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4 -> Output: 4

// using minHeap having length of k
function findKthLargestUsingMinHeap(nums: number[], k: number): number {
  class MinHeap {
    private heap = [];

    peak() {
      return this.heap.length > 0 ? this.heap[0] : null;
    }

    push(num: number) {
      this.heap.push(num);
      this.heapifyUp();
    }

    pop() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
      const head = this.heap[0];
      const tail = this.heap.pop();
      this.heap[0] = tail;
      this.heapifyDown();
      return head;
    }

    heapifyUp() {
      let i = this.heap.length - 1;
      let parent = Math.floor((i - 1) / 2);

      while (parent >= 0 && this.heap[parent] > this.heap[i]) {
        this.swap(parent, i);

        i = parent;
        parent = Math.floor((i - 1) / 2);
      }
    }

    heapifyDown() {
      let i = 0;
      let leftChild = 2 * i + 1;
      let rightChild = 2 * i + 2;

      while (leftChild < this.heap.length) {
        const smaller =
          rightChild < this.heap.length &&
          this.heap[rightChild] < this.heap[leftChild]
            ? rightChild
            : leftChild;

        if (this.heap[i] > this.heap[smaller]) {
          this.swap(i, smaller);
        } else {
          break;
        }

        i = smaller;
        leftChild = 2 * i + 1;
        rightChild = 2 * i + 2;
      }
    }

    swap(a: number, b: number) {
      const num = this.heap[a];
      this.heap[a] = this.heap[b];
      this.heap[b] = num;
    }
  }

  const minHeap = new MinHeap(); // has length of k

  // fill minHeap with firt kth elements
  for (let i = 0; i < k; i++) {
    minHeap.push(nums[i]);
  }
  // leave kth largest elements and up in minHeap
  for (let i = k; i < nums.length; i++) {
    if (nums[i] > minHeap.peak()) {
      minHeap.pop();
      minHeap.push(nums[i]);
    }
  }
  return minHeap.peak();
}

// Time limit exceeded
function findKthLargestUsingQuickSort(nums: number[], k: number): number {
  let index = nums.length - k;

  return quickSelect(0, nums.length - 1);

  function quickSelect(left: number, right: number) {
    const pivot = nums[right]; // pick a random pivot
    let p = left; // we'll find the p index which our random pivot should be

    for (let i = left; i < right; i++) {
      if (nums[i] <= pivot) {
        swap(i, p);
        p++;
      }
    }

    swap(p, right); // place pivot at the p index

    if (p > index) {
      // means kth largest element is in the left part of the p
      return quickSelect(left, p - 1);
    } else if (p < index) {
      // means kth largest element is in the right part of the p
      return quickSelect(p + 1, right);
    } else {
      // we found the number at index of p
      return nums[p];
    }
  }

  function swap(left: number, right: number) {
    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
  }
}
