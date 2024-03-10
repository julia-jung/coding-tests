## Tree (트리)

: 여러개의 Node와 이들간의 관계를 나타내는 Edge로 구성됨.
단 하나의 Root Node(부모 노드가 없는 노드)와 여러개의 Leaf Node(자식 노드가 없는 노드)를 가진다.

- Root 노드를 제외한 모든 노드들은 단 하나의 부모만을 가진다
- 임의의 노드에서 다른 노드로 가는 경로(path)는 유일하다.
- 회로(cycle)가 존재하지 않는다.
- 모든 노드는 서로 연결되어 있다.

### Binary Tree (이진 트리)

: 자식노드가 최대 두 개인 노드들로 구성된 트리

#### full binary tree (정이진트리)

: 모든 레벨에서 노드들이 꽉 채워져 잎새노드를 제외한 모든 노드가 자식노드를 2개씩 가지는 이진트리

#### complete binary tree (완전이진트리)

: 마지막 레벨을 제외한 모든 레벨에서 노드들이 꽉 채워진 이진트리

#### balanced binary tree (균형이진트리)

: 모든 잎새노드의 깊이 차이가 많아야 1인 이진트리

## Binary Tree Search

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
