package main

import (
	"fmt"
	"math"
	"sort"
);

func minimumAverage(nums []int) float64 {
	averages := []float64{}

	sortedNums := nums;
	sort.Ints(sortedNums);

	for len(sortedNums) > 0 {
		min := sortedNums[0]
		sortedNums = sortedNums[1:]
		max := sortedNums[len(sortedNums) - 1]
		sortedNums = sortedNums[:len(sortedNums) - 1]

		averages = append(averages, float64(min + max) / 2)
	}

	min := averages[0]

	for _, val := range averages[1:] {
        min = math.Min(min, val)
    }

	return min
}

/**
 * Time complexity: O(log n + n / 2) => O(n)
 * Space complexity: O(n)
 */

func main() {
	fmt.Println(minimumAverage([]int{7, 8, 3, 4, 15, 13, 4, 1}));
	fmt.Println(minimumAverage([]int{1, 9, 8, 3, 10, 5}));
	fmt.Println(minimumAverage([]int{1, 2, 3, 7, 8, 9}));
}

