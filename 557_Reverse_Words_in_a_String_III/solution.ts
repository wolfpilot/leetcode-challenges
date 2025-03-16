export {}

function reverseWords(s: string): string {
  const words = s.split(" ") // O(n)

  /**
   * O(m)
   *
   * Really all the operations run in total O(n) times since
   * split, reverse and join are called for each char of the string
   * exactly 3 times which can be reduced to O(n).
   */
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("").reverse().join("") // O(k * 3)
  }

  return words.join(" ") // O(m)
}

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

console.log(reverseWords("Let's take LeetCode contest"))
console.log(reverseWords("Mr Ding"))
