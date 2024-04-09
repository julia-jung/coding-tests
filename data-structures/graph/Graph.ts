// Undirected
export class Graph {
  private numberOfNodes: number;
  private adjacentList: Record<string, string[]>;

  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  public addVertex(node: string) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;

    return this;
  }

  public addEdge(node1: string, node2: string) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);

    return this;
  }

  public showConnections(): this {
    for (const [node, connections] of Object.entries(this.adjacentList)) {
      let connectionsStr = '';
      for (const vertex of connections) {
        connectionsStr += vertex + ' ';
      }
      console.log(node + '-->' + connectionsStr.trim());
    }

    return this;
  }
}

const myGraph = new Graph();
myGraph
  .addVertex('0')
  .addVertex('1')
  .addVertex('2')
  .addVertex('3')
  .addVertex('4')
  .addVertex('5')
  .addVertex('6')
  .addEdge('3', '1')
  .addEdge('3', '4')
  .addEdge('4', '2')
  .addEdge('4', '5')
  .addEdge('1', '2')
  .addEdge('1', '0')
  .addEdge('0', '2')
  .addEdge('6', '5');

myGraph.showConnections();
//Answer:
// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5
