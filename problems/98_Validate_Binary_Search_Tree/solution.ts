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
 *
 * A very good explanation of the algorithm used can be found below.
 *
 * Credits: Greg Hogg
 * @see https://www.youtube.com/watch?v=nTXuWuqIka4
 */
function validate(node: TreeNode | null, min: number, max: number): boolean {
  if (!node) return true

  if (node.val <= min || node.val >= max) return false

  return validate(node.left, min, node.val) && validate(node.right, node.val, max)
}

function isValidBST(root: TreeNode | null): boolean {
  return validate(root, Number(-Infinity), Number(Infinity))
}

/**
 * Time complexity: O(n) - max number of nodes
 * Space complexity: O(k) - number of levels
 */

// case 1: [2,1,3]
// prettier-ignore
console.log(isValidBST(
    new TreeNode(2,
        new TreeNode(1),
        new TreeNode(3)
    )
))

// case 2: [5,1,4,null,null,3,6]
// prettier-ignore
console.log(
    isValidBST(
        new TreeNode(5,
            new TreeNode(1),
            new TreeNode(4,
                new TreeNode(3),
                new TreeNode(6)
            )
        )
    )
)
