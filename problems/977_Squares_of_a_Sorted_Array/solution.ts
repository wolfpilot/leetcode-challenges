export {}

function sortedSquares(nums: number[]): number[] {
  const res: number[] = []

  let left = 0
  let right = nums.length - 1

  /**
   * The algorithm below will by default sort the results from large to small, thus
   * we invert the for loop to generate an ascending sorted array from the start.
   */
  for (let i = nums.length - 1; i >= 0; i--) {
    /**
     * Squaring any number will always result in a positive number.
     *
     * With this in mind, we can already compare which of the squares
     * will be larger as we loop through the numbers.
     */
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      res[i] = Math.pow(nums[left], 2)
      left++
    } else {
      res[i] = Math.pow(nums[right], 2)
      right--
    }
  }

  return res
}

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

console.log(sortedSquares([-4, -1, 0, 3, 10]))
console.log(sortedSquares([-7, -3, 2, 3, 11]))
