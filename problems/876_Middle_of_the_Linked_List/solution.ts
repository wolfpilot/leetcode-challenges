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
 * Classic turtle & hare problem.
 *
 * Hare goes 2x the turtle's speed, which means when the
 * hare finishes the "race", the turtle will be in the middle.
 */
function middleNode(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head

  let slow: ListNode | null | undefined = head
  let fast: ListNode | null | undefined = head

  while (fast?.next != null) {
    slow = slow?.next
    fast = fast.next.next
  }

  return slow
}

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

// Case 1: [1,2,3,4,5]
const node1_1 = new ListNode(1)
const node1_2 = new ListNode(2)
const node1_3 = new ListNode(3)
const node1_4 = new ListNode(4)
const node1_5 = new ListNode(5)

node1_1.next = node1_2
node1_2.next = node1_3
node1_3.next = node1_4
node1_4.next = node1_5

console.log(middleNode(node1_1))

// Case 2: [1,2,3,4,5,6]
const node2_1 = new ListNode(1)
const node2_2 = new ListNode(2)
const node2_3 = new ListNode(3)
const node2_4 = new ListNode(4)
const node2_5 = new ListNode(5)
const node2_6 = new ListNode(6)

node2_1.next = node2_2
node2_2.next = node2_3
node2_3.next = node2_4
node2_4.next = node2_5
node2_5.next = node2_6

console.log(middleNode(node2_1))
