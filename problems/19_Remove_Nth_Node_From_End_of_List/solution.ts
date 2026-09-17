export {}

/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

/**
 * There are plenty of good explanations on this, one of them being NeetCode's:
 *
 * @see https://youtu.be/XVuQxVej6y8?t=405
 *
 * The main difference here is that we use a lookahead pointer since there's
 * no point(er... ha!) in having an extra dummy list around.
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let left = head
  let right = head

  // Advance the left pointer `n` given nodes
  for (let i = 0; i < n; i++) {
    left = left?.next || null
  }

  // Cover edge case where first node is being removed
  if (!left) {
    return head?.next || null
  }

  // Advance both pointers
  while (left?.next && right?.next) {
    left = left?.next
    right = right?.next
  }

  // Skip one node
  right!.next = right?.next?.next || null

  return head
}

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

// Case 1: [1,2,3,4,5], 2
const node1_1 = new ListNode(1)
const node1_2 = new ListNode(2)
const node1_3 = new ListNode(3)
const node1_4 = new ListNode(4)
const node1_5 = new ListNode(5)

node1_1.next = node1_2
node1_2.next = node1_3
node1_3.next = node1_4
node1_4.next = node1_5

console.log(removeNthFromEnd(node1_1, 2))

// Case 2: [1], 1
const node2_1 = new ListNode(1)

console.log(removeNthFromEnd(node2_1, 1))

// Case 3: [1,2], 1
const node3_1 = new ListNode(1)
const node3_2 = new ListNode(2)

node3_1.next = node3_2

console.log(removeNthFromEnd(node3_1, 2))
