export {}

function countPairs(nums: number[], target: number): number {
  let count = 0

  // Since we're looking for pairs, there is no need for i to go to the last index.
  for (let i = 0; i < nums.length - 1; i++) {
    // Similarly, to avoid repeated calculations, j can start one index ahead of i.
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] >= target) continue

      count++
    }
  }

  return count
}

/**
 * Time complexity: O(n * m)
 * Space complexity: O(1)
 */

console.log(countPairs([-1, 1, 2, 3, 1], 2))
console.log(countPairs([-6, 2, 5, -2, -7, -1, 3], -2))
