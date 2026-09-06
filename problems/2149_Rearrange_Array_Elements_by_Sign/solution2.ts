function rearrangeArray2(nums: number[]): number[] {
  const res: number[] = []

  const pos = []
  const neg = []

  for (let i = 0; i < nums.length; i++) {
    nums[i] > 0 ? pos.push(nums[i]) : neg.push(nums[i])
  }

  for (let j = 0; j < pos.length; j++) {
    res.push(pos[j])
    res.push(neg[j])
  }

  return res
}

/**
 * Time complexity: O(2n) = O(n)
 * Space complexity: O(n)
 */

console.log(rearrangeArray2([3, 1, -2, -5, 2, -4]))
console.log(rearrangeArray2([-1, 1]))
