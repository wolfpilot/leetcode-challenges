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

// In ASCII code 97 represents the first letter "a", i.e. our baseline
const toLowerCaseChar = (val: number) => String.fromCharCode(97 + val)

function smallestFromLeaf(root: TreeNode | null): string {
  if (!root) return ""

  let smallest = ""
  let path = ""

  /**
   * 1. Make a change
   * path = ...
   *
   * 2. Explore
   * dfs(node.left)
   * dfs(node.right)
   *
   * 3. Backtrack / undo change
   * path = ...
   */
  function dfs(node: TreeNode | null) {
    if (!node) return

    // Always prepend char so that result ends up being reversed + helps with comparison
    path = toLowerCaseChar(node.val) + path

    // Leaf node (isolate/end of branch)
    if (!node.left && !node.right) {
      if (!smallest) {
        smallest = path
      }

      smallest = path <= smallest ? path : smallest
    }

    // Non-leaf nodes (with further attachments)
    node.left && dfs(node.left)
    node.right && dfs(node.right)

    // Since current char is first, we remove it with slice
    path = path.slice(1)

    return
  }

  dfs(root)

  return smallest
}

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

// case 1: [0,1,2,3,4,3,4]
const tree1 = new TreeNode(
  0,
  new TreeNode(1, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(3), new TreeNode(4))
)

console.log(smallestFromLeaf(tree1))

// case 2: [25,1,3,1,3,0,2]
const tree2 = new TreeNode(
  25,
  new TreeNode(1, new TreeNode(1), new TreeNode(3)),
  new TreeNode(3, new TreeNode(0), new TreeNode(2))
)

console.log(smallestFromLeaf(tree2))

// case 3: [2,2,1,null,1,0,null,0]
const tree3 = new TreeNode(
  2,
  new TreeNode(2, null, new TreeNode(1, new TreeNode(0))),
  new TreeNode(1, new TreeNode(0))
)

console.log(smallestFromLeaf(tree3))
