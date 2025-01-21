export {}

type MultiDimensionalArray = (number | MultiDimensionalArray)[]

var flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
  if (n < 1) return arr

  const res: MultiDimensionalArray = []

  arr.forEach((elem) => {
    Array.isArray(elem) ? res.push(...flat(elem, n - 1)) : res.push(elem)
  })

  /**
   * Or the expanded view
   *
   * arr.forEach((elem) => {
   *   if (Array.isArray(elem)) {
   *     res.push(...flat(elem, n - 1))
   *   } else {
   *     res.push(elem)
   *   }
   * })
   */

  return res
}

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0))
console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1))
console.log(
  flat(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, [9, 10, 11], 12],
      [13, 14, 15],
    ],
    2
  )
)
