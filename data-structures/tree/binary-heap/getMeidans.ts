import MaxHeap from './MaxHeap';
import MinHeap from './MinHeap';

/**
 * Median for the array is, (when the array is sorted)
 * the middle element for the array with size of odd
 * the average value of two middle elements for the array with size of even
 * @param arr
 */
export function getMedians(arr: number[]): number[] {
  /**
   * Implementation :
   * seperate the array into two heaps
   * one with lower values in form of Max Heap
   * the other with higher values in form of Min Heap
   * Make sure keep them to have maximum size difference of 1
   * Then either bigger heaps head or the average of two heaps heads will be the median
   */
  const lowers = new MinHeap(); // Max Heap
  const highers = new MaxHeap(); // Min Heap

  const medians: number[] = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    add(val, lowers, highers); // add val in one heap to have lower with smaller values and higher with larger values
    rebalance(lowers, highers); // to make them have max size difference of 1,
    medians[i] = getMedian(lowers, highers);
  }
  return medians;
}

function add(val: number, lowers: MinHeap, highers: MaxHeap): void {
  if (lowers.getSize() === 0 || val < lowers.peek()) {
    // if it's smaller than the top of lower heap
    lowers.add(val);
  } else {
    highers.add(val);
  }
}

function rebalance(lowers: MinHeap, highers: MaxHeap): void {
  const biggerHeap = lowers.getSize() > highers.getSize() ? lowers : highers;
  const smallerHeap = lowers.getSize() > highers.getSize() ? highers : lowers;

  if (biggerHeap.getSize() - smallerHeap.getSize() >= 2) {
    // unbalanced
    smallerHeap.add(biggerHeap.poll());
  }
}

function getMedian(lowers: MinHeap, highers: MaxHeap): number {
  const biggerHeap = lowers.getSize() > highers.getSize() ? lowers : highers;
  const smallerHeap = lowers.getSize() > highers.getSize() ? highers : lowers;

  if (biggerHeap.getSize() === smallerHeap.getSize()) {
    return (biggerHeap.peek() + smallerHeap.peek()) / 2;
  } else {
    return biggerHeap.peek();
  }
}
