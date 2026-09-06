class Solution {
    fun buildArray(nums: IntArray): IntArray {
        return IntArray(nums.size) { index -> nums[nums[index]] }
    }

    /**
    * Time complexity: O(n)
    * Space complexity: O(1)
    */

    fun main() {
        val res1 = buildArray(intArrayOf(0, 2, 1, 5, 3, 4))
        println("res1 ${res1.joinToString()}")

        val res2 = buildArray(intArrayOf(5, 0, 1, 2, 3, 4))
        println("res2 ${res2.joinToString()}")
    }
}
