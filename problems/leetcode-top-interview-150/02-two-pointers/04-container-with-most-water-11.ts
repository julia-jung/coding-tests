/** ⭐⭐
 * You are given an integer array height of length n. 
 * There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 * Return the maximum amount of water a container can store.
 * Notice that you may not slant the container.
 */

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]); // 49
maxArea([1, 1]); // 1

function maxArea(height: number[]): number {
  let water = 0;
  let left = 0;
  let right = height.length - 1;

  while (right > left) {
    let l = right - left;
    let h = Math.min(height[left], height[right]);
    water = Math.max(l * h, water);
    
    if (height[left] < height[right]) {
      while (height[left] <= h && left < height.length) left++;
    } else {
      while (height[right] <= h && right >= 0) right--;
    }

    if (right - left === l) {
      break;
    }
  } 

  return water; 
};

function maxArea2(height: number[]): number {
  let water = 0;
  let left = 0;
  let right = height.length - 1;

  while (right > left) {
    let l = right - left;
    let h = Math.min(height[left], height[right]);
    water = Math.max(l * h, water);
    
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  } 

  return water; 
};