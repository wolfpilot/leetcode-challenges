export {}

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  // Adjacency list to hold all courses and their prerequisites
  const list = new Map<number, number[]>()

  // Keep track of visited nodes; makes it easy to tell if we've already visited one before
  const visiting = new Set()

  // Begin by populating the keys (courses)
  for (let i = 0; i < numCourses; i++) {
    list.set(i, [])
  }

  // Add values (prerequisites per each course)
  for (const [key, val] of prerequisites) {
    const current = list.get(key)

    if (!current) continue

    current.push(val)
    list.set(key, current)
  }

  function canComplete(courseIdx: number) {
    // Already visited; loop detected
    if (visiting.has(courseIdx)) return false

    const prereqs = list.get(courseIdx)

    // No prereqs, no need to branch anymore
    if (!prereqs?.length) return true

    // Mark course
    visiting.add(courseIdx)

    for (let p of prereqs) {
      if (!canComplete(p)) return false
    }

    // Course done; remove from current path
    visiting.delete(courseIdx)

    // All prereqs verified; remove value
    list.set(courseIdx, [])

    return true
  }

  for (let i = 0; i < numCourses; i++) {
    if (!canComplete(i)) return false
  }

  return true
}

/**
 * Time: O(n + m) - need to visit every course and every prereq once
 * Space: O(n + m) - storing adjacency list and temp state
 *
 * n = number of courses
 * m = number of prerequisite relationships
 */

// case 1
// prettier-ignore
const grid1 = [
    [1,0]
]

console.log(canFinish(2, grid1))

// case 2
// prettier-ignore
const grid2 = [
    [1,0],
    [0,1]
]

console.log(canFinish(2, grid2))

// case 3 - random example, looping 7 -> 5
// prettier-ignore
const grid3 = [
    [1,0],
    [0,2],
    [2,5],
    [2,7],
    [7,5]
]

console.log(canFinish(2, grid3))
