export {}

function reversePrefix(word: string, ch: string): string {
  let reversed = ""

  const firstOccurence = word.indexOf(ch)

  if (firstOccurence < 0) {
    return word
  }

  for (let i = firstOccurence; i >= 0; i--) {
    reversed += word[i]
  }

  reversed += word.substring(firstOccurence + 1, word.length)

  return reversed
}

/**
 * Time complexity: O(n + m)
 * Space complexity: O(1)
 */

console.log(reversePrefix("abcdefd", "d"))
console.log(reversePrefix("xyxzxe", "z"))
console.log(reversePrefix("abcd", "z"))

function reversePrefix2(word: string, ch: string): string {
  let res = word

  for (let i = 0; i < word.length; i++) {
    if (word[i] !== ch) continue

    const reversed = word
      .substring(0, i + 1)
      .split("")
      .reverse()
      .join("")

    res = `${reversed}${word.substring(i + 1, word.length)}`

    break
  }

  return res
}

/**
 * Time complexity: O(n + 3n) (?)
 * Space complexity: O(1)
 */

console.log(reversePrefix2("abcdefd", "d"))
console.log(reversePrefix2("xyxzxe", "z"))
console.log(reversePrefix2("abcd", "z"))
