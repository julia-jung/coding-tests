/** ⭐⭐
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
 * and return an array of the non-overlapping intervals that cover all the intervals in the input.
 */

merge([[1, 3], [2, 6], [8, 10], [15, 18]]); // [[1,6],[8,10],[15,18]]
merge([[1, 4], [4, 5]]); // [[1,5]]


function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [];
  let start = intervals[0][0];
  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= end) {
      end = Math.max(end, intervals[i][1]);
    } else {
      merged.push([start, end]);
      start = intervals[i][0];
      end = intervals[i][1];
    }
  }
  merged.push([start, end]);
  
  return merged;
};

// same approach but less variables
function merge2(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [[...intervals[0]]];

  for (let i = 1; i < intervals.length; i++) {
    const prev = merged[merged.length - 1];
    const cur = intervals[i];
    if (cur[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], cur[1]);
    } else {
      merged.push([...cur]);
    }
  }
  
  return merged;
};