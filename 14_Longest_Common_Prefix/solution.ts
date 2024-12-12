export {}

function longestCommonPrefix(strs: string[]): string {
  if (!strs.length || strs.length > 200) return ""

  if (strs.length === 1) return strs[0]

  let prefix = ""

  const sortedArr = strs.sort()

  const shortestWord = sortedArr[0]
  const longestWord = sortedArr[sortedArr.length - 1]

  for (let i = 0; i < shortestWord.length; i++) {
    if (shortestWord[i] !== longestWord[i]) {
      prefix = shortestWord.substring(0, i)
      break
    }

    prefix += shortestWord[i]
  }

  return prefix
}

/**
 * Time complexity: O(n log n + n) => O(n) (?)
 * Space complexity: O(1)
 */

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
