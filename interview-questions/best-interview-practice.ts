/** Question:
 *
 * Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
 *
 * For Example:
 * const array1 = ['a', 'b', 'c', 'x'];
 * const array2 = ['z', 'y', 'i'];
 * should return false.
 * -----------
 * const array1 = ['a', 'b', 'c', 'x'];
 * const array2 = ['z', 'y', 'x'];
 * should return true.
 */

/* BEFORE START CODING */

// Step 1. Ask for clarification and take notes
//  - There are two parameters
//  - First Example should return false and second should return true
//  - What are types of inputs? Are they Array? String? Obejct?
//  - How large is an array can bel? Are there size limitation?
//  - Is the array unique set of string or are there repeatitions?

/**
 * <Notes>
 * 2 parameters - arrays - no size limit
 * return true or false
 */

// Step 2. Ask about what is the most important value of the problem, What is the goal.
//  - Is our goal here to be as efficient as possible with our function?
//  - Is Time complexity more important than space complexity ?

// 3. Start with first thing comes up into mind (show code or just explain)
//  - Obviously, first approach would be walk through the first array and find each element from second array
//     Which will be nested for loop and therfore quadratic O(n^2)

// 4. Tell why this approach is not the best
//  - It has time complexity of O(n^2)
//  - If input arrays are big, this will be a bottleneck

// 5. Try different approach
//  - I might be try to use HashTable to void nested for loops
//  - Save all elements in the first array in the Hash set
//    then looping through second array, find the same string from the Hashset

// Start coding

// 6. break into small parts and add some comments before start coding
//  - I'm going to loop through first array and save all elements in the Hash Set
//  - Then with seperate for loop of second array, I'll find the element from the Hash Set

// 7. Start write code. Start with the easy part. Expalin your code while we're writing. Evaluate with Time & Space complexity
//
//  - I'll make set object first,
//  - And create for loop, actually I'll use for-of loop in this case I don't need index
//  - Then add it to the set
//  - Now set should have every element of first array
//  - So, it's time to check if any element of second array is in the set
//  - I'll create for loop again, then check if it is exist with set.has method,
//    if it exist, we immediately stop the loop and return true
//  - finally when second loop is over, means we didn't find a match, so return false
//
//  - So this approach use seperate for loops so it's time complexity would be linear O(n) definetly better than quadratic
//  - but it has extra space to save all items from array1, meaning Space Complexity is also linear O(n) whereas first approach has constant Space Complexity

function containsCommonItem(arr1: string[], arr2: string[]): boolean {
  // define Set to store items from first array
  const set = new Set();
  // loop through first array and store elements in the Hash Set
  for (const item of arr1) {
    set.add(item);
  }

  // loop through second array and check if item is in the Has Set
  for (const item of arr2) {
    if (set.has(item)) return true;
  }

  return false;
}

// 8. Check for edge cases, false inputs. Ask interviewer if we can make assumption about the code.
//   - What if an array is empty?
//     So if first array is empty, we don't have to set will be empty and there's no need to go through second for loop
//     I will add this condition before the second for loop, or actually I'll check if one of input array is empty, will return false
//   - What if I have same string in an array?
//     because set doesn't allow duplicated items, even if there are same string, we should be okay
//   - What if I have number in an array?
//   - What if I actually have an array in an array ?
//   - What if I have null in an array?
//   - What if the second array is passed as null?
//   - What if we get only one array? -> Can we assume we always have 2 parameters?

function containsCommonItemWithEdgeCases(
  arr1: string[],
  arr2: string[]
): boolean {
  if (arr1.length === 0 || arr2.length === 0) return false;

  // define Set to store items from first array
  const set = new Set<string>();
  // loop through first array and store elements in the Hash Set
  for (const item of arr1) {
    set.add(item);
  }

  // loop through second array and check if item is in the Has Set
  for (const item of arr2) {
    if (set.has(item)) return true;
  }

  return false;
}

// 9. Tell about where you'd improve the code
//  - Obviiously, it's a simple function I didn't modularized but if the code gets complex, I can modularize codes into seperate functions
//  - I can maybe immediately convert first array to Set using spread operator
//  - OR I even use Javascript built in array some method and includes method
//    although this may seems clean and concise but with more time complexity

function containsCommonItemWithES6(arr1: string[], arr2: string[]): boolean {
  // const set = new Set(...arr1);
  return arr1.some((item) => arr2.includes(item));
}
