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
 * Loop once, keeping track of the visited nodes in a map.
 *
 * A value of false essentially means it has not been visited,
 * true means it has (although we can simply exit in this case).
 */
function hasCycle(head: ListNode | null): boolean {
  // Early exit if list is only 1 node long
  if (!head?.next) {
    return false
  }

  const map = new Map<ListNode, boolean>()

  let current: ListNode | null = head

  while (current?.next) {
    if (map.get(current) === false) {
      return true
    }

    map.set(current, false)

    current = current.next
  }

  return false
}

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
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
