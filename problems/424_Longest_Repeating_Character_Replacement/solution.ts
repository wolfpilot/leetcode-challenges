export {}

function characterReplacement(s: string, k: number): number {
  let left = 0
  let right = 0

  let maxLength = 0
  let maxCharCount = 0

  const charMap = new Map<string, number>()

  while (right < s.length) {
    /**
     * Update the map with a character and the times we've seen it
     */
    const rightChar = s[right]
    const rightCharCount = (charMap.get(rightChar) || 0) + 1

    charMap.set(rightChar, rightCharCount)

    /**
     * All chars except the most frequent one need to be replaced
     */
    const windowLen = right - left + 1
    maxCharCount = Math.max(maxCharCount, rightCharCount)

    const swaps = windowLen - maxCharCount

    /**
     * More swaps needed than available => time to shrink the window
     */
    if (swaps > k) {
      const leftChar = s[left]
      const leftCharCount = charMap.get(leftChar) || 0

      charMap.set(leftChar, leftCharCount - 1)

      left++
    }

    // Update the max, recalculating the window
    maxLength = Math.max(maxLength, right - left + 1)

    // Finally, expand the window
    right++
  }

  return maxLength
}

/**
 * Time complexity: O(n)
 * Space complexity: O(1) since there are max 26 uppercase characters
 */

console.log(characterReplacement("ABAB", 2))
console.log(characterReplacement("AABABBA", 1))
