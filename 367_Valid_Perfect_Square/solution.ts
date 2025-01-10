export {}

function isPerfectSquare(num: number): boolean {
  // 0, negative numbers or fractions cannot be perfect squares
  if (num < 1) return false

  // 1 * 1 = 1, is a perfect square of itself
  if (num === 1) return true

  let res = false

  // Since we already checked 0 and 1, we can initialise left from the next valid value
  let left = 2
  // Also, once we're past 2, squares will of course be multiplied by 3, 4, 5, etc.
  // So it's not worth checking all the way up to 16, for example.
  let right = Math.ceil(num / 2)

  let mid = 0
  let mult = 0

  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    mult = mid * mid

    if (mult === num) {
      res = true
      break
    }

    if (mult < num) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return res
}

/**
 * Time complexity: O(log n)
 * Space complexity: O(1)
 */

console.log(isPerfectSquare(9))

console.log(isPerfectSquare(16))
console.log(isPerfectSquare(14))
