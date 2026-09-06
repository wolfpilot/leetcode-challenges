package main

import (
	"fmt"
	"sort"
);

func longestCommonPrefix(strs []string) string {
	
	if len(strs) == 0 || len(strs) > 200 {
		return ""
	}

	if (len(strs) == 1) {
		return strs[0]
	}

	prefix := ""

	sortedArr := strs

	sort.Strings(sortedArr)

	shortestWord := sortedArr[0]
	longestWorst := sortedArr[len(sortedArr) - 1]

	for i := 0; i < len(shortestWord); i++ {
		if shortestWord[i] != longestWorst[i] {
			prefix = shortestWord[:i]
			break
		}

		prefix += string(shortestWord[i])
	}

	return prefix
};

/**
 * Time complexity: O(n log n + n) => O(n) (?)
 * Space complexity: O(1)
 */

func main() {
	fmt.Println(longestCommonPrefix([]string{"flower", "flow", "flight"}))
	fmt.Println(longestCommonPrefix([]string{"dog", "racecar", "car"}))
}
