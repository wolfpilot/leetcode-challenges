export {}

/**
 * Realistically, this algo could finish in the first 2 iterations.
 */
function containsDuplicate(nums: number[]): boolean {
  const unique = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (unique.has(nums[i])) {
      return true
    }

    unique.set(nums[i], 1)
  }

  return false
}

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

/**
 * A fun, albeit more costly solution that will always take at least O(n) time
 * due to converting the nums array to a Set.
 */
function containsDuplicate2(nums: number[]): boolean {
  const unique = new Set(nums)

  return nums.length !== unique.size
}

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 2, 3, 4]))
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
