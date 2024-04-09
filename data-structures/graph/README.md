# Data Structure - Graph

## Concept

> A Graph data structure is a collection of nodes (Trees are type of Graph). But unlike with trees, there are no rules about how nodes should be connected.

- There are no root, parent, or child nodes in Graph
- Nodes are called _vertices_ and they are connected by _edges_
  - Usually, Graph have more edges than vertices, and it its called dense graph
  - If Edges are less than vertices, it is called sparse graph

### Directed vs. Undirected Graph

- If the edges are directional, it is called Directed Graph(or Digraph)
- If edges are all bidirectional, it is called Undirected Graph(or unordered graph or just graph) and has no implied direction on edges between the nodes. Edge can be traversed in either direction. By default, graphs are assumed to be unordered.

### Weighted vs. Unweighted Graph

- If edges have weights, it is called Weighted Graph. Edges have numbers that typically shows the cost of traversing in a graph.
  - We can find the minimum cost of traversing the graph by finding the path that has the least sum of weights.

### Cyclic vs. Acyclic Graph

- In Cyclic graphs starting vertex also serves as the final vertex.
- Trees are Acyclic Graphs that includes a path from the starting vertex(the root) to some other vertex.

<br />

## Representing Graphs

A Graph can be represented using 3 data structures

- Edge List
  ```js
  const graph = [
    [0, 2],
    [2, 3],
    [2, 1],
    [1, 3],
  ];
  // 0-2 connected
  // 2-3 connected
  // 2-1 connected
  // 1-3 coneected
  ```
- Adjacency List
  ```js
  const graph = [[2], [2, 3], [0, 1, 3], [1, 2]];
  // 0 => connected to 2
  // 1 => connected to 2 and 3
  // 2 => connected to 0, 1, and 3
  // 3 => connected to 1 and 2
  ```
- Adjacency Matrix
  ```js
  const graph3 = [
    [0, 0, 1, 0], // 0 => connected to 2
    [0, 0, 1, 1], // 1 => connected to 2 and 3
    [1, 1, 0, 1], // 2 => connected to 0, 1, and 3
    [0, 1, 1, 0], // 3 => connected to 1 and 2
  ];
  ```

<br />

## When to use

- Facebook uses it for their social network connection
- Google maps uses it for the shorted route calculation

### Good at:

- Relationship

### Bad at:

- Scaling is hard

<br />

## Resources

[Graph playground](https://visualgo.net/en/graphds)
