/** ⭐⭐
 * There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
 * You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. 
 * You begin the journey with an empty tank at one of the gas stations.
 * Given two integer arrays gas and cost, return the starting gas station's index 
 * if you can travel around the circuit once in the clockwise direction, otherwise return -1. 
 * If there exists a solution, it is guaranteed to be unique
 */

canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]); // 3
// -> [-2, -2, -2, 3, 3]
canCompleteCircuit([2, 3, 4], [3, 4, 3]); // -1
// -> [-1, -1, 1]
canCompleteCircuit([3, 1, 1], [1, 2, 2]); // 0
// -> [2, -1, -1]

// [2, -1, 4, -3, -2]
// [4, -3, -2, 2, -1]

function canCompleteCircuit(gas: number[], cost: number[]): number {
  let start = 0;
  let total = 0;
  let tank = 0;
  for (let i = 0; i < gas.length; i++) {
    total += gas[i] - cost[i];
    tank += gas[i] - cost[i];
    if (tank < 0) {
      tank = 0;
      start = i + 1;
    };
  }
  return total >= 0 ? start : -1;
};
