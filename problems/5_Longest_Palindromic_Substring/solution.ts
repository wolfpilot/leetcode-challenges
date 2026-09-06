/**
 * Expand around each letter as if it was the palindrome's centre
 */
function longestPalindrome(s: string): string {
  // Minimal palindrome given the constraints
  let res = s[0]

  function expand(left: number, right: number): string {
    // Expand while valid palindrome
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--
      right++
    }

    return s.substring(left + 1, right)
  }

  for (let i = 0; i < s.length; i++) {
    const odd = expand(i, i)
    const even = expand(i, i + 1)

    if (odd.length > res.length) {
      res = odd
    }

    if (even.length > res.length) {
      res = even
    }
  }

  return res
}

/**
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */

console.log(longestPalindrome("babad"))
console.log(longestPalindrome("cbbd"))
