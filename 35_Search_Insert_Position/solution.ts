export {}

function searchInsert(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1

  let mid = 0

  while (left <= right) {
    mid = left + Math.floor((right - left) / 2)

    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  /**
   * Normally here we would return the mid, however since:
   *
   * a) We're either finding the target as the mid.
   * b) Or exiting the loop when none is found.
   *
   * when scenario b) is reached, left will have already been incremented
   * to where the target would have normally been at.
   */
  return left
}

/**
 * Time complexity: O(log n)
 * Space complexity: O(1)
 */

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))
