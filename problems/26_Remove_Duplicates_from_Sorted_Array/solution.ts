export {}

function removeDuplicates(nums: number[]): number {
  let uniqueIdx = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[uniqueIdx] = nums[i]
      uniqueIdx++
    }
  }

  return uniqueIdx
}

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
