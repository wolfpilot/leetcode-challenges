export {}

function decrypt(code: number[], k: number): number[] {
  if (k === 0) {
    return new Array(code.length).fill(0)
  }

  const sum = code.reduce((acc, curr) => acc + curr)

  let res = code.map((item) => (k > 0 ? sum - item : sum + item))

  return res
}
/**
 * TODO Time complexity:
 * TODO Space complexity:
 */

console.log(decrypt([5, 7, 1, 4], 3))
console.log(decrypt([1, 2, 3, 4], 0))
console.log(decrypt([2, 4, 9, 3], -2)) // !: WRONG, bcs above we're subtracting only 1 element. Here, we need 2
