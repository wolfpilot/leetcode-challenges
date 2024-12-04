package main

import (
	"fmt"
);

func countPairs(nums []int, target int) int {
	count := 0

	// Since we're looking for pairs, there is no need for i to go to the last index.
	for i:= 0; i < len(nums) - 1; i++ {
		// Similarly, to avoid repeated calculations, j can start one index ahead of i.
		for j:= i + 1; j < len(nums); j++ {
			if (nums[i] + nums[j] >= target) {
				continue;
			}

			count++;
		}
	}

	return count;
};

/**
 * Time complexity: O(n * m)
 * Space complexity: O(1)
 */


func main() {
	fmt.Println(countPairs([]int{-1, 1, 2, 3, 1}, 2))
	fmt.Println(countPairs([]int{-6, 2, 5, -2, -7, -1, 3}, -2));
}

