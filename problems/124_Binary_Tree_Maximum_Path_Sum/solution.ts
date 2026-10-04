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

/**
 * Important to keep in mind that a path is a sequence of "continuous" nodes in the tree.
 *
 * Thus, we need to calculate all the subpaths of the tree, not only the ones going through
 * the root node, but also ones going through any other node in the tree.
 *
 * @see https://www.youtube.com/watch?v=Hr5cWUld4vU
 */
function maxPathSum(root: TreeNode | null): number {
  if (!root) return 0

  let maxSum = root.val

  function dfs(node: TreeNode | null) {
    if (!node) return 0

    /**
     * Recursively find the maximum path sum of the L and R subtrees.
     *
     * Ignore if the maximum sum of L or R subtree is negative since it would decrease
     * the overall path sum.
     */
    let rightSum = Math.max(0, dfs(node.right))
    let leftSum = Math.max(0, dfs(node.left))

    // Update the maximum path sum if the current path sum is greater.
    maxSum = Math.max(maxSum, rightSum + leftSum + node.val)

    // Return the maximum path sum of the current node and one of its subtrees.
    return Math.max(rightSum, leftSum) + node.val
  }

  dfs(root)

  return maxSum
}

/**
 * Time complexity: O(n) where n is the nr of nodes
 * Space complexity: O(h) where h is the height of the tree
 */

// case 1: [1,2,3]
// prettier-ignore
console.log(maxPathSum(
    new TreeNode(1,
        new TreeNode(2),
        new TreeNode(3)
    )
))

// case 2: [-10,9,20,null,null,15,7]
// prettier-ignore
console.log(maxPathSum(new TreeNode(-10,
    new TreeNode(9),
    new TreeNode(20,
        new TreeNode(15),
        new TreeNode(7)
    )
)))
