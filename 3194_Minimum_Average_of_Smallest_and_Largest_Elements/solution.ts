export {}

/**
 * NOTE: If it wasn't asked specifically to be solved like this,
 * it would be more efficient to not push the averages, rather
 * compare the the current average to the existing min and update
 * that one instead.
 */
function minimumAverage(nums: number[]): number {
  const averages = []

  const sortedNums = nums.sort((a, b) => b - a)

  while (sortedNums.length) {
    const min = sortedNums.shift()!
    const max = sortedNums.pop()!

    averages.push((min + max) / 2)
  }

  return Math.min(...averages)
}

/**
 * Time complexity: O(log n + n / 2) => O(n)
 * Space complexity: O(n)
 */

console.log(minimumAverage([7, 8, 3, 4, 15, 13, 4, 1]))
console.log(minimumAverage([1, 9, 8, 3, 10, 5]))
console.log(minimumAverage([1, 2, 3, 7, 8, 9]))
