/** ⭐⭐
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. 
 * You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates 
 * that you must take course bi first if you want to take course ai.
 * For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
 * Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. 
 * If it is impossible to finish all courses, return an empty array.
 */

// Input: numCourses = 2, prerequisites = [[1,0]] -> Output: [0,1]
// Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]] -> Output: [0,2,1,3]
// Input: numCourses = 1, prerequisites = [] -> Output: [0]

// Topological sort(same with course-schedule-1, but return path if it has length of numCourses)
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
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

  return path.length === numCourses ? path : [];
};

// everything same with course-schedule-1 but have additional output array containing courses
function findOrderDFS(numCourses: number, prerequisites: number[][]): number[] {
  const courses = new Map<number, Set<number>>();
  
  for (let i = 0; i < numCourses; i++) {
    courses.set(i, new Set<number>());
  }
  for (const pre of prerequisites) {
    const [course, dependency] = pre;
    const dependencies = courses.get(course);
    dependencies.add(dependency);
  }
  
  const output = [];
  const visited = new Set<number>();
  const path = new Set<number>();
  for (const course of courses.keys()) {
    if (findLoop(course)) return [];
  }
  return output;

  function findLoop(course: number) {
    if (path.has(course)) return true;
    if (visited.has(course)) return false;
    
    path.add(course);
    visited.add(course);

    const dependencies = courses.get(course);
    for (const dep of dependencies) {
      if(findLoop(dep)) return true;
    }

    path.delete(course);
    output.push(course);

    return false;
  }
};