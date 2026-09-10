export {}

function isHappy(n: number): boolean {
  const record = new Set()

  let current = n

  while (true) {
    let sum = 0

    // Loop through every digit
    for (let digit of current.toString()) {
      // Squaring and adding to the sum
      sum += Math.pow(Number(digit), 2)
    }

    // Target detected
    if (sum === 1) return true

    // Loop detected
    if (record.has(current)) return false

    record.add(current)
    current = sum
  }
}

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

console.log(isHappy(19))
console.log(isHappy(2))
