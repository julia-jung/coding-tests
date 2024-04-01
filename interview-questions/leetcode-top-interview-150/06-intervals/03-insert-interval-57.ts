/** ⭐⭐
 * You are given an array of non-overlapping intervals intervals 
 * where intervals[i] = [starti, endi] represent the start and the end of the ith interval 
 * and intervals is sorted in ascending order by starti. 
 * You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
 * Insert newInterval into intervals such that intervals is still sorted in ascending order by starti 
 * and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
 * Return intervals after the insertion.
 */

insert([[1, 3], [6, 9]], [2, 5]); // [[1,5],[6,9]]
insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]); // [[1,2],[3,10],[12,16]]

function insert(intervals: number[][], newInterval: number[]): number[][] {
  const output = [];
  let i = 0;
  
  // push all intervals ends before newInterval start
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    output.push(intervals[i++]);
  }
  
  // merge all overlapping intervals
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval = [
      Math.min(newInterval[0], intervals[i][0]),
      Math.max(newInterval[1], intervals[i][1]),
    ];
    i++;
  }
  output.push(newInterval);

  // push all the rest intervals
  while (i < intervals.length) {
    output.push(intervals[i++]);
  }

  return output;
};