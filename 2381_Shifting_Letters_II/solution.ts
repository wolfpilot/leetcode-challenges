export {}

const CHAR_CODES = {
  a: 97,
  z: 122,
} as const

/**
 * !: NOTE: Although it works, this solution fails with a Time Limit Exceeded error.
 */
function shiftingLetters(s: string, shifts: number[][]): string {
  let res = s

  // We need to loop through the shifts regardless
  for (let i = 0; i < shifts.length; i++) {
    /**
     * To help map the indices to their actual meanings:
     *
     * shifts[i][0] = start
     * shifts[i][1] = end
     * shifts[i][2] = transform
     */
    const modifier = shifts[i][2] === 0 ? -1 : +1

    // Loop through the specified transform range
    for (let j = shifts[i][0]; j <= shifts[i][1]; j++) {
      const newCharCode = res.charCodeAt(j) + modifier

      const newChar =
        newCharCode < CHAR_CODES.a
          ? "z"
          : newCharCode > CHAR_CODES.z
          ? "a"
          : String.fromCharCode(newCharCode)

      res = res.substring(0, j) + newChar + res.substring(j + 1)
    }
  }

  return res
}

/**
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */

console.log(
  shiftingLetters("abc", [
    [0, 1, 0],
    [1, 2, 1],
    [0, 2, 1],
  ])
)
console.log(
  shiftingLetters("dztz", [
    [0, 0, 0],
    [1, 1, 1],
  ])
)
