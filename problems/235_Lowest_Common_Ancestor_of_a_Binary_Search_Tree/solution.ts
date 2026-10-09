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
 * We can simplify our lives by searching (it's a BST!) for the specified values.
 *
 * If both p & q are smaller than the parent node, go left.
 * If both p & q are larger than the parent node, go right.
 *
 * How about the `else` case, what does that mean exactly?
 *
 * Well, we know that if p & q are not on the same side (left or right), then the
 * tree must have split up, and the closest split is basically the same as the
 * Lowest Common Ancestor (LCA).
 */
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root || !p || !q) return null

  let node: TreeNode | null = root

  while (node) {
    // both left side
    if (p.val < node.val && q.val < node.val) {
      node = node.left
    }
    // both right side
    else if (p.val > node.val && q.val > node.val) {
      node = node.right
    }
    // nodes on either side, i.e. split, i.e. the LCA
    else {
      return node
    }
  }

  return null
}

/**
 * Time: O(h), where h is the tree height
 * Space: O(1)
 */

const node_1_00 = new TreeNode(6)
const node_1_01 = new TreeNode(2)
const node_1_02 = new TreeNode(8)
const node_1_03 = new TreeNode(0)
const node_1_04 = new TreeNode(4)
const node_1_05 = new TreeNode(7)
const node_1_06 = new TreeNode(9)
const node_1_07 = new TreeNode(3)
const node_1_08 = new TreeNode(5)

const tree_01 = node_1_00
node_1_00.left = node_1_01
node_1_00.right = node_1_02

node_1_01.left = node_1_03
node_1_01.right = node_1_04

node_1_04.left = node_1_07
node_1_04.right = node_1_08

node_1_02.left = node_1_05
node_1_02.right = node_1_06

// case 1: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
console.log(lowestCommonAncestor(tree_01, node_1_01, node_1_02))

// case 2: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
console.log(lowestCommonAncestor(tree_01, node_1_01, node_1_04))

// case 3: root = [2,1], p = 2, q = 1
const node_2_00 = new TreeNode(2)
const node_2_01 = new TreeNode(1)

const tree_02 = node_2_00
node_2_00.left = node_2_01

console.log(lowestCommonAncestor(tree_02, node_2_01, node_2_01))
