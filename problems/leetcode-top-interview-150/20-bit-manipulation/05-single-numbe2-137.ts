/**
 * Given an integer array nums where every element appears three times except for one, which appears exactly once.
 * Find the single element and return it.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 */

singleNumber3([2, 2, 3, 2]); // -> Output: 3
singleNumber3([0, 1, 0, 1, 0, 1, 99]); // -> Output: 99

function singleNumber3(nums: number[]): number {
  // consider the (set^val) as one of the following:
  // 1. adding "val" to the "set" if "val" is not in the "set" => A^0 = A
  // 2. removing "val" from the "set" if "val" is already in the "set" => A^A = 0

  // Assume "ones" and "twos" to be sets that are keeping track of which numbers have appeared once and twice respectively;
  let ones = 0;
  let twos = 0;
  for (const num of nums) {
    // a^(~a)^a=a^a=0
    ones ^= num & ~twos;
    // => ones = (ones ^ num) & (~twos);
    // if the set "ones" doesn't have num,
    // add num to the set "ones" only if it is not in the set "two"
    //  -> if it is in the set "two" in means it already appeard twice
    // if "ones" already have num, then remove it from "ones"
    //  -> when the num appears twice, it will be removed from "ones"

    twos ^= num & ~ones;
    // twos = (twos ^ num) & (~ones);
    // if the set "twos" doesn't have num,
    // add num to the set "twos" only if it is not in the set "one"
    //  -> so, any number that appears a first time will be in set "ones" so will not be added to "two"
    //  -> any number that appears a second time, will be removed from "ones" and now will be added to "two"
    // if "twos" already have num, then remove it from "twos"
    //  -> any number that appears a third time, will simply be removed from "twos" and no longer exist in either set
  }

  // once we are done iterating over the entire list, set "twos" would be empty
  // and set "ones" will contain the only numbers that appears one
  return ones;
}
