export {}

/**
 * For the sake of mapping out the mental model, consider the following:
 *
 * const CHAR_CODES = {
 *   a: 97,
 *   z: 122,
 * } as const
 *
 * const ALPHABET_LENGTH = 26
 *
 * Of course, this can also be done in a one-liner if you so desire.
 */
function shift(char: string, transforms: number) {
  const charCode = char.charCodeAt(0)
  const newCharCode = ((charCode - 97 + transforms) % 26) + 97
  const newChar = String.fromCharCode(newCharCode)

  return newChar
}

/**
 * Ngl, this was more than inspired by some pre-existing answers,
 * so I feel I should at least explain to others how the solution works.
 *
 * Leaving code aside for a second, it's easiest if we think about what
 * the problem asks us to do. When shifting the letters:
 *
 * Index 0 will shift three times by x + y + z amount.
 * Index 1 will shift twice by x + y amount.
 * Index 2 will shift once by x amount.
 *
 * Seeing that the transforms stack up in reverse order, it would be
 * convenient if we would traverse it the same way as in the end it
 * will be just a matter of summing up all the shifts as we iterate through.
 */
function shiftingLetters(s: string, shifts: number[]): string {
  let res = ""
  let transforms = 0

  // Iterate through backwards
  for (let i = s.length - 1; i >= 0; i--) {
    // Cumulate all shifts
    transforms += shifts[i]

    // Since we're iterating backwards, we add the new letters in front
    res = shift(s[i], transforms) + res
  }

  return res
}

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

console.log(shiftingLetters("abc", [3, 5, 9]))
console.log(shiftingLetters("aaa", [1, 2, 3]))
