export {}

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let left = 0
  let right = 0

  while (right < nums.length) {
    if (nums[right] !== 0) {
      // Swap the two elements
      ;[nums[left], nums[right]] = [nums[right], nums[left]]

      left++
    }

    right++
  }
}

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

console.log(moveZeroes([0, 1, 0, 3, 12]))
console.log(moveZeroes([0]))
