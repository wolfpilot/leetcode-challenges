export {}

/**
 * Sliding window
 */
function minSubArrayLen(target: number, nums: number[]): number {
  if (target === null || !nums.length) return 0

  let minCount = Infinity

  let left = 0
  let right = 0

  let currSum = 0

  /**
   * NOTE: Do not use `left < nums.length - 1` as an exit condition.
   *
   * Take example #3. What will happen is that the right index will keep incrementing endlessly
   * since the total sum of the array elements does not reach the desired target.
   *
   * Instead, we should stop when the right index reaches the end of the array.
   */
  while (right < nums.length) {
    currSum += nums[right]
    right++

    /**
     * Once the window has expanded to where the condition is met, it's time for it to "catterpillar"
     * (or contract) itself starting from the left.
     */
    while (currSum >= target) {
      minCount = Math.min(minCount, right - left)

      currSum -= nums[left]
      left++
    }
  }

  return minCount === Infinity ? 0 : minCount
}

/**
 * Time complexity: O(2n) => O(n)
 * Space complexity: O(1)
 */

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
console.log(minSubArrayLen(4, [1, 4, 4]))
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]))
