/** ⭐⭐
 * You are given an array of variable pairs equations and an array of real numbers values, 
 * where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i]. 
 * Each Ai or Bi is a string that represents a single variable.
 * You are also given some queries, where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?.
 * 
 * Return the answers to all queries. If a single answer cannot be determined, return -1.0.
 * 
 * Note: The input is always valid. You may assume that evaluating the queries will not result in division by zero 
 * and that there is no contradiction.
 * 
 * Note: The variables that do not occur in the list of equations are undefined, so the answer cannot be determined for them.
 */

// Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
// -> Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
// Input: equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
// -> Output: [3.75000,0.40000,5.00000,0.20000]
// Input: equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
// -> Output: [0.50000,2.00000,-1.00000,-1.00000]

function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
  // 1. build graph first
  const map = new Map<string, Map<string, number>>();
  for (let i = 0; i < equations.length; i++) {
    const [A, B] = equations[i];
    const Amap = map.get(A) ?? new Map();
    const Bmap = map.get(B) ?? new Map();
    map.set(A, Amap.set(B, values[i]));
    map.set(B, Bmap.set(A, 1/values[i]));
  }

  // 2. find paths for each queries
  return queries.map(query => getPathWeights(query[0], query[1]));
  
  function getPathWeights(start: string, end: string, visited: Set<String> = new Set()): number {
    const startMap = map.get(start);
    if (!startMap) {
      // 3. handle rejection case
      return -1.0;
    } else if (startMap.has(end)) {
      // 4. if we found the path to the end, return it
      return startMap.get(end);
    } else {
      // 5. if we are still on the path, mark visited and walk through the path until we find the end
      visited.add(start);
      for (const [key, value] of startMap.entries()) {
        if (!visited.has(key)) {
          const productWeight = getPathWeights(key, end, visited);
          if (productWeight !== -1.0) return value * productWeight;
        }
      }
      // 6. reject if there is no path to the end
      return -1.0;
    }

  }  
};