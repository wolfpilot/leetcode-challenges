export {}

const NUMBERS: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

function romanToInt(s: string): number {
  let res = 0

  for (let i = 0; i < s.length; i++) {
    // Look one character ahead to check whether it's a subtraction
    if (NUMBERS[s[i + 1]] > NUMBERS[s[i]]) {
      res += NUMBERS[s[i + 1]] - NUMBERS[s[i]]

      i++
      continue
    }
    // Otherwise, just add the value
    else {
      res += NUMBERS[s[i]]
    }
  }

  if (res < 1 || res > 3999) return NaN

  return res
}

console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))
