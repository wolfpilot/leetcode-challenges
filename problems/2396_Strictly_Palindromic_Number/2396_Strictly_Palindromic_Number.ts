/**
 * How to run:
 *
 * npx tsx
 */

function isStrictlyPalindromic(n: number): boolean {
  // n.toString(base)
}

console.log(isStrictlyPalindromic(9));
console.log(isStrictlyPalindromic(4));

// Example 1:

// Input: n = 9
// Output: false
// Explanation: In base 2: 9 = 1001 (base 2), which is palindromic.
// In base 3: 9 = 100 (base 3), which is not palindromic.
// Therefore, 9 is not strictly palindromic so we return false.
// Note that in bases 4, 5, 6, and 7, n = 9 is also not palindromic.
// Example 2:

// Input: n = 4
// Output: false
// Explanation: We only consider base 2: 4 = 100 (base 2), which is not palindromic.
// Therefore, we return false.
