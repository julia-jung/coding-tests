## Binary Tree

### BFS (Breadth-First-Search) 너비우선탐색

: 시작 정점으로부터 가까운 정점을 먼저 방문하고 멀리 떨어져 있는 정점을 나중에 방문하는 순회 방법.
깊게(deep) 탐색하기 전에 넓게(wide) 탐색하는 것

- 두 노드 사이의 **최단 경로** 혹은 임의의 경로를 찾고 싶을 때 사용
- 주로 queue를 사용해서 iteration을 한다

```
// given a graph and starting node, find the shortest path to each nodes
const nodes: Node[] = [...];
const EDGE_DISTANCE = 6;
function shortestSearch(startId: number) {
  const queue = [startId];
  const distances = new Array(nodes.length).fill(-1);
  distances[startId] = 0;

  while (queue.length > 0) {
    const node = queue.shift();
    for (const neighbor of nodes[node].neighbors) {
      if (distances[neighbor] === -1) { // this node have not visted yet
        distances[neighbor] = distances[node] + EDGE_DISTANCE; // distance to our neighbor is distance to ourselves + 1(edge_distance)
        queue.push(neighbor);
      }
    }
  }
  return distances;
}
```

### DFS (Depth-First-Search) 깊이우선탐색

: 루트 노드(혹은 다른 임의의 노드)에서 시작해서 다음 분기(branch)로 넘어가기 전에 해당 분기를 완벽하게 탐색하는 방법.
넓게(wide) 탐색하기 전에 깊게(deep) 탐색하는 것

- 너비우선탐색보다 구현방법은 간단하지만 경우에 따라 매우 비효율적일 수 있다.

```
// Given matrix with values of 0 and 1, find the largest region of connected 1s

function getBiggestRegion(matrix: number[][]) {
  let maxRegion = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 1) {
        const size = getRegionSize(matrix, row, col);
        maxRegion = Math.max(size, maxRegion);
      }
    }
  }

  return maxRegion;
}

function getRegionSize(matrix: number[][], row: number, col: number) {
  if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[row].length) {
    return 0;
  }
  if (matrix[row][col] === 0) {
    return 0;
  }

  matrix[row][col] = 0; // Clear the visted cell to avoid repeat search for the same cell
  let size = 0;
  for (let r = row - 1; r <= row + 1; r++) {
    for (let c = col - 1; c <= col + 1; c++) {
      if (r !== row || c !== col) {
        size += getRegionSize(matrix, r, c); // add size up RECURSIVELY
      }
    }
  }
}

```
