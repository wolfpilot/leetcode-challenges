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

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null
  }

  return {
    val: root.val,
    right: invertTree(root.left),
    left: invertTree(root.right),
  }
}

/**
 * Time complexity: O(n) where n = nr of nodes
 * Space complexity: O(l) where l = levels of tree
 */

// case 1: [4,2,7,1,3,6,9]
const tree1 = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7, new TreeNode(6), new TreeNode(9))
)

console.log(invertTree(tree1))

// case 2: [2,1,3]
const tree2 = new TreeNode(2, new TreeNode(1), new TreeNode(3))

console.log(invertTree(tree2))

// case 3: []
const tree3 = new TreeNode()

console.log(invertTree(tree3))
