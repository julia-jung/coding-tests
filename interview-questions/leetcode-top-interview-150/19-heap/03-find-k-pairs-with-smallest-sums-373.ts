/** ⭐⭐
 * You are given two integer arrays nums1 and nums2 sorted in non-decreasing order and an integer k.
 * Define a pair (u, v) which consists of one element from the first array and one element from the second array.
 * Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.
 */

// Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3 -> Output: [[1,2],[1,4],[1,6]]
// Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2 -> Output: [[1,1],[1,1]]

function kSmallestPairs(
  nums1: number[],
  nums2: number[],
  k: number
): number[][] {
  class MinHeap {
    private heap: number[][] = [];

    getLength() {
      return this.heap.length;
    }

    get(k: number) {
      return this.heap.slice(0, k);
    }

    peak() {
      return this.heap.length > 0 ? this.heap[0] : null;
    }

    push(num1Index: number, num2Index: number, sum: number) {
      this.heap.push([num1Index, num2Index, sum]);
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

      while (parent >= 0 && this.heap[parent][2] > this.heap[i][2]) {
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
          this.heap[rightChild][2] < this.heap[leftChild][2]
            ? rightChild
            : leftChild;

        if (this.heap[i][2] > this.heap[smaller][2]) {
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

  const heap = new MinHeap();

  // fill up with first k pairs with index 0 of nums2
  for (let i = 0; i < Math.min(k, nums1.length); i++) {
    heap.push(i, 0, nums1[i] + nums2[0]);
  }

  const result = [];

  while (k > 0 && heap.getLength() > 0) {
    const [num1Index, num2Index] = heap.pop(); // get top of the heap (min)
    result.push([nums1[num1Index], nums2[num2Index]]);

    // if there is next num in num2 push into the heap
    if (num2Index < nums2.length - 1) {
      heap.push(
        num1Index,
        num2Index + 1,
        nums1[num1Index] + nums2[num2Index + 1]
      );
    }

    k--;
  }
  return result;
}
