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
 * This is a mind-bender, so please watch someone who can actually explain it properly.
 *
 * @see https://www.youtube.com/watch?v=WO1tfq2sbsI
 */
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  function dfs(node: TreeNode | null): TreeNode | null {
    if (!node || node === p || node === q) return node

    const left = dfs(node.left)
    const right = dfs(node.right)

    if (left && right) return node

    return left ?? right
  }

  return dfs(root)
}

/**
 * Time: O(n) -> possibly traversing all n nodes
 * Space: O(1) -> only constant space used or O(n) if considering space used for recursive loops
 */

const node_1_00 = new TreeNode(3)
const node_1_01 = new TreeNode(5)
const node_1_02 = new TreeNode(1)
const node_1_03 = new TreeNode(6)
const node_1_04 = new TreeNode(2)
const node_1_05 = new TreeNode(0)
const node_1_06 = new TreeNode(8)
const node_1_07 = new TreeNode(7)
const node_1_08 = new TreeNode(4)

const tree_01 = node_1_00
node_1_00.left = node_1_01
node_1_00.right = node_1_02

node_1_01.left = node_1_03
node_1_01.right = node_1_04

node_1_02.left = node_1_05
node_1_02.right = node_1_06

node_1_04.left = node_1_07
node_1_04.right = node_1_08

// case 1: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
console.log(lowestCommonAncestor(tree_01, node_1_01, node_1_02))

// case 2: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
console.log(lowestCommonAncestor(tree_01, node_1_01, node_1_08))

// case 3: root = [2,1], p = 2, q = 1
const node_2_00 = new TreeNode(2)
const node_2_01 = new TreeNode(1)

const tree_02 = node_2_00
node_2_00.left = node_2_01

console.log(lowestCommonAncestor(tree_02, node_2_01, node_2_01))
