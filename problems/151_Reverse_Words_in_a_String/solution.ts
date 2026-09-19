export {}

function reverseWords(s: string): string {
  let result = ""

  let copier = s.length - 1
  let delimiter = s.length - 1

  let isCopying = false

  while (copier >= 0 && delimiter >= 0) {
    // detected the end of a word
    if (!isCopying && s[delimiter] !== " ") {
      copier = delimiter
      isCopying = true
    }
    // detected the start of a word
    else if (isCopying && s[delimiter] === " ") {
      result += ` ${s.substring(delimiter + 1, copier + 1)}`

      isCopying = false

      copier = delimiter
      delimiter--
    }
    // detected the start of the `s` string
    else if (isCopying && delimiter === 0) {
      result += ` ${s.substring(0, copier + 1)}`

      isCopying = false

      copier = delimiter
      delimiter--
    }
    // move on
    else {
      delimiter--
    }
  }

  return result.trim()
}

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

console.log(reverseWords("the sky is blue"))
console.log(reverseWords("  hello world  "))
console.log(reverseWords("a good   example"))
console.log(reverseWords(" asdasd df f"))
