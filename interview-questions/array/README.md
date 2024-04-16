### Permutations and Factorial

> **Set**: A collection of distinct items, referred to as "elements", where the order of the items does not matter. E.g., {a, b}.
> **Permutation**: A specific arrangement or ordering of the elements of a set. In permutations, the order is crucial. For the set {a, b}, we have two permutations: [a, b] and [b, a].

#### Counting permutations

Imagine, arraning 3 letters a, b, and c.
For the first position, we have 3 choices, then for the second position, only 2 remains, for the third and final we only have 1 letter left. -> This gives a total of `3 * 2 * 1 ` permutations

Now we can generalize this idea to count the number of permutations for a set of size `n`
-> which is `n * (n - 1) * (n - 2) * ... * 1 = n!` (**factorial of `n`**)

<br />

### Subsets

> Subset of set A: another set that contains only the elements which are also presented in A.

- {1,3,9} is a subset of {1,2,3,4,5,6,7,9}

#### How many Subsets can a Set have

for each element in a set, we have 2 choices

- include in the subset
- exclude it from the subset

- with one element, we have `2 ^ 1` possible states
- with two lements, we have `2 ^ 2` possible states

If set has `n` elements, it will have `2 ^ n` subsets (including the empty subset and the original set itself)

### Arithmetic sequence

> Arithemetic seqeunce: a sequence of numbers such that the difference between the consecutive terms is constant.

- [1,2,3,4,5] and [1,3,5,7,9] is an arithmetic sequence
- [1,2,4] is not an arithmetic sequence

#### Sum of arithmetic sequence

`(first_element + last_element) * number_of_element / 2`

- sum([1,2,3,4,5]) = (1 + 5) \* 5 / 2 = 15
- sum([1,3,5,7,9]) = (1 + 9) \* 5 / 2 = 25

- `last_element = first_element + difference * (number_of_element - 1)`
- sum = `(2 * first_element + difference * (number_of_elements - 1)) * number_of_elements / 2)`
- Time complexity: `O(n^2)`
