export {}

function threeSum(nums: number[]): number[][] {
  const res: number[][] = []
  const sorted = nums.sort((a, b) => a - b)

  // Loop through all but last 2 elements
  for (let i = 0; i < sorted.length - 2; i++) {
    if (i > 0 && sorted[i] === sorted[i - 1]) continue

    let left = i + 1
    let right = sorted.length - 1

    // Define l/r pointers, moving towards each other
    while (left < right) {
      const sum = sorted[i] + sorted[left] + sorted[right]

      if (sum === 0) {
        res.push([sorted[i], sorted[left], sorted[right]])

        left++
        right--

        // Exclude duplicates to the left
        while (left < right && sorted[left] === sorted[left - 1]) {
          left++
        }

        // Exclude duplicates to the right
        while (left < right && sorted[right] === sorted[right + 1]) {
          right--
        }
      } else if (sum > 0) {
        right--
      } else {
        left++
      }
    }
  }

  return res
}

/**
 * Time complexity: O(n2)
 * Space complexity: O(n)
 */

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([0, 1, 1]))
console.log(threeSum([0, 0, 0]))
