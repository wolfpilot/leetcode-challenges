export {}

/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let start = 0
  let mid = 0
  let end = nums.length - 1

  while (mid <= end) {
    // Swap low and mid
    if (nums[mid] === 0) {
      const temp = nums[start]

      nums[start] = nums[mid]
      nums[mid] = temp

      mid++
      start++
    }
    // Swap high and mid
    else if (nums[mid] === 2) {
      const temp = nums[end]

      nums[end] = nums[mid]
      nums[mid] = temp

      end--
    }
    // Advance the mid pointer
    else {
      mid++
    }
  }
}

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

console.log(sortColors([2, 0, 2, 1, 1, 0]))
console.log(sortColors([2, 0, 1]))
