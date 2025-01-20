export {}

/**
 * A good visual explanation of the algorithm used:
 *
 * @see https://leetcode.com/problems/max-consecutive-ones-iii/solutions/719833/python3-sliding-window-with-clear-example-explains-why-the-soln-works/?envType=problem-list-v2&envId=sliding-window
 */
function longestOnes(nums: number[], k: number): number {
  let left = 0
  let right = 0

  while (right < nums.length) {
    // Check if we have leading 0s.
    // If so, subtract one from the allowed flips and move the right pointer forward.
    if (nums[right++] === 0) {
      k--
    }

    if (k >= 0) continue

    // Check if we have trailing 0s.
    // If so, add one to the allowed flips and move the left pointer forward.
    if (nums[left++] === 0) {
      k++
    }
  }

  // Since the right index is always expanding, there is no need to keep keep track of the max count.
  return right - left
}

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2))
console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3))
