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
 * Create two pointers, one slow, one fast.
 *
 * Slow one goes forward 1 node at a time, fast goes 2 at a time.
 * Either the fast pointer catches up to the slow one (which can only happen
 * with a loop) or it becomes null, which means it's a finite list.
 */
function hasCycle(head: ListNode | null): boolean {
  // Early exit if list is only 1 node long
  if (!head?.next) {
    return false
  }

  let slow: ListNode | null | undefined = head
  let fast: ListNode | null | undefined = head

  while (fast) {
    slow = slow?.next
    fast = fast?.next?.next

    if (slow === fast) return true
  }

  return false
}

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

// case 1
const node1_1 = new ListNode(3)
const node1_2 = new ListNode(2)
const node1_3 = new ListNode(0)
const node1_4 = new ListNode(-4)

node1_1.next = node1_2
node1_2.next = node1_3
node1_3.next = node1_4
node1_4.next = node1_2

console.log(hasCycle(node1_1))

// case 2
const node2_1 = new ListNode(1)
const node2_2 = new ListNode(2)

node2_1.next = node2_2
node2_2.next = node2_1

console.log(hasCycle(node2_1))

// case 3
const node3_1 = new ListNode(1)

console.log(hasCycle(node3_1))
