export {}

function numRescueBoats(people: number[], limit: number): number {
  let count = 0

  // Heavy to light, easier to reason about
  const sorted = people.sort((a, b) => b - a)

  let left = 0
  let right = sorted.length - 1

  while (left <= right) {
    // If together they are too much, only fit 1 heavy person
    if (sorted[left] + sorted[right] > limit) {
      left++
    } else {
      // Otherwise send both of them in
      left++
      right--
    }

    count++
  }

  return count
}

/**
 * Time complexity: O(n * log(n))
 *
 * Sort: O(n * log(n))
 * Loop: O(n)
 * Total: O(n log n) + O(n) => O(n * log(n))
 *
 * Space complexity: O(1)
 */

console.log(numRescueBoats([1, 2], 3))
console.log(numRescueBoats([3, 2, 2, 1], 3))
console.log(numRescueBoats([3, 5, 3, 4], 5))
