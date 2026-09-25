export {}

/**
 * Definition for a binary tree node.
 */
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return []

  const queue = [root]
  const result: number[][] = []

  while (queue.length) {
    const level: number[] = []
    const levelLen = queue.length

    // Loop through all current level's nodes
    for (let i = 0; i < levelLen; i++) {
      // Get first element and remove it from queue at the same time
      const node = queue.shift()

      if (!node) continue

      // Insert current level values
      level.push(node.val)

      // Insert new nodes if they exist
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }

    // Insert new grouped nodes (i.e. the array) level-by-level
    result.push(level)
  }

  return result
}

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

// case 1: [3,9,20,null,null,15,7]
const tree1 = new TreeNode(
  3,
  new TreeNode(9, null, null),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
)

console.log(levelOrder(tree1))

// case 2: [1]
const tree2 = new TreeNode(1)

console.log(levelOrder(tree2))

// case 3: []
const tree3 = new TreeNode()

console.log(levelOrder(tree3))
