export {}

/**
 * Initialise two pointers.
 *
 * Loop through string `t` keeping track of the index and with each
 * iteration compare the `t` char with the current `s` char.
 *
 * Is it a match? Then we can advance `s` index 1 space.
 *
 * Once we get to the end of the loop, we will either have counted
 * through all of the `s` chars or not.
 */
function isSubsequence(s: string, t: string): boolean {
  let sIdx = 0

  for (let tIdx = 0; tIdx < t.length; tIdx++) {
    if (s[sIdx] === t[tIdx]) {
      sIdx++
    }
  }

  return sIdx === s.length
}

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

console.log(isSubsequence("abc", "ahbgdc"))
console.log(isSubsequence("axc", "ahbgdc"))
