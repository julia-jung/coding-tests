/** ⭐⭐
 * There are some spherical balloons taped onto a flat wall that represents the XY-plane. 
 * The balloons are represented as a 2D integer array points where points[i] = [xstart, xend] denotes a balloon 
 * whose horizontal diameter stretches between xstart and xend. You do not know the exact y-coordinates of the balloons.
 * Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. 
 * A balloon with xstart and xend is burst by an arrow shot at x if xstart <= x <= xend. 
 * There is no limit to the number of arrows that can be shot. 
 * A shot arrow keeps traveling up infinitely, bursting any balloons in its path.
 * Given the array points, return the minimum number of arrows that must be shot to burst all balloons.
 */

findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]]); // 2
findMinArrowShots([[1, 2], [3, 4], [5, 6], [7, 8]]); // 4
findMinArrowShots([[1, 2], [2, 3], [3, 4], [4, 5]]); // 2

function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[0] - b[0]);
  let shots = 1;
  
  let start = points[0][0];
  let end = points[0][1];
  for (let i = 1; i < points.length; i++) {
    const cur = points[i];

    if (cur[0] <= end) {
      start = Math.max(start, cur[0]);
      end = Math.min(end, cur[1]);
    } else {
      shots++;
      start = cur[0];
      end = cur[1];
    }
  }

  return shots;
};