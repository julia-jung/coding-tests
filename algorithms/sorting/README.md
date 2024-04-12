# Sorting Algorithms

## Concept

A Sorting Algorithm is used to arrange elements of an array/list in a specific order

### Why Sorting is important?

Understanding and using sorting algorithms effectively can help improve the performance and efficiency of software systems and data processing operations.

- They make it easier and faster to access and process data
- They are fundamental part of computer science and good programming practice
- They can be used to optimize many different operations
- They have numerous real-world applications in fields such as database management and finance.

### Built-in sort() method

While the sort() method is a connenient built-in method, it may not always be the best solution. In some cases, other sorting algorithms or custom sorting functions may be more efficient or appropriate

- The performance of sort() can vary depending on the size and type of data being sorted
- It may not maintain the order of equal elements
- It may not provide the flexibility to customize sorting criteria
- It may require additional memory to sort large dataset

#### sort() in JS

It convert items into String and measure the charactercode

```js
const nums = [2, 65, 34, 2, 1, 7, 8];
nums.sort(); // [1,2,2,34,65,7,8]
console.log('2'.charCodeAt(0)); // 50
console.log('65'.charCodeAt(0)); // 54
console.log('34'.charCodeAt(0)); // 51
console.log('7'.charCodeAt(0)); // 55
```

- Which sorting algorithm is used?
  There's no specific requirements in EcmaScript in terms of sorting algorithms, Browsers with different JS engines uses different sorting algorithms. (e.g. Mozilla uses Merge sort, Chrome uses Quick sort + Insertion sort)

<br />

## Types of Sorting Algorithms

There are many different sorting algorithms and each has its own strengths and weaknesses, and may be more appropriate for certain types of data or situations

|                | Best         | Average      | worst        | SpaceComplexity |
| -------------- | ------------ | ------------ | ------------ | --------------- |
| Bubble sort    | `O(n)`       | `O(n^2)`     | `O(n^2)`     | `O(1)`          |
| Insertion sort | `O(n)`       | `O(n^2)`     | `O(n^2)`     | `O(1)`          |
| Selection sort | `O(n^2)`     | `O(n^2)`     | `O(n^2)`     | `O(1)`          |
| Merge sort     | `O(n log N)` | `O(n log N)` | `O(n log N)` | `O(n)`          |
| Quick sort     | `O(n log N)` | `O(n logN)`  | `O(n^2)`     | `O(log N)`      |

<br />

### Bubble Sort

> Repeatedly steps through a list of elements, compares adjacent elements and swaps them to make largest elements bubbles up to the end of the list with each iteration.

#### How does it work?

1. Starting at the beginning of the list, compare each pair of adjacent elements
2. If the elements are in the wrong order, swap them
3. Continue iterating through the list until no more swaps are needed

#### Pros:

- Easy to understand and implement. Can be useful for small datasets or as a starting point for more optimized algorithms

#### Cons:

- Relatively slow for large datasets (You won't use this in real life)

<br />

### Selection Sort

> Repeatedly finds the smallest element in an unsorted portion of array and moves it to the beginning of the sorted portion(left part) of the array.

#### How does it work?

1. Starting with the first element in the array, search for the smallest element in the unsorted portion of the array(right part)
2. Swap the most smallest element found with the first element in the unsorted portion of the array
3. Repeat step 1 and 2 for the remaining unsorted elements in the array until the entire array is sorted

#### Pros:

- Easy to understand and implement. Can be useful for small datasets or as a starting point for more optimized algorithms

#### Cons:

- Relatively slow for large datasets (You won't use this in real life)

<br />

### Insertion Sort

> Iteratively insert each element of an array into its correct position within a sorted subarray(left part).

#### How does it work?

1. Starting with the second element in the array, iterate through the unsorted portion of the array(right part)
2. For each element, compare it to the elements in the sorted portion(left part) of the array and inset it into the correct position
3. Repeat step 2 for all remaining elements in the unsorted portion of the array until the entire array is sorted

#### Pros:

- Efficient for sorting small datasets
- Often used as a building block for more complex sorting algorithms
- Insertion Sort is particularly fast(Linear `O(n)`) when the array is nearly sorted

#### Cons:

- Relatively slow for large datasets

<br />

### Merge Sort

> Divide the unsorted list into smaller sublists, sorting those sublists **recursively**, and then merging them back together into the final sorted list.

- Follows the divide-and-conquere paradigm

#### How does it work?

1. Divide the unsorted listi into two sublists of roughly equal size
2. Sort each of the sublist recursively by applying the same divide-and-conquere strategy
3. Merge the sorted sublists back together into one sorted list

#### Pros:

- Has Time complexity of `O(n log N)`, which is more efficient thatn quadratic sorting algorithms(such as bubble sort, selection sort, and insertion sort) for large datasets
- Is a stable sorting algorithm, meaning it maintains the relative order of equal elements

#### Cons:

- Has a relatively high space complexity due to its use of additional memory during the merging process

<br />

### Quick Sort

> Select a pivot element from the array, partitioning the array into two subarrays based on the pivot element, and then **recursively** sorting each subarray.

- Follows the divide-and-conquere paradigm

#### How does it work?

1. Choose a random pivot element(usually right) from the array
2. Partition the array into two subarrays: one containing elements smaller than the pivot element, and one containing elements larger than the pivot element
3. Recursively apply Quick sort to each subarray until the entier array is sorted

#### Pros:

- Has a time complexity of O(n log N) on average, making it one of the most efficient sorting algorithms for large datasets.
- It is an in-place algorithm, meaning that it does not require additional memeory beyound the original array.

#### Cons:

- In the worst case(e.g., when the pivot element always selects the maximum or minimum element of the array), time complexity can be quadratic, `O(n^2)`.
  - This can be avoided by selecting a good pivot element, such as the median or a random element.

<br />

### [Heap sort](https://brilliant.org/wiki/heap-sort/)

- [Quick sort vs. Heap sort](https://stackoverflow.com/questions/2467751/quicksort-vs-heapsort)

<br />

### Non-Comparison Sort

- Comparison sort algorithms(Quick sort, Merge sort, Insertion sort, Selection sort, Bubble sort) compare pairs of elements in the input array using comparison operators to determine their relative order.
  - They have lower bound of `O(n log N)` time complexity
- While Non-Comparison algorithms(Counting sort, Radix sort, Bucket sort) don't compare elements, instead use other information about the elements to determine their correct positions in the sorted output

  - They can have Linear time complexity in some cases

- [Radix sort](https://brilliant.org/wiki/radix-sort/) ([Animation](https://www.cs.usfca.edu/~galles/visualization/RadixSort.html))
- [Counting sort](https://www.cs.usfca.edu/~galles/visualization/RadixSort.html) ([Animation](https://www.cs.usfca.edu/~galles/visualization/CountingSort.html))

<br />

## Choosing a Sorting Algorithms

When choosing a sorting algorithms, it is important to consider various factors such as the size and distribution of the dataset, as well as the desired time and space complexity.

### For a large dataset

(with a relatively uniform distribution of values)

- chooses with efficient time complexity of `O(n log N)`
  - If you have enough memory: **Merge Sort**
  - If you don't worry about the worst case: **Quick Sort**

### For small dataset or nearly sorted data

- Choose one with a best-case time complexity of `O(n)` when data is already sorted: **Insertion Sort**

### Consider Hybrid for large dataset

V8 engine(used by Google Chrome and Node.js) starts by using Quick sort to partition the array into smaller subarrays, and once the subarrays become smaller than a certain theshold(10-20 elements), it switches to Insertion sort. The reason for this hybrid approach is that Quick Sort is generally faster than Insertion Sort on large datasets, but Insertion Sort is faster than Quick Sort on small datasets or nearly sorted data.

<br />

## Recourses

[MDN - sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)\
[MDN - localeCompare()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)\
[Sorting algorithms animation](https://www.toptal.com/developers/sorting-algorithms)\
[Dancing algorithms](https://www.youtube.com/user/AlgoRythmics/videos)\
[Stability in sorting algorithms](https://stackoverflow.com/questions/1517793/what-is-stability-in-sorting-algorithms-and-why-is-it-important)
