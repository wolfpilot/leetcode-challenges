export {}

function findAnagrams(s: string, p: string): number[] {
  const results: number[] = []

  if (p.length > s.length) return results

  const charMap = new Map<string, number>()

  let missing = p.length

  let left = 0
  let right = 0

  // How many of each character we need
  for (const char of p) {
    const val = charMap.get(char) || 0

    charMap.set(char, val + 1)
  }

  while (right < s.length) {
    const rightChar = s[right]
    const rightCharVal = charMap.get(rightChar)

    // Add right character to the window
    if (rightCharVal !== undefined) {
      if (rightCharVal > 0) {
        missing--
      }

      charMap.set(rightChar, rightCharVal - 1)
    }

    // Keep window size at most p.length
    const windowLen = right - left + 1

    if (windowLen > p.length) {
      const leftChar = s[left]
      const leftCharVal = charMap.get(leftChar)

      if (leftCharVal !== undefined) {
        // We're putting this character back into our "needed" counts
        charMap.set(leftChar, leftCharVal + 1)

        // If it was not an extra character, we now need it again
        if (leftCharVal >= 0) {
          missing++
        }
      }

      left++
    }

    // Window is exactly p.length and contains everything we need
    if (right - left + 1 === p.length && missing === 0) {
      results.push(left)
    }

    right++
  }

  return results
}

/**
 * Time complexity: O(s + p) = O(n)
 * Space complexity: O(1) based on the 26 letters on the English alphabet
 */

console.log(findAnagrams("cbaebabacd", "abc"))
console.log(findAnagrams("abab", "ab"))
