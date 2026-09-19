export {}

/**
 * There are two semi-obvious solutions to the problem,
 * one being two pointers, the other the stack.
 *
 * Here I have chosen the stack.
 *
 * TL;DR: Any time we encounter a regular character, we push it to a stack.
 * Every time we encounter a `#`, we remove the last added character.
 */
function backspaceCompare(s: string, t: string): boolean {
  const sStack: string[] = []
  const tStack: string[] = []

  for (let sChar of s) {
    sChar !== "#" ? sStack.push(sChar) : sStack.pop()
  }

  for (let tChar of t) {
    tChar !== "#" ? tStack.push(tChar) : tStack.pop()
  }

  return sStack.join("") === tStack.join("")
}

/**
 * Time complexity: O(s + t) = O(n)
 * Space complexity: O(s + t) = O(n)
 */

console.log(backspaceCompare("ab#c", "ad#c"))
console.log(backspaceCompare("ab##", "c#d#"))
console.log(backspaceCompare("a#c", "b"))
