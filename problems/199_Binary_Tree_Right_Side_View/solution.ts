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

function rightSideView(root: TreeNode | null): number[] {
  if (!root) return []

  const result: number[] = [root.val]
  const queue = [root]

  while (queue.length) {
    const levelLen = queue.length

    // Loop through all current level's nodes
    for (let i = 0; i < levelLen; i++) {
      // Get first node and remove it from the queue at the same time
      const node = queue.shift()

      if (!node) continue

      // Insert new nodes if they exist
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }

    // The last inserted node will automatically be the right most one
    // for the given tree level before the queue is consumed
    if (queue.length) {
      result.push(queue[queue.length - 1].val)
    }
  }

  return result
}

/**
 * Time complexity: O(n) - length of the tree
 * Space complexity: O(m) - number of levels
 */

// case 1: [1,2,3,null,5,null,4]
const tree1 = new TreeNode(
  1,
  new TreeNode(2, null, new TreeNode(5)),
  new TreeNode(3, null, new TreeNode(4))
)

console.log(rightSideView(tree1))

// case 2: [1,2,3,4,null,null,null,5]
const tree2 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4, new TreeNode(5), null), null),
  new TreeNode(3)
)

console.log(rightSideView(tree2))

// case 3: [1,null,3]
const tree3 = new TreeNode(1, null, new TreeNode(3))

console.log(rightSideView(tree3))

// case 4: [4]
const tree4 = new TreeNode()

console.log(rightSideView(tree4))
