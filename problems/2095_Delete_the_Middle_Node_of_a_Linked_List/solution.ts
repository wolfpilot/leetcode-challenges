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
 * Another turtle & hare problem.
 *
 * Turtle goes forward 1 node at a time, hare goes 2 at a time.
 *
 * The moment the hare crosses the finish line, the turtle will be
 * exactly halfway through, the middle point we are looking for.
 *
 * However, that is the node we need to skip, so instead we can either
 * make the turtle start even further behind at a "ghost" node 0,
 * before the head, or let the hare start 2 steps ahead.
 *
 * Since the former means adding an extra node, we will go for the latter.
 */
function deleteMiddle(head: ListNode | null): ListNode | null {
  if (!head?.next) return null

  let slow: ListNode | null = head
  let fast: ListNode | null = head.next.next

  while (slow?.next && fast?.next) {
    slow = slow.next
    fast = fast.next.next
  }

  slow.next = slow.next?.next || null

  return head
}

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

// Case 1: [1,3,4,7,1,2,6]
const node1_1 = new ListNode(1)
const node1_2 = new ListNode(3)
const node1_3 = new ListNode(4)
const node1_4 = new ListNode(7)
const node1_5 = new ListNode(1)
const node1_6 = new ListNode(2)
const node1_7 = new ListNode(6)

node1_1.next = node1_2
node1_2.next = node1_3
node1_3.next = node1_4
node1_4.next = node1_5
node1_5.next = node1_6
node1_6.next = node1_7

console.log(deleteMiddle(node1_1))

// Case 2: [1,2,3,4]
const node2_1 = new ListNode(1)
const node2_2 = new ListNode(2)
const node2_3 = new ListNode(3)
const node2_4 = new ListNode(4)

node2_1.next = node2_2
node2_2.next = node2_3
node2_3.next = node2_4

console.log(deleteMiddle(node2_1))

// Case 3: [2,1]
const node3_1 = new ListNode(2)
const node3_2 = new ListNode(1)

node3_1.next = node3_2

console.log(deleteMiddle(node3_1))
