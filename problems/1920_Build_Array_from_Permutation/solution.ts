function buildArray(nums: number[]): number[] {
  return nums.map((val) => nums[val])
}

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

const res1 = buildArray([0, 2, 1, 5, 3, 4])
console.log("res1", res1)

const res2 = buildArray([5, 0, 1, 2, 3, 4])
console.log("res2", res2)
