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

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0

  const maxLeft = maxDepth(root.left)
  const maxRight = maxDepth(root.right)

  // +1 being the head node itself
  return Math.max(maxLeft, maxRight) + 1
}

/**
 * Time complexity: O(l + r)
 * Space complexity: O(1)
 */

// case 1: [3,9,20,null,null,15,7]
// prettier-ignore
console.log(maxDepth(
    new TreeNode(
        3,
        new TreeNode(9),
        new TreeNode(20,
            new TreeNode(15),
            new TreeNode(7)
        )
    )
))

// case 2: [1,null,2]
// prettier-ignore
console.log(maxDepth(
    new TreeNode(1,
        null,
        new TreeNode(2)
    )
))
