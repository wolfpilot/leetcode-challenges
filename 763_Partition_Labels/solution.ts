function partitionLabels(s: string): number[] {
  const res: number[] = []

  // Record the last index of each character in the string
  const lastOccurrences = new Map()

  for (let i = 0; i < s.length; i++) {
    lastOccurrences.set(s[i], i)
  }

  // Beginning and ending of the current partition
  let startIndex = 0
  let endIndex = 0

  for (let i = 0; i < s.length; i++) {
    endIndex = Math.max(endIndex, lastOccurrences.get(s[i]))

    // Should we loop past the highest last index out of all
    // the chars so far, we can start a new partition
    if (i === endIndex) {
      res.push(endIndex - startIndex + 1)
      startIndex = i + 1
    }
  }

  return res
}

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

console.log(partitionLabels("ababcbacadefegdehijhklij"))
console.log(partitionLabels("eccbbbbdec"))
