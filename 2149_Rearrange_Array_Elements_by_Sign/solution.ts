function rearrangeArray(nums: number[]): number[] {
  const res: number[] = []

  // Keep track of the alternating indices
  let indexPos = 0
  let indexNeg = 1

  // Given the constraints, we can be sure the resulting array
  // will contain an equal amount of positive and negative integers
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      res[indexPos] = nums[i]
      indexPos += 2
    } else {
      res[indexNeg] = nums[i]
      indexNeg += 2
    }
  }

  return res
}

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

console.log(rearrangeArray([3, 1, -2, -5, 2, -4]))
console.log(rearrangeArray([-1, 1]))
