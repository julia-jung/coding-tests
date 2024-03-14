/** ⭐⭐
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. 
 * You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates 
 * that you must take course bi first if you want to take course ai.
 * For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
 * Return true if you can finish all courses. Otherwise, return false.
 */

// numCourses = 2, prerequisites = [[1,0]] -> output = true
// numCourses = 2, prerequisites = [[1,0],[0,1]] -> output = false

// Topological sort
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const adj: number[][] = Array.from({ length: numCourses }, () => []); // directed graph
  const indegrees = Array(numCourses).fill(0); // number of incomming edges for each class
  const path: number[] = [];

  // 1. build directed graph
  for (const [course, prerequisite] of prerequisites) {
    adj[prerequisite].push(course); // set course ad prerequisite's outgoing edge
    // means prerequisite is course's incomming edge
    indegrees[course]++; // increment indegree for course
  }

  // 2. do topological sort to fill path
  const queue = [];
  for (let course = 0; course < numCourses; course++) {
    if (indegrees[course] === 0) {
      // if there is no incomming edge(prerequisites) for the course
      queue.push(course); // add it to the queue
    }
  }

  while(queue.length > 0) {
    // get course from queue and push it to path
    const curCourse = queue.shift();
    path.push(curCourse);

    // for each neighbor of course, decrement the indegree by 1
    // since we are removing it's prerequisite(course)
    const neighbors = adj[curCourse];
    for (const neighbor of neighbors) {
      indegrees[neighbor]--;

      // if it has no incomming edges, push it to queue
      if (indegrees[neighbor] === 0) {
        queue.push(neighbor)
      }
    }
  }

  return path.length === numCourses;
};

function canFinishDFS(numCourses: number, prerequisites: number[][]): boolean {
  // if we have a loop we can not proceed
  // graph doesn't have to be connected
  // if we checked the course we don't need to check it again
  // try with bfs
  const courses = new Map<number, Set<number>>();
  
  // 1. build courses map, having course as key and dependency set as value
  for (let i = 0; i < numCourses; i++) {
    courses.set(i, new Set<number>());
  }
  for (const prerequisite of prerequisites) {
    const [course, dependency] = prerequisite;
    const dependencies = courses.get(course);
    dependencies.add(dependency);
  }
  
  // 2. find loops from courses map
  const visited = new Set<number>();
  for (const course of courses.keys()) {
    if (findLoop(course, courses, [], visited)) {
      return false;
    }
  }
  // 3. if no loop found, return true
  return true;

  function findLoop(course: number, courses: Map<number, Set<number>>, path: number[], visited: Set<number>) {
    // if course is already in the path, there is loop
    if (path.includes(course)) return true;
    // if we already visited this course, skip finding
    if (visited.has(course)) return false;
  
    path.push(course);
    visited.add(course);
  
    const dependencies = courses.get(course);
    for (const dep of dependencies) {
      if (findLoop(dep, courses, path, visited)) {
        return true;
      }
    }
  
    path.pop();
  
    return false;
  }
};

function canFinishFailed(numCourses: number, prerequisites: number[][]): boolean {
  const map = new Map();
  if (prerequisites.length === 0) return true;

  for (let i = 0; i < prerequisites.length; i++) {
    const [course, pre] = prerequisites[i];
    const pres = map.get(course) ?? [];
    map.set(course, [...pres, pre]);
  }

  function dfs(course: number, visited: Set<number> = new Set()): number {
    let count = 1;
    visited.add(course);
    
    const pres = map.get(course);
    if (!pres || !pres.length) {
      return count;
    } else {
      for (const pre of pres) {
        if (visited.has(pre)) return 0;
        count += dfs(pre, visited);
      }
      return count;
    }
  }

  for (const course of map.keys()) {
    if (dfs(course) === numCourses) return true;
  }
  return false;
};