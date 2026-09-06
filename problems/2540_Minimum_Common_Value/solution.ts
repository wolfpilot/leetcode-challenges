export {}

/**
 * The idea is to create a little "race" between two pointers
 * which constantly evaluate whether they are ahead or behind
 * the other one.
 *
 * This way, we can keep incrementing only one if, for example,
 * it meets 5 values in a row that are lower than the most recent
 * one found in the other array.
 */
function getCommon(nums1: number[], nums2: number[]): number {
  let res = -1

  let i = 0
  let j = 0

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      res = nums1[i]
      break
    }

    nums1[i] < nums2[j] ? i++ : j++
  }

  return res
}

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

console.log(getCommon([1, 2, 3], [2, 4]))
console.log(getCommon([1, 2, 3, 6], [2, 3, 4, 5]))
