export {}

function lengthOfLongestSubstring(s: string): number {
  const len = s.length

  if (len <= 1) return len

  const unique = new Set()

  let left = 0
  let right = 0
  let max = 0

  while (right < len) {
    if (!unique.has(s[right])) {
      max = Math.max(max, right + 1 - left)

      unique.add(s[right])
      right++
    } else {
      unique.delete(s[left])
      left++
    }
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
