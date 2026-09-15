export {}

/**
 * Not even going to pretend I came up with this.
 *
 * See Floyd's Cycle Finding algorithm.
 *
 * Exlanation:
 * https://medium.com/@zephyr.ventum/floyds-tortoise-and-hare-cycle-finding-algorithm-my-over-explanation-5631c5ce71d7
 *
 * Neetcode:
 * https://www.youtube.com/watch?v=wjYnzkAhcNk
 */
function findDuplicate(nums: number[]): number {
  let slow = nums[0]
  let fast = nums[0]

  do {
    slow = nums[slow]
    fast = nums[nums[fast]]
  } while (slow != fast)

  fast = nums[0]
  while (slow != fast) {
    slow = nums[slow]
    fast = nums[fast]
  }

  return fast
}

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

console.log(findDuplicate([1, 3, 4, 2, 2]))
console.log(findDuplicate([3, 1, 3, 4, 2]))
console.log(findDuplicate([3, 3, 3, 3, 3]))
