function maxArea(height: number[]): number {
  let res = 0

  let left = 0
  let right = height.length - 1

  while (left <= right) {
    // The maximum amount of liquid will be held
    // by the lowest common height of the walls.
    // Anything more and it would spill out.
    const containerHeight = Math.min(height[left], height[right])
    const containerBase = right - left

    const area = containerHeight * containerBase

    // Update max area, if possible
    res = Math.max(area, res)

    // We previously established that the max amount of liquid
    // is limited by the shortest wall, therefore as we iterate
    // through we will only be looking for higher walls which
    // would increase the storage capacity.
    height[left] > height[right] ? right-- : left++
  }

  return res
}

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(maxArea([1, 1]))
