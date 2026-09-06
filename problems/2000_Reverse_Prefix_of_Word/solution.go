package main

import (
	"fmt"
	"strings"
);

func reversePrefix(word string, ch byte) string {
	reversed := ""

	firstOccurence := strings.IndexByte(word, ch)

	if firstOccurence < 0 {
		return word
	}

	for i := firstOccurence; i >= 0; i-- {
		reversed += string(word[i])
	}

	reversed += word[firstOccurence + 1:]

	return reversed;
};

/**
 * Time complexity: O(n + m)
 * Space complexity: O(1)
 */

func main() {
	fmt.Println(reversePrefix("abcdefd", 'b'));
	fmt.Println(reversePrefix("xyxzxe", 'z'));
	fmt.Println(reversePrefix("abcd", 'z'));
}

