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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxDiam = 0

  function dfs(node: TreeNode | null): number {
    if (!node) return 0

    let lHeight = dfs(node.left)
    let rHeight = dfs(node.right)

    // Find the max between the current max and the diameter we have just calculated
    maxDiam = Math.max(maxDiam, lHeight + rHeight)

    // Finally, return the height of the current node (which is 1 since we have guaranteed
    // it has children) + whichever side is longer
    return 1 + Math.max(lHeight, rHeight)
  }

  dfs(root)

  return maxDiam
}

/**
 * Time complexity: O(n) where n is the nr of nodes
 * Space complexity: O(h) where h is the height of the tree
 */

// case 1: [1,2,3,4,5]
// prettier-ignore
console.log(diameterOfBinaryTree(
    new TreeNode(1,
        new TreeNode(2,
            new TreeNode(4),
            new TreeNode(5),
        ),
        new TreeNode(3),
    )
))

// case 2: [1,2]
// prettier-ignore
console.log(diameterOfBinaryTree(
    new TreeNode(1,
        new TreeNode(2)
    )
))
