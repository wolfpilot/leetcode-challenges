export {}

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  // Each course maps to its prerequisites
  const courses = new Map<number, number[]>()
  // Courses currently in the DFS recursion path
  const visiting = new Set<number>()
  // Courses whose prerequisites have been fully processed
  const completed = new Set<number>()

  // Valid course order
  const path: number[] = []

  // Initialize every course
  for (let course = 0; course < numCourses; course++) {
    courses.set(course, [])
  }

  // Add values (prerequisites per each course)
  for (const [key, val] of prerequisites) {
    const current = courses.get(key)

    if (!current) continue

    current.push(val)
    courses.set(key, current)
  }

  function dfs(course: number): boolean {
    // Already processed this course; don't add it twice
    if (completed.has(course)) return true
    // Found a course already in our current path -> cycle
    if (visiting.has(course)) return false

    // Mark course as currently being explored
    visiting.add(course)

    // Complete all prerequisites before this course
    for (const prerequisite of courses.get(course)!) {
      if (!dfs(prerequisite)) return false
    }

    // Finished exploring this course
    visiting.delete(course)
    completed.add(course)

    // All prerequisites are done, so we can take this course
    path.push(course)

    return true
  }

  // Check every course, including disconnected ones
  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course)) return []
  }

  return path
}

/**
 * Time: O(V + E)
 * Space: O(V + E)
 *
 * V = number of courses (Vertices)
 * E = number of prerequisite relationships (Edges)
 */

// case 1
// prettier-ignore
const grid1 = [
    [1,0]
]

console.log(findOrder(2, grid1))

// case 2
// prettier-ignore
const grid2 = [
    [1,0],
    [2,0],
    [3,1],
    [3,2]
]

console.log(findOrder(4, grid2))

// case 3
// prettier-ignore
const grid3: number[][] = []

console.log(findOrder(1, grid3))

// case 4 - random example
// prettier-ignore
const grid4 = [
    [1,0],
    [2,0],
    [3,1],
    [3,2],
    [4,3],
    [5,0]
]

console.log(findOrder(6, grid4))

// case 5 - random example
// prettier-ignore
const grid5 = [
    [0,1],
]

console.log(findOrder(2, grid5))
