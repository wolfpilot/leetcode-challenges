export {}

function intersection(nums1: number[], nums2: number[]): number[] {
  const res: number[] = []

  const set1 = new Set(nums1)
  const set2 = new Set(nums2)

  for (let i of set1) {
    if (set2.has(i)) {
      res.push(i)
    }
  }

  return res
}

/**
 * Time complexity: O(n + m) = O(n)
 * Space complexity: O(n + m) = O(n)
 */

console.log(intersection([1, 2, 2, 1], [2, 2]))
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]))
