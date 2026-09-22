export {}

function minWindow(s: string, t: string): string {
  if (t.length > s.length) return ""

  let min = ""
  let missing = t.length

  let left = 0
  let right = 0

  const charMap = new Map<string, number>()

  // Get a count of each character
  for (let i = 0; i < t.length; i++) {
    const val = charMap.get(t[i]) || 0

    charMap.set(t[i], val + 1)
  }

  /**
   * Advance the right pointer, while subtracting the current char if it's a match.
   */
  while (right < s.length) {
    const rightChar = s[right]
    const rightCharCount = charMap.get(rightChar)

    if (rightCharCount !== undefined) {
      if (rightCharCount > 0) {
        missing--
      }

      charMap.set(rightChar, rightCharCount - 1)
    }

    right++

    /**
     * All chars found, start shrinking window.
     */
    while (missing === 0) {
      const newMin = s.substring(left, right)

      if (!min || newMin.length < min.length) {
        min = newMin
      }

      const leftChar = s[left]
      const leftCharCount = charMap.get(leftChar)

      /**
       * Re-add left-side chars as we pass them
       */
      if (leftCharCount !== undefined) {
        charMap.set(leftChar, leftCharCount + 1)

        if (leftCharCount >= 0) {
          missing++
        }
      }

      left++
    }
  }

  return min
}

/**
 * Time complexity: O(s + t)
 * Space complexity: O(t)
 */

console.log(minWindow("ADOBECODEBANC", "ABC"))
console.log(minWindow("a", "a"))
console.log(minWindow("a", "aa"))
