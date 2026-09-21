export {}

function lengthOfLongestSubstring(s: string): number {
  const len = s.length

  if (len <= 1) return len

  let chars = new Map()

  let left = 0
  let max = 0

  for (let right = 0; right < s.length; right++) {
    const char = s[right]

    if (chars.has(char) && chars.get(char) >= left) {
      left = chars.get(char) + 1
    }

    max = Math.max(max, right - left + 1)

    chars.set(char, right)
  }

  return max
}

/**
 * Time complexity: O(2n) = O(n)
 * Space complexity: O(n)
 */

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
