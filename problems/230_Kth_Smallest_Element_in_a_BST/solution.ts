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

function kthSmallest(root: TreeNode | null, k: number): number {
  let result: number | null = null

  const inorder = (node: TreeNode | null) => {
    if (!node || result) return

    inorder(node.left)

    // Subtract 1 for each node left to visit
    k--

    // At this point we have found the kth smallest element
    if (k === 0) {
      result = node.val

      return
    }

    inorder(node.right)
  }

  inorder(root)

  return result ?? 0
}

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

// case 1: root = [3,1,4,null,2], k = 1
// prettier-ignore
const tree1 = new TreeNode(3,
    new TreeNode(1,
        null,
        new TreeNode(2)
    ),
    new TreeNode(4)
)

console.log(kthSmallest(tree1, 1))

// case 2: root = [5,3,6,2,4,null,null,1], k = 3
// prettier-ignore
const tree2 = new TreeNode(5,
    new TreeNode(3,
        new TreeNode(2,
            new TreeNode(1)
        ),
        new TreeNode(4)
    ),
    new TreeNode(6)
)

console.log(kthSmallest(tree2, 3))
