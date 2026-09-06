export {}

/**
 * Brute force involves looping twice, once for each element of the array,
 * then again for each pair. This is not ideal.
 *
 * Instead, we will leverage a hashmap, storing each value of the array
 * as we traverse it. With every increment we can now check the stored values
 * to figure out if we already have the pair that would add up to the target.
 *
 * Map lookups are O(1) and we only need to loop n times.
 */
function twoSum(nums: number[], target: number): number[] {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]

    if (map.has(diff)) {
      return [map.get(diff), i]
    }

    map.set(nums[i], i)
  }

  return []
}

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))
